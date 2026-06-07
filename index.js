const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔌 MongoDB Atlas Connection
// Apna asli password "TUMHARA_PASSWORD" ki jagah daal dena
const MONGO_URI = "mongodb+srv://sourabh_Admin:TUMHARA_PASSWORD@cluster0.myabify.mongodb.net/careerdham?retryWrites=true&w=majority&tls=true";

mongoose.connect(MONGO_URI)
    .then(() => console.log("🌐 MongoDB Cloud Database Connected Successfully!"))
    .catch((err) => console.error("Database connection error:", err));

// ==========================================
// Iske niche tumhare saare Mongoose Schemas (Exam, Question, User, Feedback) 
// aur saari APIs ayengi jo maine pehle di thi...
// ==========================================