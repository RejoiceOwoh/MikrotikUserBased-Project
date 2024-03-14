// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";

// const DataList = ({ data }) => { // Receive data as a prop
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

// export default function DataPage() {
//   const [data, setData] = useState([]);
//   const [searchParams] = useSearchParams();

//   // Consider using getStaticProps or getServerSideProps for data fetching
//   // instead of useEffect for better performance

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/data"); // Fetch data from the API endpoint
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Fetch data initially
//   }, []);

//   return (
//     <DataList data={data} />
//   );
// }
