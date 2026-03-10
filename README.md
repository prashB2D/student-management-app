Student Management Application

A simple, modern, and beautiful student management dashboard built with React, Vite, and Tailwind CSS. Features glassmorphism design, form validation, and Excel export capabilities.

## Features

 **Core Features:**
-  View students in a responsive table
-  Add new students with form validation
-  Edit existing student information
-  Delete students with confirmation dialog
-  Download student data as Excel file (.xlsx)

 **Design:**
- Glassmorphism UI with blur effects
- Modern gradient backgrounds
- Responsive layout (mobile & desktop)
- Smooth animations and transitions

 **Technology Stack:**
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



