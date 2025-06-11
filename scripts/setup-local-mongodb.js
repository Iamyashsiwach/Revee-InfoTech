const mongoose = require('mongoose');
const { User } = require('../lib/models');
const bcrypt = require('bcryptjs');

// Local MongoDB URI
const LOCAL_MONGODB_URI = "mongodb://localhost:27017/revee";

async function setupLocalMongoDB() {
  console.log('Setting up local MongoDB database...');
  
  try {
    // Connect to local MongoDB
    await mongoose.connect(LOCAL_MONGODB_URI);
    console.log('✅ Connected to local MongoDB successfully!');
    
    // Check if admin user exists
    const adminExists = await User.findOne({ email: 'admin@revee.com' });
    
    if (!adminExists) {
      console.log('Creating admin user...');
      
      // Create a default admin user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('password123', salt);
      
      const admin = new User({
        name: 'Admin User',
        email: 'admin@revee.com',
        password: hashedPassword,
        role: 'admin',
        department: 'Administration',
        position: 'System Administrator',
        isActive: true
      });
      
      await admin.save();
      console.log('✅ Admin user created successfully!');
    } else {
      console.log('✅ Admin user already exists.');
    }
    
    // Create some sample employees if they don't exist
    const employeeExists = await User.findOne({ email: 'employee@revee.com' });
    
    if (!employeeExists) {
      console.log('Creating sample employee...');
      
      // Create a sample employee
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('password123', salt);
      
      const employee = new User({
        name: 'Sample Employee',
        email: 'employee@revee.com',
        password: hashedPassword,
        role: 'employee',
        department: 'Development',
        position: 'Software Developer',
        isActive: true
      });
      
      await employee.save();
      console.log('✅ Sample employee created successfully!');
    } else {
      console.log('✅ Sample employee already exists.');
    }
    
    // List all users
    const users = await User.find();
    console.log(`\nCurrent users in database (${users.length}):`);
    users.forEach(user => {
      console.log(`- ${user.name} (${user.email}) - ${user.role}`);
    });
    
    // Close the connection
    await mongoose.connection.close();
    console.log('\nLocal MongoDB setup completed successfully!');
    console.log('\nTo use the local MongoDB, update your .env.local file with:');
    console.log('MONGODB_URI=mongodb://localhost:27017/revee');
    
  } catch (error) {
    console.error('❌ Failed to set up local MongoDB:');
    console.error(error);
  }
}

// Run the setup
setupLocalMongoDB(); 