import React, { useEffect, useState } from "react";

import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import Home from "./components/Home/Home";

export default function App() {
   
    return (
      <div>
        <Home />
      </div>
    );
  
}


// https://ropsten.etherscan.io/address/0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18
// contract 0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18