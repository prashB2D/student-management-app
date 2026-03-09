# Student Management Backend

A simple NestJS-based REST API for managing student records. This backend serves the frontend application and manages data persistence using PostgreSQL and Prisma ORM.

## Tech Stack

- **NestJS** - Progressive Node.js framework
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Database
- **Prisma** - ORM for database operations
- **TypeScript** - Type-safe development

## Prerequisites

- Node.js 16+
- npm or yarn
- PostgreSQL 12+

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Database

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and set your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/student_db"
PORT=3000
CORS_ORIGIN=http://localhost:5173
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run Migrations

```bash
npx prisma migrate dev --name init
```

This creates the database schema and generates migrations.

## Running the Server

### Development Mode (with hot reload)

```bash
npm run dev
```

Server runs at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run prod
```

## API Endpoints

### Base URL
```
http://localhost:3000/api/students
```

### Endpoints

**GET /api/students**
- Description: Get all students
- Response: `Student[]`

**GET /api/students/:id**
- Description: Get a specific student
- Parameters: `id` (number)
- Response: `Student`

**POST /api/students**
- Description: Create a new student
- Body:
```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "age": 21,
  "gender": "Male"
}
```
- Response: `Student`

**PUT /api/students/:id**
- Description: Update a student
- Parameters: `id` (number)
- Body: (same as POST, all fields optional)
- Response: `Student`

**DELETE /api/students/:id**
- Description: Delete a student
- Parameters: `id` (number)
- Response: 204 No Content

## Project Structure

```
backend/
├── src/
│   ├── main.ts                 # Entry point
│   ├── app.module.ts           # Root module
│   ├── students/
│   │   ├── students.controller.ts  # Route handler
│   │   ├── students.service.ts     # Business logic
│   │   ├── students.module.ts      # Module definition
│   │   └── dto/
│   │       ├── create-student.dto.ts
│   │       └── update-student.dto.ts
│   └── prisma/
│       ├── prisma.service.ts   # Database connection
│       └── prisma.module.ts
├── prisma/
│   └── schema.prisma           # Database schema
├── tsconfig.json
├── package.json
└── .env
```

## Database Schema

The `Student` model includes:
- `id` (Int) - Auto-incrementing primary key
- `name` (String) - Student name
- `email` (String) - Unique email address
- `age` (Int) - Student age
- `gender` (String) - Male, Female, or Other

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run prod

# Run Prisma Studio (database UI)
npx prisma studio

# Check database migrations
npx prisma migrate status

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Run linter
npm run lint

# Format code
npm run format
```

## Validation

Form validation is implemented using `class-validator`:
- All fields are required
- Email must be valid format
- Age must be between 1-120
- Gender must be Male, Female, or Other

## Error Handling

The API includes proper error responses:
- 201 Created - Resource created successfully
- 204 No Content - Resource deleted successfully
- 400 Bad Request - Validation error
- 404 Not Found - Resource not found
- 500 Internal Server Error - Server error

## CORS Configuration

By default, CORS is enabled. Modify in `main.ts`:

```typescript
app.enableCors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
})
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `PORT` | Server port | 3000 |
| `CORS_ORIGIN` | Allowed origin for CORS | * |

## Tips for Development

1. **Database queries:** Use Prisma Client in services
2. **Validation:** Use decorators in DTOs
3. **Error handling:** NestJS handles HTTP errors automatically
4. **Logging:** NestJS has built-in Logger service

## Connecting Frontend

Set the `VITE_API_URL` in frontend `.env`:

```bash
VITE_API_URL=http://localhost:3000
```

## Deployment

### Using Heroku

1. Create a Heroku PostgreSQL database
2. Set environment variables:
   ```bash
   heroku config:set DATABASE_URL=your_database_url
   ```
3. Deploy: `git push heroku main`

### Using Railway, Render, or Vercel Functions

Similar setup with environment variables configuration on the platform.

## Debugging

### View Prisma Queries

```bash
npx prisma studio
```

### Check Logs

```bash
npm run dev
# Look for console logs in terminal
```

## Common Issues

**Q: "relation does not exist" error?**
A: Run migrations: `npx prisma migrate dev`

**Q: CORS errors?**
A: Update `CORS_ORIGIN` in `.env` to match your frontend URL

**Q: Database connection failed?**
A: Check DATABASE_URL and ensure PostgreSQL is running

**Q: Prisma client not found?**
A: Run: `npx prisma generate`

## Support & Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

## License

Open source - feel free to use and modify!
