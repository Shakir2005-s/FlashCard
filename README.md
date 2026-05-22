📚 Flashcard Full-Stack App

A simple full-stack CRUD application where users can create, view, update, and delete flashcards. The app uses React for the frontend, Express for the backend, and MongoDB for persistent storage.

🚀 Features
Create flashcards (question + answer)
View all flashcards
Edit flashcards in real time
Delete flashcards
Persistent data storage using MongoDB
Responsive and clean UI
🛠️ Tech Stack

Frontend:

React (Vite)
Axios
CSS

Backend:

Node.js
Express.js
MongoDB
Mongoose
📁 Project Structure
FlashCard/
 ├── client/        # React frontend
 ├── server/        # Express backend
 ├── README.md
 ├── ANSWERS.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
2. Setup Backend (Server)
cd server
npm install
Start backend server:
node index.js

Backend runs at:

http://localhost:8080
3. Setup Frontend (Client)

Open a new terminal:

cd client
npm install
npm run dev

Frontend runs at:

http://localhost:5173
4. MongoDB Setup

Make sure MongoDB is running locally:

mongod

Database connection:

mongodb://127.0.0.1:27017/flashcards
🔗 API Endpoints
Method	Endpoint	Description
GET	/flashcards	Get all flashcards
POST	/flashcards	Create flashcard
PUT	/flashcards/:id	Update flashcard
DELETE	/flashcards/:id	Delete flashcard
🧪 How to Use
Open frontend:
http://localhost:5173
Add a flashcard (question + answer)
Edit flashcards using Edit button
Delete flashcards using Delete button
Data persists even after refresh (MongoDB)
💾 Persistence

This app uses MongoDB for storage, so all flashcards remain saved even after restarting the server.

📌 Key Highlights
Full CRUD implementation
REST API architecture
React state management
Component-based UI design
Persistent backend storage
⚠️ Known Limitations
No authentication system
No loading or error UI states
Basic styling (can be improved with Tailwind or UI framework)
🚀 Future Improvements
Add authentication (login/signup)
Add loading and error handling
Improve UI with Tailwind CSS
Add flashcard categories/filters
Deploy frontend and backend
👨‍💻 Author Notes

This project was built as a full-stack CRUD learning application to demonstrate integration of React, Express, and MongoDB with real-world API communication.