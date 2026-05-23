const express = require("express");
const mongoose = require("mongoose");
const Flashcard = require("./models/flashcard");
const cors = require("cors");
const app = express();
const port =  8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Root is working well");
});

// CREATE flashcard
app.post("/flashcards", async (req, res) => {
    try {
        const { question, answer } = req.body;

        const newCard = await Flashcard.create({ question, answer });

        res.json(newCard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET all flashcards
app.get("/flashcards", async (req, res) => {
    try {
        const cards = await Flashcard.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE flashcard
app.put("/flashcards/:id", async (req, res) => {
    try {
        const { question, answer } = req.body;

        const updatedCard = await Flashcard.findByIdAndUpdate(
            req.params.id,
            { question, answer },
            { new: true }
        );

        res.json(updatedCard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE flashcard
app.delete("/flashcards/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deletedCard = await Flashcard.findByIdAndDelete(id);

        res.json({
            message: "Deleted successfully",
            deletedCard
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Connect DB and Start server
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/flashcards');

        app.listen(port, () => {
            console.log(`App is listening at ${port}`);
            console.log("MongoDB connected successfully");
        });

    } catch (err) {
        console.log("DB connection error:", err);
    }
}

main();