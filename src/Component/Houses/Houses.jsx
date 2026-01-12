import React from "react";
import "./Houses.css";
import Card from "../Card/Card";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import ahome1 from "../../assets/ahome1.png";
import ahome2 from "../../assets/ahome2.png";
import ahome3 from "../../assets/ahome3.png";
import thome1 from "../../assets/thome1.png";
import thome2 from "../../assets/thome2.png";
import thome3 from "../../assets/thome3.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import house3 from "../../assets/house3.png";

function Houses() {
  return (
    <div id="houses">
      <Card
        image1={home1}
        image2={home2}
        image3={home3}
        title={"Home in Louisville"}
        price={"10,000"}
      />
      <Card
        image1={ahome1}
        image2={ahome2}
        image3={ahome3}
        title={"Home in Mapgaon"}
        price={"10,000"}
      />
      <Card
        image1={thome1}
        image2={thome2}
        image3={thome3}
        title={"Tiny Home in Bengaluru"}
        price={"8,000"}
      />
      <Card
        image1={house1}
        image2={house2}
        image3={house3}
        title={"House in Nashville"}
        price={"18,000"}
      />
    </div>
  );
}

export default Houses;
