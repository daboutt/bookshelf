# 📚 Bookshelf App

A full-stack web application built with Vite React + TypeScript frontend and ExpressJS backend.

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with responsive design

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe backend development
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bookshelf
```

2. Install dependencies for all projects:

```bash
npm run install:all
```

Or install manually:

```bash
# Root dependencies
npm install

# Client dependencies
cd client && npm install

# Server dependencies
cd ../server && npm install
```

### Development

Start both frontend and backend in development mode:

```bash
npm run dev
```

This will start:

- Frontend development server on `http://localhost:3000`
- Backend API server on `http://localhost:5000`

Or run them separately:

```bash
# Start frontend only
npm run client:dev

# Start backend only
npm run server:dev
```

### Building for Production

Build both client and server:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📁 Project Structure

```
bookshelf/
├── client/                 # React TypeScript frontend
│   ├── src/
│   │   ├── App.tsx        # Main App component
│   │   ├── App.css        # App styles
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   ├── tsconfig.json      # TypeScript config
│   └── vite.config.ts     # Vite configuration
├── server/                # Express TypeScript backend
│   ├── src/
│   │   └── index.ts       # Server entry point
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript config
├── package.json           # Root package.json
└── README.md              # This file
```

## 🔗 API Endpoints

The backend provides the following REST API endpoints:

- `GET /` - Welcome message and API info
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book by ID
- `POST /api/books` - Create a new book

### Example API Usage

```javascript
// Get all books
fetch('/api/books')
  .then((response) => response.json())
  .then((books) => console.log(books));

// Create a new book
fetch('/api/books', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'New Book',
    author: 'Author Name',
    year: 2023,
  }),
});
```

## 🎨 Features

- **Responsive Design** - Works on desktop and mobile
- **Type Safety** - Full TypeScript support on both frontend and backend
- **Hot Reload** - Fast development with instant updates
- **API Integration** - Frontend communicates with backend API
- **Error Handling** - Proper error handling and user feedback
- **Modern Stack** - Latest versions of React, TypeScript, and Express

## 🔧 Development Scripts

### Root Level

- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm start` - Start production server
- `npm run install:all` - Install dependencies for all projects

### Client

- `npm run client:dev` - Start frontend development server
- `npm run client:build` - Build frontend for production

### Server

- `npm run server:dev` - Start backend development server with hot reload
- `npm run server:build` - Compile TypeScript to JavaScript
- `npm run server:start` - Start production server

## 🌟 Next Steps

This template provides a solid foundation for a full-stack web application. Consider adding:

- Database integration (PostgreSQL, MongoDB, etc.)
- User authentication and authorization
- Input validation and sanitization
- Unit and integration tests
- Docker containerization
- Deployment configuration
- Advanced state management (Redux, Zustand)
- UI component library (Material-UI, Chakra UI)

## 📄 License

MIT License - feel free to use this template for your projects!
