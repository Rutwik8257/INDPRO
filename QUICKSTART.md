# Quick Start Guide

## 🚀 Run the Application

### Step 1: Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if installed as service)
net start MongoDB

# Or use MongoDB Atlas (cloud) - update MONGODB_URI in backend/.env
```

### Step 2: Start Backend
```bash
cd backend
npm start
```
Backend runs on: http://localhost:5000

### Step 3: Start Frontend (in new terminal)
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:5173

### Step 4: Test the App
1. Open http://localhost:5173
2. Click "Sign up" to create an account
3. Login with your credentials
4. Start creating tasks!

## 📝 Test Credentials (After Registration)
Create your own account or use:
- Email: test@example.com
- Password: test123

## 🎯 Features to Test
- ✅ Register new account
- ✅ Login/Logout
- ✅ Create new task
- ✅ Change task stage (dropdown)
- ✅ Edit task
- ✅ Delete task
- ✅ Responsive design (resize browser)

## 🐛 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGODB_URI in backend/.env
- Use MongoDB Atlas for cloud database

### Port Already in Use
- Backend: Change PORT in backend/.env
- Frontend: Vite will auto-assign different port

### CORS Error
- Make sure backend is running
- Check VITE_API_URL in frontend/.env

## 📦 Deployment Checklist

### Before Deploying:
- [ ] Test all features locally
- [ ] Update README with live links
- [ ] Set up MongoDB Atlas
- [ ] Deploy backend first
- [ ] Update VITE_API_URL with backend URL
- [ ] Deploy frontend
- [ ] Test production deployment

### Recommended Platforms:
- **Frontend**: Vercel, Netlify, or Render
- **Backend**: Render, Railway, or Heroku
- **Database**: MongoDB Atlas (free tier)

## 🎨 UI Features
- Modern gradient background
- Smooth animations
- Hover effects on cards
- Loading spinners
- Error messages
- Empty states
- Responsive layout

Enjoy building! 🚀
