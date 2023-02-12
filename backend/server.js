const express = require("express");
//const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const noteRoutes = require("./routes/noteRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("he he api is running");
// });


app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);



// --------------------------deployment------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
   } );
} else {
  app.get("/", (req, res) => {
    res.send("hello API is running..");
  });
}
// --------------------------deployment------------------------------




// Error Handling middlewares

app.use(notFound);
app.use(errorHandler);

const Port = process.env.Port || 5000;
app.listen(Port, console.log(`server started at ${Port}`));
