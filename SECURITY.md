# 🔒 Security Guidelines

## Important: Environment Variables

**NEVER commit your `.env` files to GitHub!**

### Backend Environment Variables

Create a `backend/.env` file with:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string_here
JWT_SECRET=your_random_secret_key_here
NODE_ENV=development
```

### Frontend Environment Variables

Create a `frontend/.env` file with:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, use your deployed backend URL:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## MongoDB Atlas Setup

1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or 0.0.0.0/0 for all)
5. Get your connection string
6. Replace in your local `.env` file

## Deployment Security

When deploying:
- Add environment variables in your hosting platform (Render/Vercel)
- Use strong, unique JWT secrets
- Never expose your MongoDB credentials
- Keep `.env` files local only

## What's Safe to Commit

✅ `.env.example` files (with placeholders)
✅ Source code
✅ Documentation
✅ Configuration files (without secrets)

## What to NEVER Commit

❌ `.env` files
❌ `node_modules`
❌ API keys
❌ Database credentials
❌ JWT secrets
❌ Personal information

---

Stay secure! 🛡️
