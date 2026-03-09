export const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass shadow-glass p-8 rounded-2xl max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
