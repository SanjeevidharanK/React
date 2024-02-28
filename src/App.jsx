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
<<<<<<< HEAD
          <Player name={"PLAYER-10"} symbol={"X"} />
=======
          <Player name={"PLAYER-1"} symbol={"X"} />
>>>>>>> 8f32b02eeb7cef95ade7c3beef48f1a025d01ae5
          <Player name={"PLAYER-2"} symbol={"O"} />
        </ol>
        <GameBoard box={0} testin={boolvalue} />
        <GameBoard box={1} testin={boolvalue} />
        <GameBoard box={2} testin={boolvalue} />
      </main>
    </>
  );
}

export default App;
