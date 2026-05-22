1. How to run the project

To run this project on a fresh machine, follow these steps:

Prerequisites

Before running the project, ensure the following are installed:

Node.js (LTS version) → https://nodejs.org
npm (comes with Node.js)
MongoDB (local installation or MongoDB Atlas)

Verify installation:

node -v
npm -v
Step 1: Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
Step 2: Run Backend (Server)

Navigate to the server folder:

cd server
npm install

Start the backend server:

node index.js

The backend will run at:

http://localhost:8080
Step 3: Run Frontend (Client)

Open a new terminal and navigate to the client folder:

cd client
npm install
npm run dev

The frontend will run at:

http://localhost:5173
Step 4: Database setup

Make sure MongoDB is running locally:

mongod

The project uses the following database connection:

mongodb://127.0.0.1:27017/flashcards
Step 5: Verify application

After both servers are running:

Open http://localhost:5173
Create a flashcard
Update and delete flashcards
Refresh page to confirm data persistence


2. Stack choice

I chose a MERN-style architecture (React, Express, MongoDB, Node.js) for this project because it is well-suited for building small-to-medium full-stack CRUD applications.

React was used for the frontend because it provides a component-based architecture that makes it easy to manage dynamic UI updates when flashcards are created, updated, or deleted. It also allows state-driven rendering, which fits well with real-time UI updates.

Express.js was chosen for the backend because it is lightweight and makes it simple to build RESTful APIs quickly without unnecessary complexity. It integrates easily with MongoDB through Mongoose.

MongoDB was selected as the database because it is flexible, schema-less, and works well for simple document-based data like flashcards.

A worse choice would have been using a heavy enterprise framework like Java Spring Boot for this project, as it would introduce unnecessary setup complexity and boilerplate for a relatively small CRUD system. Similarly, a relational database like PostgreSQL would have been more rigid for this simple flexible schema use case.


3. One real edge case

One edge case handled in this project is preventing runtime crashes when flashcard data is not yet available.

File: FlashCardList.jsx

export default function FlashCardList({ flashcards = [] }) {

Without this default value, the application would crash with the error:

Cannot read properties of undefined (reading 'map')

This happens because React initially renders the component before the API request completes, meaning flashcards is undefined at first render.

By setting a default empty array ([]), the .map() function safely executes even when no data has been loaded yet.

Without this fix, the UI would break on initial load or slow network conditions.

4. AI usage

AI (ChatGPT) was used throughout the development process for:

Debugging React state issues (especially delete not updating UI)
Understanding how useEffect works for initial API calls
Designing REST API structure in Express
Fixing MongoDB update and delete route implementation
Improving CSS styling for flashcard components

One improvement I made to AI-generated output was in the delete functionality. Initially, AI suggested re-fetching all flashcards after deletion. I modified this approach to use setFlashcards(prev => prev.filter(...)) instead, because it provides a faster UI update and avoids unnecessary API calls.

This change improved performance and made the UI feel more responsive.

5. Honest gap

One limitation in this project is the lack of proper user feedback and UI state management.

Currently, the application does not include:

Loading indicators while API requests are in progress
Error messages when API calls fail
Confirmation dialogs before deleting a flashcard

To improve this in the future, I would add:

A loading state using useState
Toast notifications for success/error feedback
A confirmation modal before deleting items
Better UX handling for slow network conditions

These improvements would make the application more production-ready and user-friendly.