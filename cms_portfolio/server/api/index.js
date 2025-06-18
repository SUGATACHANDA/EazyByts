const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('../routes/auth')
const contactRoutes = require('../routes/contactRoutes.js');
const skillRoutes = require("../routes/skillRoutes.js")
const funFactRoutes = require('../routes/funFactRoutes.js');
const projectRoutes = require('../routes/projectRoutes.js');
dotenv.config();

const cors = require("cors");
const app = express()

const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            "http://localhost:5173",
            "https://sugata-chanda.vercel.app",
        ];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));


app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/funfacts', funFactRoutes);
app.use('/api/projects', projectRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.use((req, res, next) => {
//     // res.header("Access-Control-Allow-Origin", "https://sugata-chanda.vercel.app");
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173/");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     if (req.method === "OPTIONS") {
//         res.sendStatus(204); // Respond to preflight requests
//     } else {
//         next();
//     }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
