import { utils, writeFile } from 'xlsx'

export const exportStudentsToExcel = (students) => {
  // Prepare data for export
  const data = students.map(({ id, name, email, age, gender }) => ({
    Name: name,
    Email: email,
    Age: age,
    Gender: gender
  }))

  // Create workbook and worksheet
  const worksheet = utils.json_to_sheet(data)
  const workbook = utils.book_new()
  utils.book_append_sheet(workbook, worksheet, 'Students')

  // Set column widths
  worksheet['!cols'] = [
    { wch: 20 }, // Name
    { wch: 25 }, // Email
    { wch: 8 },  // Age
    { wch: 12 }  // Gender
  ]

  // Write file
  writeFile(workbook, 'students.xlsx')
}
