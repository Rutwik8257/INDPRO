# Task Manager Application

A modern, full-stack task management application with authentication and three-stage task workflow (To Do, In Progress, Done).

##  Live Demo

- **Frontend**: https://indpro-sigma.vercel.app/
- **Backend**: https://indpro-4o8f.onrender.com/

## Features

- **Authentication**: Secure login and registration with JWT
- **Task Management**: Create, update, and delete tasks
- **Three Stages**: Organize tasks across To Do, In Progress, and Done
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Updates**: Instant task stage changes
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages

##  Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Project Structure

```
INDPRO_Assignment/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskModal.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## Deployment

### Frontend Deployment (Vercel)

#### Vercel:
```bash
cd frontend
npm run build
vercel --prod
```



**Environment Variables:**
- `VITE_API_URL`: (https://indpro-4o8f.onrender.com/)

### Backend Deployment (Render)

#### Render:
1. Create new Web Service
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables



**Environment Variables:**
- `PORT`: 5000
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Your secret key
- `NODE_ENV`: production

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected)
- `GET /api/tasks` - Get all user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Key Technical Decisions

### Architecture
- **Separation of Concerns**: Frontend and backend are completely decoupled
- **JWT Authentication**: Stateless authentication for scalability
- **Protected Routes**: Client-side route protection with React Router

### UI/UX Decisions
- **Three-Column Layout**: Visual representation of task workflow
- **Inline Stage Updates**: Quick dropdown for stage changes
- **Modal for CRUD**: Clean interface for creating/editing tasks
- **Hover Actions**: Edit/Delete buttons appear on hover to reduce clutter
- **Loading States**: Spinner during data fetching
- **Error Handling**: User-friendly error messages


## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes with middleware
- Input validation on both client and server
- CORS configuration
- Environment variables for sensitive data

##  UI Highlights

- Modern gradient background
- Card-based task layout
- Smooth transitions and hover effects
- Color-coded stages (gray, blue, green)
- Responsive design (mobile, tablet, desktop)
- Clean typography and spacing
- Icon integration with Lucide React

## Testing the Application

1. Register a new account
2. Login with credentials
3. Create tasks in different stages
4. Update task stages using dropdown
5. Edit task details
6. Delete tasks
7. Logout and login again to verify persistence

