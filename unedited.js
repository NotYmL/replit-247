const sleep = (milliseconds) => { return new Promise(resolve => setTimeout(resolve, milliseconds)) };
var http = require('http');
var express = require('express');
var app = express();
const fetch = require('node-fetch')

app.use(express.json());
app.set('trust proxy', true);

app.get("/", (req, res) => {
  console.log(req.headers)
  res.send("N\\gg4")
})

async function loop() {
  while(true){
      let res = await fetch("http://REPLITNAME.OWNER.repl.co/", {
    "headers": {
      "Content-Type": "application/json",
      "Referer": "https://ipinfo.io/",
    },
    "method": "GET",
  });
  await sleep(2000)
  console.log(await res.text())
  }
}

var httpServer = http.createServer(app);
loop()
httpServer.listen(6969);
