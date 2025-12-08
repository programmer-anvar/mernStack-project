import express from 'express';
import NotesRoutes from '../src/routes/notesRoutes.js';
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;;



//middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter)
//our simple custom middleware
// app.use((req,res,next) =>{
//     console.log(`req method is: ${req.method} & Req URL is: ${req.url}`);
//     next();
// })

app.use("/api/notes", NotesRoutes);
connectDb().then(() =>{
app.listen(PORT, () =>{
    console.log("Server started on PORT:", PORT);
});
})

// mongodb+srv://mranvarjontojiboyev_db_user:hL6S7dl1KqyAsQ0N@cluster0.5hz386n.mongodb.net/?appName=Cluster0