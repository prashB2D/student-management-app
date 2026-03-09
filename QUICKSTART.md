# 📚 Quick Start Guide

## Option 1: Frontend Only (Easiest)

This is the quickest way to get started! No database required.

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

**What you get:**
- ✅ Working student management dashboard
- ✅ Add, edit, delete students
- ✅ Export to Excel
- ✅ Built-in mock data
- ❌ No data persistence (refreshing page resets data)

---

## Option 2: Full Stack (Frontend + Backend)

For production-ready app with persistent data.

### Step 1: Install PostgreSQL

**Windows:**
1. Download from https://www.postgresql.org/download/windows/
2. Run installer
3. Remember password (set during installation)
4. Default settings are fine

**Mac:**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu):**
```bash
sudo apt-get install postgresql postgresql-contrib
```

### Step 2: Create Database

```bash
# Open PostgreSQL command line
psql -U postgres

# Create database
CREATE DATABASE student_db;

# Exit
\q
```

### Step 3: Setup Frontend

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Step 4: Setup Backend

In a **new terminal**:

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env - Set correct DATABASE_URL:
# DATABASE_URL="postgresql://postgres:your_password@localhost:5432/student_db"

# Setup database
npx prisma migrate dev --name init

# Start backend server
npm run dev
```

### Step 5: Connect Frontend to Backend

Edit frontend `.env.local`:
```bash
VITE_API_URL=http://localhost:3000
```

**Restart frontend** (npm run dev)

---

## Troubleshooting

### "Port 5173 already in use"
```bash
# Kill process or use different port
npm run dev -- --port 5174
```

### "Cannot connect to database"
1. Check PostgreSQL is running
2. Verify DATABASE_URL in backend/.env
3. Ensure database user/password is correct

### "Prisma client not found"
```bash
cd backend
npx prisma generate
```

### "CORS error"
1. Make sure backend is running
2. Check VITE_API_URL in .env.local
3. Restart frontend

### Mock data not loading
1. Make sure VITE_API_URL is not set or
2. Comment out VITE_API_URL to use mock data

---

## File Locations

**Frontend:**
- Main app: `src/App.jsx`
- Dashboard: `src/pages/Dashboard.jsx`
- Components: `src/components/`
- API: `src/services/studentApi.js`

**Backend:**
- Main server: `backend/src/main.ts`
- API routes: `backend/src/students/students.controller.ts`
- Database: `backend/prisma/schema.prisma`

---

## Common Tasks

### Add a new field to students

**Backend:**
1. Update `backend/prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name add_field`

**Frontend:**
1. Update form in `src/components/StudentForm.jsx`
2. Update table in `src/components/StudentTable.jsx`
3. Update API calls as needed

### Change styling

Edit Tailwind classes in components. Base file: `src/index.css`

### Customize color scheme

Edit `tailwind.config.js` theme section

### Change API endpoints

Edit `src/services/studentApi.js`

---

## Next Steps

1. ✅ Get familiar with the code
2. ✅ Try adding/editing/deleting students
3. ✅ Export to Excel
4. ✅ Modify styling to your preference
5. ✅ Add new features
6. ✅ Deploy to Vercel

---

## Need Help?

- Check README.md in main folder
- Check backend/README.md for server setup
- Review component code - it's simple and commented
- Check studentApi.js for API structure

---

## Deployment

### Frontend Only (Vercel)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial"
git push origin main

# Visit vercel.com and connect repo
# Click Deploy
```

### Full Stack
- Frontend → Vercel
- Backend → Heroku, Railway, or your server
- Database → Cloud PostgreSQL (Heroku Postgres, Railway, etc)

---

Happy coding! 🚀
