const express = require("express");
const morgan = require("morgan");
const server = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

server.use(morgan("dev"));
server.use('/movies', createProxyMiddleware
   (
    {
	target:"http://movies:8001",
	changeOrigin:true
    }
   )
);

server.use('*',(req, res)=>{
    res.status(404).send('UPS Movies');
});
PORT = 8000;

server.listen(PORT, () => {console.log(`Gateway in port ${PORT}`)});