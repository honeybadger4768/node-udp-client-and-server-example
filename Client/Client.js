const dgram = require("dgram");
const client = dgram.createSocket('udp4');


client.connect(81, "192.168.0.11", (error) =>{
    if(error) throw error;
        client.send("Hi")
        console.log("mesaj gönderildi")
})
client.on("message", (msg) =>{
    console.log(msg.toString());
})