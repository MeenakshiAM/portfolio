import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data

// ✅ **Add this route at the top**
app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});

// Email Sending Route
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Outlook, Yahoo
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email (where you receive messages)
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
