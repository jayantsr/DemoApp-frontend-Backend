import React, { useState } from "react";

function DataFetcher() {
  const [data, setData] = useState("");

  // Function to fetch data from the private backend API
  const fetchData = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_API_URL;
      const response = await fetch(backendUrl, {
        credentials: "include", // Include cookies or credentials if necessary
      });
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>API Response: {data}</p>}
    </div>
  );
}

export default DataFetcher;
