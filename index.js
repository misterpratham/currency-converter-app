const http = require("http");
const CC = require("currency-converter-lt");

const converter =(amount, from, to)=>{
    http
    .createServer((req, res)=>{
        res.writeHead(200,{"Content-Type":"text/html"});

    
    const currencyConverter = new CC();
    currencyConverter
    .from(from)
    .to(to)
    .amount(Number(amount))
    .convert()
    .then((response)=>{
        res.end(`${amount} ${from} is equal to ${response} ${to}`)
    })
}).listen(4100);
console.log("App is running..")
};
converter("100", "JPY", "NPR")