
# 🎬 CineVerse — Movie Discovery Web Application

CineVerse is a responsive movie discovery web application
developed as a university group project.

The application allows users to explore movies, search by
title, filter by genre, sort results, view movie details,
and discover complete movie collections.

## 🌐 Live Website

https://cinema-project-axjy.onrender.com/

## 💻 GitHub Repository

https://github.com/Areej0053/cinema-project

## 👥 Team Members

- Areej — Authentication UI and project integration
- Waed — Movie discovery and Explore page
- Sara — Navigation and About page

## ✨ Features

### Movie Discovery
- Browse 43 movies
- Search movies by title
- Filter movies by genre
- Sort movie results
- Responsive movie cards

### Movie Collections
- Six movie collections
- Expand collections using "View All Parts"
- Explore sequels and related films

### Movie Details
- Dedicated page for each movie
- Movie poster and description
- Genre, release year, and rating
- Related movies from the same collection

### Authentication Interface
- Login page
- Registration page
- Email and password validation
- Password visibility toggle
- Error and success messages

Authentication is currently frontend-only.
Real user accounts and backend authentication
are planned for a later milestone.

### About Page
- Project introduction
- Feature descriptions
- Movie statistics
- Team member information
- Responsive cinematic design

## 🛠️ Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- React Router
- Vite
- Git and GitHub
- Render (Static Site Hosting)

## 📁 Project Structure

```text
cinema-project/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
└── README.md
```

## 🚀 How to Run Locally

### Prerequisites

Install Node.js and npm.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Areej0053/cinema-project.git
```

2. Open the project:

```bash
cd cinema-project
```

3. Enter the React application folder:

```bash
cd client
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL displayed in the terminal,
usually:

http://localhost:5173/

## 🏗️ Production Build

Run:

```bash
npm run build
```

The production files will be generated inside
the `client/dist` directory.

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Explore movies |
| `/login` | Login interface |
| `/register` | Registration interface |
| `/about` | About CineVerse |
| `/movie/:id` | Individual movie details |

## ☁️ Deployment

CineVerse is deployed using Render Static Sites.

Deployment configuration:

- Branch: `main`
- Root directory: `client`
- Build command: `npm install && npm run build`
- Publish directory: `dist`

React Router routes use a rewrite rule:

- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`

## 📌 Milestone 1 Scope

Milestone 1 focuses on the frontend movie discovery
experience, navigation, responsive design, and
authentication interfaces.

The application currently uses a local JavaScript
movie dataset rather than a database.

Backend authentication and database integration
are outside the implemented Milestone 1 scope.

## 🤖 AI Assistance

AI tools were used to support development,
debugging, interface improvements, and documentation.

See `AI-USE.md` for additional information.

## 🎓 Project Information

Project Name: CineVerse

Project Type: University Group Project

Milestone: 1

Team: Areej, Waed, and Sara
