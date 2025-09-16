import type {ReactNode} from "react";

type Props = {
    open: boolean;
    title?: string;
    message?: ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function ConfirmModal({ open, title = "Xác nhận", message, onCancel, onConfirm }: Props) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-[420px]">
                <div className="px-5 py-4 border-b">
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="px-5 py-4 text-gray-700">
                    {message}
                </div>
                <div className="px-5 py-3 border-t flex justify-end gap-3">
                    <button onClick={onCancel} className="px-4 py-2 rounded-lg border">Hủy</button>
                    <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-red-500 text-white">Xóa</button>
                </div>
            </div>
        </div>
    );
}