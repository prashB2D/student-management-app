# Student Management Application

A simple, modern, and beautiful student management dashboard built with React, Vite, and Tailwind CSS. Features glassmorphism design, form validation, and Excel export capabilities.

## Features

✨ **Core Features:**
- 📋 View students in a responsive table
- ➕ Add new students with form validation
- ✏️ Edit existing student information
- 🗑️ Delete students with confirmation dialog
- 📥 Download student data as Excel file (.xlsx)

🎨 **Design:**
- Glassmorphism UI with blur effects
- Modern gradient backgrounds
- Responsive layout (mobile & desktop)
- Smooth animations and transitions

🛠️ **Technology Stack:**
- React 18
- Vite
- Tailwind CSS
- React Hook Form
- Zod validation
- SheetJS (xlsx)
- React Icons

## Project Structure

```
student-management-app/
├── src/
│   ├── components/
│   │   ├── StudentTable.jsx       # Table display component
│   │   ├── StudentForm.jsx        # Add/Edit form with validation
│   │   ├── ConfirmDialog.jsx      # Delete confirmation dialog
│   │   └── Loader.jsx             # Loading spinner
│   ├── pages/
│   │   └── Dashboard.jsx          # Main page
│   ├── services/
│   │   └── studentApi.js          # API calls (with mock data)
│   ├── utils/
│   │   └── exportExcel.js         # Excel export utility
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind & global styles
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies
```

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Student Data Model

Each student has the following structure:

```javascript
{
  id: number,
  name: string,
  email: string,
  age: number,
  gender: string // "Male", "Female", or "Other"
}
```

## Validation Rules

**Form Validation:**
- Name: Required, minimum 2 characters
- Email: Required, valid email format
- Age: Required, number between 1-120
- Gender: Required, must select from dropdown

## Features Explained

### 1. View Students
The dashboard displays all students in a responsive table with columns:
- Name
- Email
- Age
- Gender
- Actions (Edit/Delete buttons)

### 2. Add Student
Click "Add Student" button to open form. Fill in details and submit:
- Form validates input before submission
- New student is added to the table
- Form resets after submission

### 3. Edit Student
Click the edit icon next to a student:
- Form opens with existing data
- Update any field
- Submit to update the table

### 4. Delete Student
Click the delete icon to remove a student:
- Confirmation dialog appears
- Confirm deletion to remove from table

### 5. Export Excel
Click "Download Excel" to export all students:
- Creates `students.xlsx` file
- Includes Name, Email, Age, Gender columns
- Properly formatted with column widths

## Mock Data

The application comes with mock data for development:
- John Doe (john@email.com, 21, Male)
- Jane Smith (jane@email.com, 20, Female)
- Alex Johnson (alex@email.com, 22, Other)

## Backend Integration (Optional)

The app is configured to work with an optional backend API. To use a backend:

1. Set the `VITE_API_URL` environment variable:
```bash
VITE_API_URL=http://localhost:3000
```

2. The API endpoints expected:
```
GET    /api/students              - Get all students
POST   /api/students              - Create student
PUT    /api/students/:id          - Update student
DELETE /api/students/:id          - Delete student
```

If the backend is not available, the app falls back to mock data.

## Styling (Glassmorphism)

The app uses glassmorphism CSS classes:

```css
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## Deploying to Vercel

### Step 1: Connect Repository
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy on Vercel
1. Visit [vercel.com](https://vercel.com)
2. Connect your Git repository
3. Vercel automatically detects Vite project
4. Click "Deploy"

### Step 3: Environment Variables (if using backend)
In Vercel dashboard, add:
```
VITE_API_URL=https://your-backend-url.com
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Code Style

- Simple and readable code
- Clear variable names
- Small, focused components
- No over-engineering
- Easy to understand and modify

## Tips for Development

1. **Add more fields:** Modify the schema in `StudentForm.jsx` and `studentApi.js`
2. **Change styling:** Update Tailwind classes in components
3. **Mock different data:** Edit `getMockStudents()` in `studentApi.js`
4. **Add search/filter:** Extend Dashboard state and add filter input
5. **Connect backend:** Update API URLs in `studentApi.js`

## Common Issues

**Q: Form validation not working?**
A: Check that Zod schema matches your form fields

**Q: Excel export not working?**
A: Ensure xlsx library is installed: `npm install xlsx`

**Q: Styling looks broken?**
A: Clear cache and restart dev server: `npm run dev`

## Performance Tips

- App lazy loads students on mount (simulated 1s delay)
- Table efficiently updates only changed rows
- Form resets after submission
- Confirmation dialogs prevent accidental deletions
- Export creates file on client-side (no server needed)

## Future Enhancements

- Search and filter functionality
- Sorting by columns
- Pagination for large datasets
- Student profile details page
- Bulk import from Excel
- Student statistics/dashboard
- User authentication
- Dark mode theme

## License

Open source - feel free to use and modify!

## Support

For issues or questions, check the code comments or review the component structure. The codebase is intentionally simple for easy understanding.
