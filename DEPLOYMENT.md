# Deployment Guide

## 🌐 Deploy Your Task Manager

### Option 1: Deploy Backend on Render

1. **Create Render Account**: https://render.com

2. **Create Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Name: `task-manager-backend`
     - Root Directory: `backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`

3. **Add Environment Variables**:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_random_secret_key_here
   NODE_ENV=production
   PORT=5000
   ```

4. **Deploy** and copy your backend URL (e.g., `https://task-manager-backend.onrender.com`)

### Option 2: Deploy Backend on Railway

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy**:
   ```bash
   cd backend
   railway login
   railway init
   railway up
   ```

3. **Add Environment Variables** in Railway dashboard

### MongoDB Atlas Setup (Required)

1. **Create Account**: https://www.mongodb.com/cloud/atlas

2. **Create Cluster**:
   - Choose FREE tier (M0)
   - Select region closest to your backend

3. **Create Database User**:
   - Database Access → Add New User
   - Username: `taskmanager`
   - Password: Generate secure password

4. **Whitelist IP**:
   - Network Access → Add IP Address
   - Allow Access from Anywhere: `0.0.0.0/0`

5. **Get Connection String**:
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://taskmanager:<password>@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority`

### Deploy Frontend on Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Update Environment Variable**:
   - Edit `frontend/.env`:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com/api
     ```

3. **Deploy**:
   ```bash
   cd frontend
   npm run build
   vercel --prod
   ```

4. **Configure in Vercel Dashboard**:
   - Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
   - Redeploy

### Deploy Frontend on Netlify

1. **Build the app**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

3. **Or Deploy via Netlify UI**:
   - Drag and drop the `dist` folder
   - Add environment variable: `VITE_API_URL`

### Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] MongoDB Atlas is connected
- [ ] Frontend environment variable points to backend
- [ ] Test registration
- [ ] Test login
- [ ] Test creating tasks
- [ ] Test updating tasks
- [ ] Test deleting tasks
- [ ] Test on mobile device

### Update README

After deployment, update your README.md with:
```markdown
## 🚀 Live Demo

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-backend.onrender.com
```

### Common Issues

**Backend not responding**:
- Check Render/Railway logs
- Verify MongoDB connection string
- Ensure environment variables are set

**CORS errors**:
- Backend CORS is configured for all origins
- Check if backend URL is correct in frontend

**Frontend not connecting**:
- Verify VITE_API_URL is correct
- Rebuild frontend after changing env variables
- Check browser console for errors

### Free Tier Limitations

**Render**:
- Backend may sleep after 15 min of inactivity
- First request after sleep takes ~30 seconds

**MongoDB Atlas**:
- 512 MB storage (sufficient for this app)
- Shared cluster

**Vercel/Netlify**:
- Generous free tier for frontend

### Cost: $0 💰

All services used have free tiers perfect for this project!

---

Need help? Check the main README.md or create an issue.
