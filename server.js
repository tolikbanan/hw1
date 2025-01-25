const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Welcome to my server!")
})

app.get('/about', (req, res) => {
    res.send(res.json({"name": "Salikh", "course": "nodejs basics", "message": "my json responce"}))
})

app.get('/datetime', (req, res) => {
    const dateTime = new Date().toISOString()
    res.send(res.json({
        datetime: dateTime
    }))
})

app.use((req, res, next) => {
    res.status(404).json({
        succes: false,
        error: "Route not found"
    })
})

app.listen(port, () => {
    console.log(`Your port is - ${port}`)
})