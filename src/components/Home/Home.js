import React, { useEffect, useState } from "react";

import "./Home.css";
import web3 from "../../utils/web3";
import lottery from "../../utils/lottery";

export default function Home() {
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [length, setLength] = useState("");
  const [role, setRole] = useState("hidden");

  const manager = "0x87ad11C93Cd39Dd6BdA97e093de85Fee8506e083";

  const gettingPlayers = async () => {
    const players = await lottery.methods.getPlayers().call();
    console.log("Players: ", players);
    console.log("length: ", players.length);
    let accounts = await window.ethereum.enable();
    setLength(players.length);
    if (
      accounts[0].toString().toLowerCase() == manager.toString().toLowerCase()
    ) {setRole("block");} else {
      setRole("hidden");
    }

    console.log("role: ", role);
  };

  useEffect(() => {
    gettingPlayers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let accounts;
    try {
      accounts = await window.ethereum.enable();
    } catch (error) {
      console.log(error);
    }

    setMessage("Processing request please wait...");
    console.log(web3.utils.toWei(amount, "ether"));
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(amount, "ether"),
    });
    setMessage("Successfully registered among players.");
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    let accounts;
    try {
      accounts = await window.ethereum.enable();
    } catch (error) {
      console.log(error);
    }

    if (
      accounts[0].toString().toLowerCase() == manager.toString().toLowerCase()
    ) {
      setMessage("Selecting winner among all players, please wait ... maximum one minute.");
      await lottery.methods.pickWinner().send({
        from: accounts[0],
      });
      setMessage("The winner is found.");
    } else {
      setMessage("You have to be manager silly");
    }
  };

  return (
    <div
      id="container"
      className="h-screen w-full items-center justify-center md:bg-cover bg-center bg-fixed bg-no-repeat"
    >
      <div className="model h-full w-full">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="text-white font-bold text-4xl">Wanna be in the big part waiting for the prize?</div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                className="mt-7 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </div>
            {/* <button> Enter</button> */}
            <button className="bg-black w-full m-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Enter
            </button>
          </form>
          <button
            className={`${role} bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={(e) => handleOnClick(e)}
          >
            Pick winner
          </button>
          <h1 className="text-white font-bold"> {message}</h1>

          <p className="text-white font-bold">Now we have {length} players in this lottery circle.</p>
        </div>
      </div>
    </div>
  );
}

// https://ropsten.etherscan.io/address/0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18
// contract 0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18
