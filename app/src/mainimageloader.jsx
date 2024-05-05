import React from 'react';

import { useEffect, useState } from 'react';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://picsum.photos/v2/list');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    const fetchNextPage = async () => {
        try {
          const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=100`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(prevData => [...prevData, ...jsonData]);
          setCurrentPage(prevPage => prevPage + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    return (
        <div class='w-screen'>
      <div className="  w-screen container  mx-auto px-4 ">
        <h1 className="text-2xl font-bold mb-4 text-green-800">Images</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.map((item, index) => (
            <div key={index} >
              <div className="flex justify-center h-full">
                <img src={item.download_url} alt={`Image ${index}`} className=" h-auto m-0 p-0" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={fetchNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      </div>
      </div>
    );
  };
  
  export default MyComponent;