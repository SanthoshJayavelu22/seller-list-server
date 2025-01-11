const mongoose = require("mongoose");
const Seller = require("../models/Seller"); // Adjust the path based on your project structure

const sampleSellers = [
  {
    name: "John Doe",
    rating: 4.5,
    review: "Great service and quality products.",
  },
  {
    name: "Jane Smith",
    rating: 4.8,
    review: "Amazing seller with fast delivery!",
  },
  {
    name: "Michael Johnson",
    rating: 4.2,
    review: "Good experience overall.",
  },
  {
    name: "Emily Davis",
    rating: 4.7,
    review: "Very responsive and reliable.",
  },
  {
    name: "David Wilson",
    rating: 3.8,
    review: "Satisfactory experience, could improve.",
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/seller", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");

    // Check if sellers collection is empty
    const count = await Seller.countDocuments();
    if (count === 0) {
      // Add sample data
      await Seller.insertMany(sampleSellers);
      console.log("Sample sellers added to database.");
    } else {
      console.log("Sellers already exist in the database.");
    }
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
