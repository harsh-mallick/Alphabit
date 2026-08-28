import connect from "../../lib/dbConnect";
import Messagepage from "../../models/Chat";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connect();

        // Initialize Resend
        const resend = new Resend(process.env.RESEND_KEY);

        // Parse request body
        const body = await req.json();

        const { name, email, message } = body.doubtmessage || {};

        // Validate fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    status_code: 402,
                    message: "Cannot send message as a field is blank",
                },
                { status: 402 }
            );
        }

        // Save message to MongoDB
        const send_message = new Messagepage({
            name,
            email,
            message,
        });

        const savedMessage = await send_message.save();

        console.log("Message saved:", savedMessage);

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Alphabit <noreply@alpha-bit.tech>',
            to: ["alphabitamitysaket@gmail.com"],
            subject: "Alphabit Website Help Request",
            html: `
                <h2>New Help Request</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        // Handle Resend error
        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                {
                    success: false,
                    isProcessing: false,
                    status_code: 500,
                    message: "Message was saved, but email could not be sent",
                    error: error,
                },
                { status: 500 }
            );
        }

        // Everything succeeded
        return NextResponse.json({
            success: true,
            isProcessing: false,
            status_code: 200,
            message: "Message sent successfully",
            data,
        });

    } catch (error) {
        console.error("API error:", error);

        return NextResponse.json(
            {
                success: false,
                isProcessing: false,
                status_code: 500,
                message: "Failed to send message",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}
