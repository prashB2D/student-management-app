import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export const StudentTable = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return (
      <div className="glass shadow-glass rounded-2xl p-12 text-center">
        <p className="text-gray-600 text-lg font-medium">No students found. Add your first student!</p>
      </div>
    )
  }

  return (
    <div className="glass shadow-glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white/20 border-b border-white/30">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Age</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Gender</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`${
                  index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
                } border-b border-white/20 hover:bg-white/15 transition-colors`}
              >
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.age}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.gender}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => onEdit(student)}
                      className="p-2 rounded-lg bg-blue-500/30 text-blue-700 hover:bg-blue-500/50 transition-all"
                      title="Edit student"
                    >
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(student.id)}
                      className="p-2 rounded-lg bg-red-500/30 text-red-700 hover:bg-red-500/50 transition-all"
                      title="Delete student"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
