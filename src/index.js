const express =require('express');

const app = express();
app.use(express.json());
const port=3000;


//home
app.get('/', (req, res) => {
    res.send("To-Do");
});


app.listen(port, () => {
    console.log('Server ready at : 3000');
})
