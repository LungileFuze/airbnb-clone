import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/de523b44-5a60-429e-b06e-f3a95a3e307a.jpg?im_w=720"
        location="Villa in Cape Town"
        title="Stay in this spacius villa located in the heart of Cape Town"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.95}
        price="R1050 / night"
        total="R930 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/93999e13-e402-45b7-ac70-ecb90ed8473a.jpg?im_w=480"
        location="Chalets in the county side"
        title="Adventure-ready homes with après-ski style"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.95}
        price="R1050 / night"
        total="R930 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-34811862/original/ce4b25b8-6a9e-4112-97bd-895df546e5ae.jpeg?im_w=720"
        location="Apartment in Cape Town"
        title="Stay in this spacius apartment located in the heart of Cape Town"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.95}
        price="R1050 / night"
        total="R930 total"
      />
    </div>
  );
};

export default SearchPage;
