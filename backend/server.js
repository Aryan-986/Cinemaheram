import express from 'express'

const app = express();

//lets create routes
app.get("/", (req, res) => {      //route in an Express.js server that listens for GET requests at the root URL ("/"). When a request is made to this URL, it responds with the text "server is ready". It's typically used to check if the server is running correctly.
    res.send ("server is ready")
})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000")
});


