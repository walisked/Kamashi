const { getDeviceByIMEI } = require('../models/deviceModel');
const { getLocationByIMEI } = require('../services/locationService');  // Import the location service

async function getDeviceInfo(imeiCode) {
    try {
        // Fetch device info from the database
        const device = await getDeviceByIMEI(imeiCode);

        if (device) {
            console.log('Device Info:', device);
            
            // Fetch location information
            try {
                const locationData = await getLocationByIMEI(imeiCode);
                console.log('Location Info:', locationData);
            } catch (locationError) {
                console.error('Failed to get location info:', locationError.message);
            }
        } else {
            console.log('Device not found in database');
        }
    } catch (err) {
        console.error('Error retrieving device info:', err);
    }
}

module.exports = { getDeviceInfo };
