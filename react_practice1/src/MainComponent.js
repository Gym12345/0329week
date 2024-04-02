import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function MainComponent() {
    const [testData, setTestData] = useState([]);
    const [test1Data, setTest1Data] = useState("");
    const [test2Data, setTest2Data] = useState("");
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response1 = await fetch('http://localhost:8090/myfirstApp/test');
          if (!response1.ok) {
            throw new Error('Network response was not ok');
          }
          const data1 = await response1.json();
          console.log("Test Data Response:", data1);
          setTestData(data1);
        } catch (error) {
          setError(error);
        }
  
        try {
          const response2 = await fetch('http://localhost:8090/myfirstApp/test1');
          if (!response2.ok) {
            throw new Error('Network response was not ok');
          }
          const data2 = await response2.text();
          console.log("Test1 Data Response:", data2);
          setTest1Data(data2);
        } catch (error) {
          setError(error);
        }
  
        try {
          const response3 = await fetch('http://localhost:8090/myfirstApp/test2');
          if (!response3.ok) {
            throw new Error('Network response was not ok');
          }
          const data3 = await response3.text();
          console.log("Test2 Data Response:", data3);
          setTest2Data(data3);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    return (
      
      <div>
         <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            {/* Add other navigation links */}
          </ul>
        </nav>
        <h1>Main Content</h1>
        <h1>Test Data:</h1>
        <ul>
          {testData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1>Test1 Data:</h1>
        <p>{test1Data}</p>
        <h1>Test2 Data:</h1>
        <p>{test2Data}</p>
      </div>
    );
  }
  export default MainComponent