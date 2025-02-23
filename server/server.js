import express from "express"
const app = express()
import cors from "cors"
const corsOptions = {
    origin: ["http://localhost:5173/"]
}

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json({"message": "Hello World"})
})

app.listen(3000, () => console.log(`Server started: http://localhost:3000`))