# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot agent mode.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite frontend
├── backend/           # Node.js + Express + TypeScript backend
└── README.md
```

## Technology Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Next generation build tool
- **TypeScript** - Type safety
- **Port:** 5173

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **Port:** 8000

### Database
- **MongoDB** - NoSQL database
- **Port:** 27017

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or remote)
- npm or yarn

### Installation

#### Frontend
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

#### Backend
```bash
cd octofit-tracker/backend
npm install
npm run dev
```

### Environment Configuration
Copy `.env.example` to `.env` and update values as needed:
```bash
cp octofit-tracker/.env.example octofit-tracker/.env
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload on port 8000
- `npm run build` - Compile TypeScript
- `npm start` - Run compiled server
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development Workflow

1. Start MongoDB locally
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm run dev`
4. Access frontend at http://localhost:5173
5. Backend API available at http://localhost:8000

---

Built with GitHub Copilot agent mode.
