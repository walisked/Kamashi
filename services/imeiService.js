const imei = require('imei');

function validateIMEI(imeiCode) {
    return imei.isValid(imeiCode);
}

module.exports = { validateIMEI };
