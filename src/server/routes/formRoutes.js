const express = require('express');
const router = express.Router();

router.post('/submit-form', (req, res) => {
  const formData = req.body; // Access the submitted form data
  console.log('Form Data Received:', formData);

  // Example validation or processing
  if (!formData.name || !formData.email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Send success response
  res.status(200).json({ message: 'Form submitted successfully!' });
});

module.exports = router;
