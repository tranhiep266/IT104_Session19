// @ts-ignore
import React from "react";

export default function Ex5() {
    return (
        <div className="flex justify-center items-center mt-20 ">
            <div className="relative w-80 h-48 bg-sky-200 border border-sky-300 rounded-lg p-4">
                <p className="text-sky-800 font-semibold">Relative parent</p>

                <div className="absolute bottom-2 left-2 bg-sky-500 text-white font-bold px-4 py-2 rounded-lg">
                    Absolute child
                </div>
            </div>
        </div>
    );
}