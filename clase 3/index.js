const http = require("http")

const HOST ="localhost"
const PORT =8000

const server = http.createServer(
    (req, res) => {
        res.end("este es mi primer servidor en node")
    });


        server.listen(PORT, HOST,() => {
            console.log(`servidor corriendo en https://${HOST}:${PORT}`)
    }
)