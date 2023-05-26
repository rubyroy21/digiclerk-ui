import { useEffect, useState, useRef } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import MainContainer from "./Container/MainContainer/MainContainer";
import CustomerDetails from "./contextApi";


function App() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  let bearer = localStorage.getItem("authorization");


  useEffect(() => {
    fetch(
      `https://dev.xlrt.ai/docparser-gateway-api//customers?findWithDocs=false`,
      {
        method: "GET",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedCustomer(data.data[0].customerId);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <CustomerDetails.Provider value={{ selectedCustomer, setSelectedCustomer }}>
      <div className="App">
        <AllRoutes />
      </div>
    </CustomerDetails.Provider>
  );
}

export default App;
