// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully!");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//   }
// };

// const NetworkInterfaceSchema = mongoose.Schema({
//   id: { type: String, required: true },
//   address: { type: String, required: true },
//   bytesIn: { type: String, required: true },
//   bytesOut: { type: String, required: true },
//   idleTime: { type: String, required: true },
//   keepaliveTimeout: { type: String, required: true },
//   loginBy: { type: String, required: true },
//   macAddress: { type: String, required: true },
//   packetsIn: { type: String, required: true },
//   packetsOut: { type: String, required: true },
//   radius: { type: Boolean, required: true },
//   server: { type: String, required: true },
//   uptime: { type: String, required: true },
//   user: { type: String, required: true },
// });

// const NetworkInterfaceModel = mongoose.model("NetworkInterface", NetworkInterfaceSchema);

// async function fetchDataAndStore() {
//   try {
//     const data = await fetch(process.env.YOUR_API_URL);
//     const jsonData = await data.json();

//     const formattedData = jsonData.map((item) => ({
//       id: item[".id"],
//       address: item["address"],
//       bytesIn: item["bytes-in"],
//       bytesOut: item["bytes-out"],
//       idleTime: item["idle-time"],
//       keepaliveTimeout: item["keepalive-timeout"],
//       loginBy: item["login-by"],
//       macAddress: item["mac-address"],
//       packetsIn: item["packets-in"],
//       packetsOut: item["packets-out"],
//       radius: item["radius"] === "true",
//       server: item["server"],
//       uptime: item["uptime"],
//       user: item["user"],
//     }));

//     await NetworkInterfaceModel.insertMany(formattedData);
//   } catch (error) {
//     console.error("Error fetching or storing data:", error);
//   }
// }

// export default async function handler(req, res) {
//   await connectDB(); // Connect to MongoDB before processing request

//   if (req.method === "GET") {
//     // Handle potential GET requests from your UI (optional)
//   } else if (req.method === "POST") {
//     try {
//       await fetchDataAndStore();
//       res.status(200).json({ message: "Data stored successfully!" });
//     } catch (error) {
//       console.error("Error storing data:", error);
//       res.status(500).json({ message: "Error: Data not stored!" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed!" });
//   }
// };
