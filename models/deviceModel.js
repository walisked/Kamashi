const { getDB } = require('../config/database');

function getDeviceByIMEI(imeiCode) {
    const db = getDB();
    return db.collection('devices').findOne({ imei: imeiCode });
}

module.exports = { getDeviceByIMEI };
