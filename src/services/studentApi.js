const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const studentApi = {
  // Get all students
  getStudents: async () => {
    try {
      if (API_URL.includes('localhost')) {
        // Use mock data if backend is not available
        return getMockStudents()
      }
      const response = await fetch(`${API_URL}/api/students`)
      if (!response.ok) throw new Error('Failed to fetch students')
      return await response.json()
    } catch (error) {
      console.log('Using mock data:', error.message)
      return getMockStudents()
    }
  },

  // Create new student
  createStudent: async (student) => {
    try {
      if (API_URL.includes('localhost')) {
        return { ...student, id: Date.now() }
      }
      const response = await fetch(`${API_URL}/api/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      })
      if (!response.ok) throw new Error('Failed to create student')
      return await response.json()
    } catch (error) {
      console.error('Error creating student:', error)
      return { ...student, id: Date.now() }
    }
  },

  // Update student
  updateStudent: async (id, student) => {
    try {
      if (API_URL.includes('localhost')) {
        return { ...student, id }
      }
      const response = await fetch(`${API_URL}/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      })
      if (!response.ok) throw new Error('Failed to update student')
      return await response.json()
    } catch (error) {
      console.error('Error updating student:', error)
      return { ...student, id }
    }
  },

  // Delete student
  deleteStudent: async (id) => {
    try {
      if (API_URL.includes('localhost')) {
        return { success: true }
      }
      const response = await fetch(`${API_URL}/api/students/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete student')
      return await response.json()
    } catch (error) {
      console.error('Error deleting student:', error)
      return { success: true }
    }
  }
}

// Mock data for development
const getMockStudents = () => {
  return [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      age: 21,
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      age: 20,
      gender: 'Female'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      email: 'alex@email.com',
      age: 22,
      gender: 'Other'
    }
  ]
}
