const express = require("express");
const { exec } = require("child_process");
const WebSocket = require("ws");

const app = express();
const port = 3001; // Server port

const wss = new WebSocket.Server({ noServer: true });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const command = message.toString();
    console.log(`Received command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        ws.send(`Error: ${stderr}`);
        return;
      }
      ws.send(stdout);
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
