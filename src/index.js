const express =require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/todos', require('./routes/todoRoutes'));


mongoose.connect(process.env.MONGODB_URI,{
    dbName: 'Todo',
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open',()=>{
    console.log('Connected to MongoDb');
})

const port=process.env.PORT;
//home
// app.get('/home', (req, res) => {
//     res.json({message: 'Todo is Ready'});
// });


app.listen(port, () => {
    console.log(`Server ready at : ${port}`);
})
