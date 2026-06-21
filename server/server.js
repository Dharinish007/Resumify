const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");

const connectDB = require("./config/db");
connectDB();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

app.use('/api/auth',authRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "server running"
    })
})

//temp auth check
app.get('/api/protected-test' , authMiddleware,(req,res)=>{
    res.json({ message : "You're authenticated" , userId : req.user.id});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});