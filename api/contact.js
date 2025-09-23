export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // For now, we'll just log the data and return success
    // In production, you'd integrate with an email service like Resend
    console.log('Contact form submission:', {
      name,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Replace this with actual email sending
    // For now, we'll simulate success
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    });
  }
}
