# 📄 ANSWERS.md

---

## 1. How to run the project

👉 Please refer to the `README.md` file for full setup instructions.

The README contains:
- Installation steps
- Backend setup
- Frontend setup
- Database configuration
- How to verify the app

---

## 2. Stack Choice

I chose a MERN-style architecture (React, Express, MongoDB, Node.js) for this project because it is well-suited for building small-to-medium full-stack CRUD applications.

### Frontend (React)

React was used because it provides:
- Component-based architecture
- Efficient UI updates
- State-driven rendering

### Backend (Express)

Express was chosen because:
- It is lightweight
- Easy to build REST APIs
- Works well with MongoDB

### Database (MongoDB)

MongoDB was selected because:
- Flexible schema
- Good for document-based data
- Simple integration with Mongoose

### Why not other stacks?

A worse choice would be Java Spring Boot because:
- Too heavy for a small CRUD project
- Requires more boilerplate

Similarly, PostgreSQL would be less flexible for this simple schema-based application.

---

## 3. One Real Edge Case

**Preventing crash when data is not loaded** – In `FlashCardList.jsx`, the component receives `flashcards` as a prop. Without a default value, the app crashes on first render because `flashcards` is `undefined` before the API response arrives. The fix is to write:

`export default function FlashCardList({ flashcards = [] }) {`

This ensures `.map()` always has an array to work with, avoiding the error `Cannot read properties of undefined (reading 'map')`. This is especially important on slow networks or initial load.

---

## 4. AI Usage

AI (ChatGPT) was used throughout development for:
- Debugging React state issues (especially delete not updating UI)
- Understanding `useEffect` for initial API calls
- Designing REST API structure in Express
- Fixing MongoDB update and delete route implementations
- Improving CSS styling for flashcard components

**One improvement I made to AI-generated output** was in the delete functionality. The AI suggested re-fetching all flashcards after deletion, but I changed it to `setFlashcards(prev => prev.filter(...))`. This provides a faster UI update and avoids an unnecessary API call, making the UI feel more responsive.

---

## 5. Honest Gap

A current limitation is the lack of proper user feedback and UI state management. The app does not have:
- Loading indicators during API requests
- Error messages when API calls fail
- Confirmation dialogs before deleting a flashcard

Future improvements would include:
- A loading state using `useState`
- Toast notifications for success/error feedback
- A confirmation modal before deletion
- Better UX handling for slow network conditions

These changes would make the application more production-ready and user-friendly.