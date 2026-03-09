import { useState, useEffect } from 'react'
import { FiPlus, FiDownload } from 'react-icons/fi'
import { StudentTable } from '../components/StudentTable'
import { StudentForm } from '../components/StudentForm'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Loader } from '../components/Loader'
import { studentApi } from '../services/studentApi'
import { exportStudentsToExcel } from '../utils/exportExcel'

export const Dashboard = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, id: null })

  // Load students on mount
  useEffect(() => {
    const loadStudents = async () => {
      setLoading(true)
      const data = await studentApi.getStudents()
      setStudents(data)
      // Simulate loading time for better UX
      setTimeout(() => setLoading(false), 1000)
    }
    loadStudents()
  }, [])

  // Handle form submit for add/edit
  const handleFormSubmit = async (formData) => {
    if (editingStudent) {
      // Update student
      await studentApi.updateStudent(editingStudent.id, formData)
      setStudents(students.map(s =>
        s.id === editingStudent.id ? { ...s, ...formData } : s
      ))
      setEditingStudent(null)
    } else {
      // Add new student
      const newStudent = await studentApi.createStudent(formData)
      setStudents([...students, newStudent])
    }
  }

  // Handle edit
  const handleEdit = (student) => {
    setEditingStudent(student)
    setFormOpen(true)
  }

  // Handle delete click
  const handleDeleteClick = (id) => {
    setDeleteConfirm({ isOpen: true, id })
  }

  // Handle delete confirm
  const handleDeleteConfirm = async () => {
    await studentApi.deleteStudent(deleteConfirm.id)
    setStudents(students.filter(s => s.id !== deleteConfirm.id))
    setDeleteConfirm({ isOpen: false, id: null })
  }

  // Handle form close
  const handleFormClose = () => {
    setFormOpen(false)
    setEditingStudent(null)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Student Management</h1>
          <p className="text-gray-600">Manage and track student information</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setFormOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <FiPlus size={20} />
            Add Student
          </button>
          <button
            onClick={() => exportStudentsToExcel(students)}
            disabled={students.length === 0}
            className="flex items-center justify-center gap-2 px-6 py-3 glass shadow-glass text-gray-800 font-semibold rounded-lg hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiDownload size={20} />
            Download Excel
          </button>
        </div>

        {/* Student Table */}
        <StudentTable
          students={students}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* Student Form Modal */}
      <StudentForm
        isOpen={formOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={editingStudent}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteConfirm.isOpen}
        title="Delete Student"
        message="Are you sure you want to delete this student? This action cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteConfirm({ isOpen: false, id: null })}
      />
    </div>
  )
}
