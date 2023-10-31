import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from "./league-images/premL.png"

const Leagues = () => {
    const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    // Fetch the JSON data
    
    axios.get('./league.json') // Replace with the correct path to your JSON file
      .then(response => {
        const jsonData = response.data;
        if (jsonData && jsonData.leagues && jsonData.leagues.length > 0) {
          const imageUrl = jsonData.leagues[0].image_url;
          setImageURL(imageUrl);
        }
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  return (
    <div className="leagues">
      <div className="leagues__box">
        <div className="leagues__box-title-1"></div>
        <div className="leagues__box-mainTitle"></div>
        <div className="leagues__box-underline"></div>
        <div className="league__box-title-2"></div>
        <div className="league__box-contentBox">
          <div className="contentBox-titles"></div>
          <div className="contentBox-games">
            <img src={img} alt="1" className="img-1" /> {/* Set the image URL here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leagues;
