const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`);
})

app.use(express.json());

app.get('/get', (req, res) => {
    res.send("success").status(200)
})

app.post('/post', (req, res, err) => {
    const firstName = req.body.firstName;
    const LastName = req.body.LastName;
    const response = {
        "Name": firstName + LastName
    };
    res.send(response).status(200);
})

