const twilio = require('twilio');

const accountSid = 'your_twilio_account_sid';  // Replace with your Twilio account SID
const authToken = 'your_twilio_auth_token';    // Replace with your Twilio auth token
const client = new twilio(accountSid, authToken);

function sendNotification(phoneNumber, message) {
    client.messages
        .create({
            body: message,
            from: '+1234567890',  // Replace with your Twilio phone number
            to: phoneNumber
        })
        .then(message => console.log('Notification sent:', message.sid))
        .catch(err => console.error('Error sending notification:', err));
}

module.exports = { sendNotification };
