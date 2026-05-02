const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ msg: "Please fill all the fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      family: 4, //FORCE IPv4
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD 
      }
    });

    
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
      replyTo: email,
      to: process.env.EMAIL_ADDRESS,
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: #4f46e5; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">📬 New Contact Message</h2>
              <p style="margin: 5px 0 0;">From your portfolio website</p>
            </div>

            <!-- Body -->
            <div style="padding: 20px;">
              <h3 style="color: #333;">👤 Sender Info</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>

              <hr style="margin: 20px 0;" />

              <h3 style="color: #333;">💬 Message</h3>
              <p style="line-height: 1.6; color: #555;">
                ${message}
              </p>
            </div>

            <!-- Footer -->
            <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
              <p>This message was sent from your portfolio contact form.</p>
            </div>

          </div>
        </div>
      `
    };

    // Send Email (await → no timeout issue)
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      msg: "Message sent successfully!"
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      msg: "Failed to send message. Please try again later." + error
    });
  }
});

module.exports = router;