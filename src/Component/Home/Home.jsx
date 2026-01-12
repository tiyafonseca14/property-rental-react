import "./Home.css";
import React, { useContext } from "react";
import Card from "../Card/Card";
import cottage1 from "../../assets/cottage1.png";
import cottage2 from "../../assets/cottage2.png";
import cottage3 from "../../assets/cottage3.png";
import loft1 from "../../assets/loft1.png";
import loft2 from "../../assets/loft2.png";
import loft3 from "../../assets/loft3.png";
import flat1 from "../../assets/flat1.png";
import flat2 from "../../assets/flat2.png";
import flat3 from "../../assets/flat3.png";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";
import room3 from "../../assets/room3.png";
import farm1 from "../../assets/farm1.png";
import farm2 from "../../assets/farm2.png";
import farm3 from "../../assets/farm3.png";
import cabin1 from "../../assets/cabin1.png";
import cabin2 from "../../assets/cabin2.png";
import cabin3 from "../../assets/cabin3.png";
import villa1 from "../../assets/villa1.png";
import villa2 from "../../assets/villa2.png";
import villa3 from "../../assets/villa3.png";
import apartment1 from "../../assets/apartment1.png";
import apartment2 from "../../assets/apartment2.png";
import apartment3 from "../../assets/apartment3.png";
import ahome1 from "../../assets/ahome1.png";
import ahome2 from "../../assets/ahome2.png";
import ahome3 from "../../assets/ahome3.png";
import thome1 from "../../assets/thome1.png";
import thome2 from "../../assets/thome2.png";
import thome3 from "../../assets/thome3.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import house3 from "../../assets/house3.png";
import { dataContext } from "../../Context/Usercontext";

function Home() {
  let {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,
  } = useContext(dataContext);
  return (
    <div id="home">
      <Card
        image1={cottage1}
        image2={cottage2}
        image3={cottage3}
        title={"Cottage in Calangute"}
        price={"8,000"}
      />
      <Card
        image1={loft1}
        image2={loft2}
        image3={loft3}
        title={"Loft in Nerul"}
        price={"12,000"}
      />
      <Card
        image1={flat1}
        image2={flat2}
        image3={flat3}
        title={"Flat in Goa"}
        price={"6,000"}
      />
      <Card
        image1={home1}
        image2={home2}
        image3={home3}
        title={"Home in Louisville"}
        price={"10,000"}
      />
      <Card
        image1={room1}
        image2={room2}
        image3={room3}
        title={"Room in Amsterdam"}
        price={"11,000"}
      />
      <Card
        image1={farm1}
        image2={farm2}
        image3={farm3}
        title={"Farm in Dhura"}
        price={"8,000"}
      />
      <Card
        image1={cabin1}
        image2={cabin2}
        image3={cabin3}
        title={"Cabin in Dublin"}
        price={"15,000"}
      />
      <Card
        image1={villa1}
        image2={villa2}
        image3={villa3}
        title={"Villa in Lonavala"}
        price={"9,000"}
      />
      <Card
        image1={apartment1}
        image2={apartment2}
        image3={apartment3}
        title={"Apartment in Massachusetts"}
        price={"12,000"}
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
      {addListing ? (
        <Card
          image1={URL.createObjectURL(addImage1)}
          image2={URL.createObjectURL(addImage2)}
          image3={URL.createObjectURL(addImage3)}
          title={title}
          price={price}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
