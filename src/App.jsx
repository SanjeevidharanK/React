import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import { boolvalue } from "./components/Gameboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <ol>
          <Player name={"PLAYER-10"} symbol={"X"} />
          <Player name={"PLAYER-20"} symbol={"O"} />
        </ol>
        <GameBoard box={0} testin={boolvalue} />
        <GameBoard box={1} testin={boolvalue} />
        <GameBoard box={2} testin={boolvalue} />
      </main>
    </>
  );
}

export default App;
