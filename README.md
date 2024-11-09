# URL Text Analyzer

URL Text Analyzer is a web application that allows users to analyze the content of a webpage by extracting the top N most frequently used words from the provided URL. This project demonstrates a full-stack application with both frontend and backend components, using modern web development technologies.

[Visit the deployed application here](https://url-analyzer-by-aman.netlify.app/).

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Text Analysis**: After logging in, users can submit a URL to analyze the text on the webpage.
- **Top Word Frequency**: The application processes the text from the URL and returns the top N words by frequency, allowing users to specify the value of N.
- **Token-Based Access**: The frontend requires an authentication token stored in local storage to access protected routes like the home page, ensuring only authenticated users can access the analysis feature.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **React Router**: For routing between login, signup, and home pages.
- **Axios**: For making HTTP requests from the frontend to the backend.

### Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **jsonwebtoken (JWT)**: Used for secure user authentication.
- **bcrypt**: For hashing passwords before storing them in the database.
- **Cheerio**: Used for scraping and extracting text content from HTML in the provided URL.
- **Axios**: For making HTTP requests from the backend to fetch web page content.

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate an existing user and issue a token.

### URL Analysis
- `POST /api/analyze-url`: Accepts a URL and the top N parameter. Returns the top N words by frequency in the text extracted from the given URL. Requires authentication.

## Folder Structure

- **backend**: Contains all backend-related code, including authentication, database models, and the URL text analysis endpoint.
- **frontend**: Contains all frontend-related code, including React components for login, signup, and home pages.

## Functionality Walkthrough

### 1. Authentication
   - **Signup**: Users can create an account by providing a name, email, and password. Once registered, they can proceed to the login page.
   - **Login**: Users can log in with their credentials. A JSON Web Token (JWT) is issued and stored in local storage for authentication.
   - **Protected Routes**: The home page (for URL analysis) is accessible only if the user is logged in. If a user tries to access it without logging in, they’re redirected to the login page.

### 2. URL Analysis
   - **Input Fields**: The home page includes fields for entering the URL to be analyzed and the top N words to return.
   - **Word Frequency Analysis**: The backend processes the text content from the specified URL, calculates the frequency of each word, and returns the top N words.
   - **Display Results**: The frontend displays the list of top N words along with their frequency counts.

### 3. Logout
   - Users can log out by clicking the "Logout" button, which removes the token from local storage and redirects them to the login page.

