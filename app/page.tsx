// import React from "react";
// import Layout from "./layout"; // Import Layout component
// import DataPage from "./pages/data"; // Import DataPage component

// export default function App() {
//   return (
//     <Layout>
//       <DataPage />s
//     </Layout>
//   );
// }



// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for fetching data

// const DataList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/data"); // Get data from the API endpoint
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Fetch data initially

//     const intervalId = setInterval(fetchData, 5000); // Update every 5 seconds

//     return () => clearInterval(intervalId); // Cleanup function
//   }, []);

//   return (
//     <div>
//       <h1>Network Interface Data</h1>
//       {data.length > 0 ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>
//               {/* Display data properties here */}
//               {/* Example: Address: {item.address} */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default DataList;
