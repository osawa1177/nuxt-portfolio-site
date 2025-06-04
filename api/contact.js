require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'https://osawa-portfolio.web.app', // 許可するオリジンを指定
  methods: ['GET', 'POST'], // 許可するHTTPメソッドを指定
  credentials: true // クッキーを含める場合はtrueに設定
}));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { lastName, firstName, email, company, inquiryType, message } = req.body;

  const mailOptions = {
    from: email,
    to: "osawa.tomohisa07@gmail.com",
    subject: `お問い合わせ：${lastName} ${firstName}`,
    text: `名前: ${lastName} ${firstName}\nメール: ${email}\n会社名: ${company}\nお問い合わせ種別: ${inquiryType}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("送信エラー:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;
