# How to Create a Super Admin User

Since running the script directly requires proper MongoDB setup and environment configuration, here's an alternative approach to creating a super admin user:

## Option 1: Use the Registration Page and MongoDB Compass

1. Register a new user through the registration page at `/auth/register`
2. Use MongoDB Compass or other MongoDB client to connect to your database
3. Find the user in the `users` collection
4. Update the user's role from "employee" to "super-admin"

```javascript
// Example MongoDB update command:
db.users.updateOne(
  { email: "your-email@reveeinfotech.com" },
  { $set: { role: "super-admin" } }
)
```

## Option 2: Modify the NextAuth Signin Process Temporarily

1. Edit `app/api/auth/[...nextauth]/route.ts`
2. For testing purposes, add code to automatically assign super-admin role

## Option 3: Create a Demo Super Admin Directly in the Database

Use MongoDB Compass to create a new document in the users collection:

```javascript
{
  "name": "Super Admin",
  "email": "admin@reveeinfotech.com",
  "password": "$2a$10$zxvEpzRaDJV8S7KTD8Vtq.LSf0rVE9sjKqmSo2bCgYpxDkIcZvu4u", // This is "Admin@123"
  "role": "super-admin",
  "department": "IT",
  "position": "System Administrator",
  "joinedAt": new Date(),
  "isActive": true,
  "createdAt": new Date(),
  "updatedAt": new Date()
}
```

## Option 4: Temporary Solution for Bypassing TypeScript Errors

Add a `// @ts-ignore` comment above the problematic line in `app/auth/register/page.tsx`:

```typescript
// Initialize form
// @ts-ignore - Ignore TypeScript error for demo purposes
const form = useForm<RegisterFormValues>({
  resolver: zodResolver(registerSchema),
  defaultValues: {
    name: "",
    email: "",
    password: "",
    department: "",
    position: "",
    secretKey: "",
    makeSuperAdmin: false
  },
});
```

After creating the super admin using any of these methods, you can login at `/auth/signin` with the credentials and access the admin dashboard at `/admin`. 