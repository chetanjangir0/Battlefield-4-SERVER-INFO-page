# Battlefield 4 Server Info Page

This project is a **Battlefield 4 Server Info Page** built with **React.js** (frontend) and **Node.js** (backend). The application fetches server information from a backend API and displays it in a visually appealing and interactive interface, based on the provided design.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

---

## Features
- **Dynamic Data Fetching**: Server information is fetched dynamically from a Node.js backend.
- **Responsive UI**: Interactive user interface built with React.js.
- **Hover and Click Effects**: Implemented interactions as per the Figma design.
- **Mock API**: Backend serves mock data for server information.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Styling**: CSS (or any CSS framework you used, e.g., Tailwind, Material-UI)

---

## Folder Structure
```
project
├── client                # Frontend application
│   ├── public            # Static files
│   ├── src               # Source files
│   │   ├── components    # React components
│   │   │   └── backendData.jsx
│   │   └── App.js        # Main React app file
│   ├── package.json      # Frontend dependencies
│   └── ...
├── server                # Backend application
│   ├── index.js          # Main backend file
│   ├── package.json      # Backend dependencies
│   └── ...
└── README.md             # Documentation
```

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project
```

### 2. Install Dependencies

#### Backend (Node.js)
```bash
cd server
npm install
```

#### Frontend (React.js)
```bash
cd client
npm install
```

### 3. Run the Application

#### Start the Backend Server
```bash
cd server
node index.js
```
The backend server will run on `http://localhost:5000`.

#### Start the Frontend React App
```bash
cd client
npm run dev
```
---

## API Endpoints
- **GET `/api/server-info`**: Fetches mock server information.

---

## Usage
- Server information will be dynamically fetched from the backend.
- Hover over different elements to view interactions as per the design.

---

---

## Future Improvements
- Connect to a real Battlefield 4 server API to fetch live server data.
- Add animations for hover effects.
- Improve responsiveness for mobile devices.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- Design inspired by Battlefield 4's Server Info UI.
- Mock data created for development purposes.
