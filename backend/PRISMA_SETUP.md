# Prisma Setup Guide

This guide helps you set up the Prisma database for the Student Management backend.

## Prerequisites

- PostgreSQL installed and running
- Node.js installed
- Backend dependencies installed (`npm install`)

## Step 1: Configure Database Connection

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and set the `DATABASE_URL`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/student_db"
```

Replace:
- `username` - PostgreSQL username (default: postgres)
- `password` - PostgreSQL password
- `student_db` - Database name

### Example Configurations

**Local Development (default PostgreSQL user):**
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/student_db"
```

**Using a specific user:**
```env
DATABASE_URL="postgresql://student_user:secure_pass@localhost:5432/student_db"
```

**Production (different host):**
```env
DATABASE_URL="postgresql://user:pass@db.example.com:5432/student_db"
```

## Step 2: Generate Prisma Client

This creates the type-safe database client:

```bash
npx prisma generate
```

You should see: ✔ Generated Prisma Client

## Step 3: Run Migrations

This creates the database tables:

```bash
npx prisma migrate dev --name init
```

Follow the prompts. This will:
1. Create the database if it doesn't exist
2. Create the Student table
3. Generate migration files
4. Generate Prisma Client

## Step 4: Verify Setup

Check that everything is working:

```bash
npx prisma studio
```

Opens the Prisma Studio interface where you can:
- View the database schema
- Create sample data
- View existing records
- Test queries

## Useful Commands

### View Database Records
```bash
npx prisma studio
```

### Check Migration Status
```bash
npx prisma migrate status
```

### Reset Database (⚠️ Deletes all data)
```bash
npx prisma migrate reset
```

### Create New Migration After Schema Change
```bash
npx prisma migrate dev --name description_of_change
```

### Format Prisma Schema
```bash
npx prisma format
```

### Generate Client Only
```bash
npx prisma generate
```

## Schema Overview

The `prisma/schema.prisma` defines:

```prisma
model Student {
  id     Int     @id @default(autoincrement())
  name   String
  email  String  @unique
  age    Int
  gender String
}
```

Fields:
- `id` - Auto-incrementing primary key
- `name` - Student full name
- `email` - Unique email address
- `age` - Student age
- `gender` - Male, Female, or Other

## Adding New Fields

To add a new field to students:

1. Edit `prisma/schema.prisma`:
```prisma
model Student {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  age       Int
  gender    String
  phone     String  // New field
}
```

2. Create migration:
```bash
npx prisma migrate dev --name add_phone_field
```

3. Update frontend form and API accordingly

## Troubleshooting

### "Can't reach database server"
- Check PostgreSQL is running
- Verify DATABASE_URL format
- Check username/password

### "relation 'Student' does not exist"
- Run migrations: `npx prisma migrate deploy`
- Or reset: `npx prisma migrate reset`

### "Unique constraint failed on the fields: (email)"
- The email already exists
- Use unique email addresses

### "Prisma client not generated"
```bash
npx prisma generate
```

### "Password authentication failed"
- Check PostgreSQL password in DATABASE_URL
- Verify user has database access

## Data Types Reference

| Type | Prisma | PostgreSQL | JavaScript |
|------|--------|----------|-----------|
| Text | String | VARCHAR | string |
| Number | Int | INTEGER | number |
| Decimal | Decimal | DECIMAL | Decimal |
| Boolean | Boolean | BOOLEAN | boolean |
| Date | DateTime | TIMESTAMP | Date |
| ID | Int @id | SERIAL | number |

## Sample Insert Query

Using Prisma Client:

```typescript
const student = await prisma.student.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    age: 21,
    gender: 'Male'
  }
})
```

## Sample Query Operations

```typescript
// Find all
const students = await prisma.student.findMany()

// Find by ID
const student = await prisma.student.findUnique({
  where: { id: 1 }
})

// Find by email
const student = await prisma.student.findUnique({
  where: { email: 'john@example.com' }
})

// Update
const updated = await prisma.student.update({
  where: { id: 1 },
  data: { age: 22 }
})

// Delete
await prisma.student.delete({
  where: { id: 1 }
})
```

## Next Steps

1. ✅ Configure DATABASE_URL in .env
2. ✅ Run `npx prisma migrate dev --name init`
3. ✅ Start backend: `npm run dev`
4. ✅ Test API endpoints
5. ✅ Connect frontend with VITE_API_URL

## Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
- [NestJS Docs](https://docs.nestjs.com)

Happy coding! 🚀
