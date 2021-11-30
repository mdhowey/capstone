const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(
      MONGO_URL, 
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    console.log('MongoDB connected!');
  } catch (err) {
    console.log(`Encountered this error: ${err.message}`);
  }
};

module.exports = dbConnect;