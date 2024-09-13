const readlineSync = require('readline-sync');
const { validateIMEI } = require('./services/imeiService');
const { getDeviceInfo } = require('./controllers/deviceController');

async function startCLI() {
    console.log('Welcome to the IMEI Tracker CLI');

    // Get IMEI code from user
    const imeiCode = readlineSync.question('Please enter the IMEI code: ');

    // Validate IMEI code
    if (validateIMEI(imeiCode)) {
        console.log('Valid IMEI code');
        await getDeviceInfo(imeiCode);  // Fetch device info
    } else {
        console.log('Invalid IMEI code');
    }
}

startCLI();
