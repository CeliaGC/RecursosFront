import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //esta es la solicitud a la API y su manejo de errores

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/data');
      if (!response.ok) {
        throw new Error('Error fetching data from API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  //este es el procesamiento de los datos y su manejo de errores
  const handleData = (data) => {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data.map((item) => ({
        id: item.id,
        name: item.name.toUpperCase(),
      }));
    } catch (error) {
      throw new Error(`Error handling data: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchDataAndHandle = async () => {
      try {
        const response = await fetchData();
        const handledData = handleData(response);
        setData(handledData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDataAndHandle();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {data && data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

