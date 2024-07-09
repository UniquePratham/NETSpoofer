// /pages/api/checkDomain.js
import axios from "axios";

export default async function handler(req, res) {
  const { domain } = req.body;
  const apiKey = "at_qVJY33ocLBFDLTQgpBYCr8opDLUbd"; // Replace with your actual API key

  try {
    const response = await axios.get(`https://geo.ipify.org/api/v2/country`, {
      params: {
        apiKey,
        domain,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch domain information" });
  }
}
