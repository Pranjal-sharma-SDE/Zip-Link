# Zip~Link - URL Shortener Application [Link](https://ziplinkpj.netlify.app/)

Zip~Link is a robust URL shortener application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It empowers users to condense lengthy URLs into more manageable links and offers essential features like user authentication, a user dashboard, analytics, and more.

## Features

1. **URL Shortening:** Input a long URL and receive a shortened, easily shareable version.
2. **Redirecting:** Shortened URLs seamlessly redirect users to the original long URL.
3. **User Authentication:** Utilize secure user authentication for effective management of shortened URLs.
4. **User Dashboard:** Access a personalized dashboard for users to effortlessly view and manage their list of shortened URLs.
5. **Error Handling:** Incorporates robust error handling for scenarios such as invalid URLs and server errors.
6. **Security Considerations:** Ensures secure user authentication and handles sensitive information with diligence.
7. **Analytics:** Basic analytics functionality, tracking the number of clicks for each shortened URL.

## Project Structure

The project adheres to a MERN stack application structure. The client is built with Vite, while the server incorporates JWT authentication for enhanced security.

## Getting Started

### Cloning the Project

Clone the project and initiate a new Git configuration:

```bash
git clone <project-url>
cd <project-directory>
rm -rf .git
```

### Initialize and Push Client Repository

```bash
cd ./client
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <client-repo-url>
git push origin main
```

### Initialize and Push Server Repository

```bash
cd ../server
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <server-repo-url>
git push origin main
```

### Setup and Run the Client

```bash
cd ../client
npm install
echo "VITE_APP_BACKEND_URL=https://ziplinkpj.netlify.app" > .env
npm run dev
```

### Setup and Run the Server

```bash
cd ../server
npm install
echo "PORT=???" > .env
echo "MONGODB_URI=???" >> .env
echo "FRONTEND_URL=https://ziplinkpj.netlify.app" >> .env
echo "TOKEN_SECRET=???" >> .env
npm run dev
```

For any further inquiries or collaboration, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/pranjal-sharma-93b4a01a4/).