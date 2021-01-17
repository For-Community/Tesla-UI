import React from "react";

import Header from "./components/header/Header";
import Item from "./components/item/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desk="Money-back guarantee"
          deskLink=""
          backgroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desk="$69,420"
          deskLink=""
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desk="Order Online"
          deskLink=""
          backgroundImg={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desk="Order Online"
          deskLink=""
          backgroundImg={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desk="Order Online"
          deskLink=""
          backgroundImg={ModelY}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desk="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          deskLink=""
          backgroundImg={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desk="Money-back guarantee"
          deskLink=""
          backgroundImg={Accessories}
          leftBtnText="SHOP NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}
