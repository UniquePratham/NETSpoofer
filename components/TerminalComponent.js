import React, { useState, useEffect, useRef } from "react";

export default function TerminalComponent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const wsRef = useRef(null);

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:3001");

    websocket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    websocket.onmessage = (event) => {
      setOutput((prev) => prev + "\n" + event.data);
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    websocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current = websocket;

    return () => {
      websocket.close();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wsRef.current && input.trim()) {
      wsRef.current.send(input);
      setInput("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        color: "#333",
        minHeight: "85vh",
      }}
    >
      <h2 style={{ fontSize:"50px", color: "#333", textAlign: "center" }}>Web Terminal</h2>
      <p style={{ color: "#666", textAlign: "center", marginBottom: "20px" }}>
        Execute any command below and see the output in the terminal.
      </p>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "70%",
            marginRight: "10px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#333",
            color: "white",
          }}
        >
          Run
        </button>
      </form>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#1e1e1e",
          padding: "10px",
          borderRadius: "5px",
          height: "400px",
          overflowY: "auto",
          color: "white",
          fontFamily: "monospace",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
      </div>
    </div>
  );
}
