const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UsersRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://robbi:Panchitoisfat12@assignment2db.znhee.mongodb.net/Lab4_FS?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

console.log("hellooo")

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });
