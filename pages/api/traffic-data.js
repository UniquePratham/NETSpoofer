const trafficData = [
  { timestamp: "2024-07-07T12:00:00Z", bytes_transferred: 100 },
  { timestamp: "2024-07-07T12:01:00Z", bytes_transferred: 150 },
  { timestamp: "2024-07-07T12:02:00Z", bytes_transferred: 200 },
  // Add more sample data as needed
];

export default function handler(req, res) {
  res.status(200).json(trafficData);
}
