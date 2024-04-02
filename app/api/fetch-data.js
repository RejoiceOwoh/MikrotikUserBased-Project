
// const mongodb = require("mongodb");

// const client = new mongodb.MongoClient(process.env.MONGO_URI);

// async function fetchAndStoreData() {
//     // 1. Make the API call using a suitable library (e.g., fetch, axios)
//     const apiResponse = await fetch('https://192.168.88.1/rest/ip/hotspot/active');
//     const jsonData = await apiResponse.json();
  
//     // 2. Process the JSON data if needed (e.g., filtering, transformation)
//     const processedData = processData(jsonData); // Assuming `processData` function
  
//     try {
//       await client.connect();
//       const database = client.db('UserManager');
//       const collection = database.collection('Hotspot');
  
//       // 3. Insert the processed data into the collection
//       await collection.insertMany(processedData);
  
//       console.log('Data successfully fetched and stored in MongoDB Atlas!');
//       return 'Data stored';
//     } catch (error) {
//       console.error('Error fetching or storing data:', error);
//       return 'Error: ' + error.message;
//     } finally {
//       await client.close();
//     }
//   }


//   export default async function handler(req, res) {
//     const result = await fetchAndStoreData();
//     res.status(200).json(result)
//   }
  