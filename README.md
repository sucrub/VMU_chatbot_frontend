# ⚓ VMU Chatbot Frontend
### *Vietnam Maritime University*

A modern, React-based frontend application providing an intuitive AI assistant interface for VMU students and faculty.

---

## 🚀 Key Features

* **Google OAuth 2.0**: Secure authentication flow via Google accounts.
* **Smart Token Management**: Automatic JWT refresh and session persistence.
* **Protected Routing**: Role-based access control (RBAC) for restricted views.
* **Modern UI/UX**: Professional interface built with **Ant Design**.
* **Centralized State**: Predictable state management using **Redux Toolkit**.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 |
| **State Management** | Redux Toolkit |
| **Styling/UI** | Ant Design (v5+) |
| **Networking** | Axios (with interceptors) |
| **Routing** | React Router Dom |
| **Auth** | Google OAuth |

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js**: v14.0.0 or higher
* **npm** or **yarn**
* **Google Cloud Console**: A valid OAuth 2.0 Client ID

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-repo/chatbot-vmu.git](https://github.com/your-repo/chatbot-vmu.git)
    cd chatbot-vmu
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
    ```

### Scripts

| Command | Action |
| :--- | :--- |
| `npm start` | Runs the app in development mode at http://localhost:3000 |
| `npm run build` | Bundles the app for production in the /build folder |
| `npm test` | Launches the interactive test runner |

---

## 📂 Project Structure

```text
src/
├── api/          # Axios instance & interceptors
├── components/   # Atomic UI components
├── configs/      # App constants & global settings
├── layouts/      # Page wrapper components
├── routes/       # Route config & ProtectedRoute wrapper
├── store/        # Redux slices & store configuration
├── views/        # Page-level components (Home, Login, etc.)
└── App.js        # Root component
```

## 🔐 Authentication Flow
1. **Login**: User authenticates via Google OAuth popup.
2. **Handshake**: Frontend sends auth code to Backend; Backend returns accessToken and refreshToken.
3. **Persistence**: Tokens are stored in Redux state and localStorage.
4. **Validation**: On app load, the /user/me endpoint is called to verify the session.
5. **Interceptors**: If a 401 Unauthorized is returned, Axios interceptors attempt to refresh the token automatically.