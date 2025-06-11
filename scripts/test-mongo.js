const mongoose = require('mongoose');

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://revee:mongo4revee@revee.38xwfdy.mongodb.net/?retryWrites=true&w=majority&ssl=true";

async function testConnection() {
  console.log('Attempting to connect to MongoDB with modified options...');
  
  try {
    await mongoose.connect(MONGODB_URI, {
      // Connection options to help with network issues
      connectTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      ssl: true,
      tlsAllowInvalidCertificates: true, // For bypass strict SSL requirements
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true
    });
    
    console.log('✅ Connected to MongoDB successfully!');
    
    // Check if we can perform a basic operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`Available collections: ${collections.map(c => c.name).join(', ')}`);
    
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:');
    console.error(error);
  }
}

// Run the test
testConnection(); 