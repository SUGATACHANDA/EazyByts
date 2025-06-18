const generateContactEmail = ({ name, email, title, message }) => `
  <div style="
    font-family: 'Segoe UI', Roboto, sans-serif;
    max-width: 600px;
    margin: auto;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border: 1px solid #e0e0e0;
  ">
    <header style="background-color: #4F46E5; color: #fff; padding: 16px 24px;">
      <h2 style="margin: 0; font-size: 20px;">📬 New Contact Message Received</h2>
    </header>

    <section style="padding: 20px 24px; color: #333;">
      <p style="margin: 0 0 12px 0; font-size: 16px;"><strong>👤 Name:</strong> ${name}</p>
      <p style="margin: 0 0 12px 0; font-size: 16px;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
      <p style="margin: 0 0 12px 0; font-size: 16px;"><strong>🏷️ Subject:</strong> ${title}</p>

      <div style="margin-top: 20px; padding: 16px; background-color: #f9f9f9; border-radius: 6px; border: 1px solid #ddd; font-size: 15px; line-height: 1.6;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
    </section>

    <footer style="background-color: #f1f1f1; padding: 12px 24px; text-align: center; font-size: 12px; color: #666;">
      This email was sent from your Portfolio Contact Form. <br/>
      <a href="https://yourwebsite.com" style="color: #4F46E5; text-decoration: none;">Visit your website</a>
    </footer>
  </div>
`;

module.exports = generateContactEmail;
