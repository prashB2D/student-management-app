export const Loader = ({ message = "Loading students..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
      <div className="glass shadow-glass p-8 rounded-2xl text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  )
}
