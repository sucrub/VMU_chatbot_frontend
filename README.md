# Chatbot Frontend - Vietnam Maritime University

A modern React-based chatbot frontend application for Vietnam Maritime University (VMU). This application provides an intuitive interface for students and faculty to interact with a chatbot assistant.

## Features

- **Google OAuth Authentication** - Secure login using Google accounts
- **Token Management** - Automatic token refresh and session validation
- **Protected Routes** - Role-based access control for authenticated users
- **Responsive Design** - Built with Ant Design for a professional UI
- **Redux State Management** - Centralized state management for auth and user data

## Tech Stack

- **React 19** - UI framework
- **Redux Toolkit** - State management
- **Axios** - HTTP client with interceptors
- **React Router** - Client-side routing
- **Ant Design** - UI component library
- **Google OAuth** - Authentication

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google OAuth credentials (Client ID)

## Getting Started

### Installation

1. Clone the repository
2. Navigate to the project directory:
   +"ash"+
   cd chatbot
   +""+

3. Install dependencies:
   +"ash"+
   npm install
   +""+

4. Create a .env file in the root directory with the following variables:
   +"
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
   +""+

### Running the Application

Start the development server:
+"ash"+
npm start
+""+

The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the optimized production bundle:
+"ash"+
npm run build
+""+

The build output will be in the uild/ folder, ready for deployment.

### Testing

Run tests in interactive watch mode:
+"ash"+
npm test
+""+

## Project Structure

+"
src/
+-- api/              # API calls and axios configuration
+-- components/       # Reusable React components
+-- configs/          # Configuration files
+-- layouts/          # Layout components
+-- routes/           # Route definitions and protected routes
+-- store/            # Redux store and slices
+-- views/            # Page components (Login, Home, etc.)
+-- App.js            # Main App component
+""+

## Authentication Flow

1. User logs in with Google OAuth
2. Frontend receives authorization code
3. Backend exchanges code for JWT tokens (accessToken, refreshToken)
4. Tokens are stored in Redux state and localStorage
5. On page refresh, app validates token using /user/me endpoint
6. If token is expired, automatic refresh is triggered
7. All API requests include the Bearer token in headers

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| REACT_APP_API_URL | Backend API base URL | http://localhost:5000 |
| REACT_APP_GOOGLE_CLIENT_ID | Google OAuth Client ID | xxxxx.apps.googleusercontent.com |

## Contributing

Please follow the established code style and create a new branch for each feature or bug fix.

## Support

For issues or questions, please contact the development team.
