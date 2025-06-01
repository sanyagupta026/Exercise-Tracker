const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); // ✅ Allows parsing JSON body

const uri = process.env.MONGO_URI; // Store in .env

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/user');
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);  

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});