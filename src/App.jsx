import Header from "./components/Header";
import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <ol>
          <Player name={"PLAYER-1"} symbol={"X"} />
          <Player name={"PLAYER-2"} symbol={"O"} />
        </ol>
        <GameBoard box={0} />
        <GameBoard box={1} />
        <GameBoard box={2} />
      </main>
    </>
  );
}

export default App;
