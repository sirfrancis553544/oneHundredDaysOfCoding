import React, { useState, useEffect } from "react";
// import ReactDom from "react-dom"

import "../App.css";

function Shop() {
  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [volumeValue, setVolumeValue] = useState();
  const [volumeUnit, setVolumeUnit] = useState();

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((results) => results.json())
      .then((data) => {
        setName(data[0].name);
        setDescription(data[0].description);
        setTagline(data[0].tagline);
        setImage(data[0].image_url);
        const { volume } = data[0];
        setVolumeValue(volume.value);
        setVolumeUnit(volume.unit);
      });
  }, []);

  return (
    <div className="center">
      <h1>
        Beer Name: {name} - {volumeValue} {volumeUnit}
      </h1>

      <img src={image} alt="" />
      <p>{tagline}</p>
      <p>{description}</p>
    </div>
  );
}

export default Shop;
