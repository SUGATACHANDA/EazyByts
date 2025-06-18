const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('../routes/auth')
const contactRoutes = require('../routes/contactRoutes.js');
const skillRoutes = require("../routes/skillRoutes.js")
const funFactRoutes = require('../routes/funFactRoutes.js');
const projectRoutes = require('../routes/projectRoutes.js');
dotenv.config();

const cors = require('cors');

const corsOptions = {
    origin: 'https://sugata-chanda.vercel.app',
    // origin: 'http://localhost:5173/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow cookies and credentials
    allowedHeaders: ['Content-Type', 'Authorization'], // explicitly allow headers
    optionsSuccessStatus: 204 // some legacy browsers choke on 204
};


const app = express();
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/funfacts', funFactRoutes);
app.use('/api/projects', projectRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://sugata-chanda.vercel.app");
    // res.header("Access-Control-Allow-Origin", "http://localhost:5173/");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        res.sendStatus(204); // Respond to preflight requests
    } else {
        next();
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
