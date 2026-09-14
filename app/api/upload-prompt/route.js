import connect from "../../lib/dbConnect";
import PromptPage from "../../models/PromptModel";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
    try {
        await connect();
        const formData = await req.formData();
        // console.log(formData)

        const eventName = formData.get("eventName");
        const description = formData.get("description");
        const file = formData.get("file");
        const image = formData.get("image");

        // console.log(image)

        // Validate fields
        if (!eventName || !description || !file || !image) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Event name, description and file are required",
                },
                { status: 400 }
            );
        }

        // Check that it is actually a file
        if (typeof file === "string" || typeof image === "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid file",
                },
                { status: 400 }
            );
        }

        // Convert file to Buffer
        const bytes1 = await file.arrayBuffer();
        const buffer1 = Buffer.from(bytes1);

        // Upload Buffer to Cloudinary
        const uploadResult1 = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "auto",
                    folder: "prompts",
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

            uploadStream.end(buffer1);
        });


        // Convert file to Buffer
        const bytes2 = await image.arrayBuffer();
        const buffer2 = Buffer.from(bytes2);

        // Upload Buffer to Cloudinary
        const uploadResult2 = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "auto",
                    folder: "prompts",
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

            uploadStream.end(buffer2);
        });

        // Save Cloudinary information in MongoDB
        const prompt = await PromptPage.create({
            eventName,
            description,
            image: uploadResult2.secure_url,
            fileUrl: uploadResult1.secure_url,
            fileID: uploadResult1.public_id,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Prompt uploaded successfully",
                data: prompt,
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Upload error:", error);
        const size_error = error.message
        if (size_error.includes("File size too large.")) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Failed to upload prompt",
                    error: error.message + " Please check and compress both the uploaded files using external compressor",
                },
                { status: 500 }
            );
        }
        return NextResponse.json(
            {
                success: false,
                message: "Failed to upload prompt",
                error: error.message,
            },
            { status: 500 }
        );
    }
}