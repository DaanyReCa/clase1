const http = require("http")

const HOST ="localhost"
const PORT =8000

const writeHTMLresponse =(res, htmlcode) =>{
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(htmlcode)-
}

const products = ¨[
    
]

const server = http.createServer(
    (req, res) => {
        writeHTMLresponse(res ,`<h1> codigo html</h1>`)    });


        server.listen(PORT, HOST,() => {
            console.log(`servidor corriendo en https://${HOST}:${PORT}`)
    }
)