const dgram = require("dgram");
const server = dgram.createSocket('udp4');
const colors = require("colors")

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, info) => {
  console.log(`${info.address}:${info.port} adresinden bir mesaj alındı!`, `${msg}`.green);
  var buf = Buffer.from(JSON.stringify({username: "honey", message: "mesajjj"}), "utf8");
   server.send(buf, 0, buf.length, info.port, info.address);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server, ${address.address}:${address.port} üzerinde çalışıyor!`);
});

server.bind(81);