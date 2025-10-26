const nodemailer = require('nodemailer');

const PORT = 8080;

const sendEmail = async () => {
  try {
     const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "karamanashutosh@gmail.com",
            pass: "bzoxemhrqrlfsdsh",
          },
        });

    const mailOptions = {
      from: "karamanashutosh@gmail.com",
      to: "bjbnagar92@gmail.com",
      subject: 'Test Email from Node.js Server',
      replyTo:"karavijeet8@gmail.com",
      text: 'The One Piece is REAL!!!',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
};

// Start server
const startServer = async () => {
  console.log('🚀 Starting server...');
  await sendEmail(); // Send email immediately
  console.log(`📡 Server is running on port ${PORT}`);
};

startServer();
