import { CheckCircle, XCircle, X } from "lucide-react";

const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-sm">
      <div
        className={`flex items-start gap-3 rounded-xl border p-4 shadow-lg ${
          isSuccess
            ? "border-green-200 bg-green-50 text-green-800"
            : "border-red-200 bg-red-50 text-red-800"
        }`}
      >
        {isSuccess ? (
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
        ) : (
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
        )}

        <p className="flex-1 text-sm font-medium">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1 hover:bg-black/5"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;