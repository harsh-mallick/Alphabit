"use client";
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Download } from 'lucide-react';

const FileDownloader = (student_data) => {
    const handleExport = () => {
        // 1. Convert JSON to worksheet
        const worksheet = XLSX.utils.json_to_sheet(student_data.student_data);

        // 2. Create a workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Registerd Student List");

        // 3. Write to binary array
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        // 4. Convert to Blob and trigger download
        const data = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(data, "Registerd Student List.xlsx");
    };
    return (
        <div className="p-5">
            <button
                onClick={handleExport}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:cursor-pointer"
            >
                <p className="flex gap-2"><Download />Download List</p>
            </button>
        </div>
    );
};

export default FileDownloader;
