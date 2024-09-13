const { MongoClient } = require('mongodb');

// Database connection
const url = 'mongodb://localhost:27017';
const dbName = 'imeiTrackerDB';
let db;

async function connectDB() {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to database');
}

function getDB() {
    if (!db) throw new Error('Database not connected');
    return db;
}

module.exports = { connectDB, getDB };
