import { useState } from "react";
import { moves } from "./Player";
let rlcount = 1;
let rlbool = false;
export class boolvalue {}
let valGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ box }) {
  const [before, after] = useState(" ");
  const [before1, after1] = useState(" ");
  const [before2, after2] = useState(" ");
  const [bfclick, afclick] = useState(false);
  const [bfclick1, afclick1] = useState(false);
  const [bfclick2, afclick2] = useState(false);
  const [userBfMove, userAfMove] = useState(null);
  const [oldbool, newbool] = useState(rlbool);
  let bval;
  boolvalue["state"] = userBfMove;
  function test() {
    afclick(true);

    if (rlcount % 2 === 0) {
      after("O");
      valGameboard[box][0] = "O";
    } else {
      after("X");
      valGameboard[box][0] = "X";
    }
    rlcount += 1;
  }
  function test1() {
    afclick1(true);

    if (rlcount % 2 === 0) {
      after1("O");
      valGameboard[box][1] = "O";
    } else {
      after1("X");
      valGameboard[box][1] = "X";
    }
    rlcount += 1;
  }
  function test2() {
    afclick2(true);

    if (rlcount % 2 === 0) {
      after2("O");
      valGameboard[box][2] = "O";
    } else {
      after2("X");
      valGameboard[box][2] = "X";
    }
    rlcount += 1;
  }
  if (!oldbool && !userBfMove) {
    if (
      valGameboard[0][0] === valGameboard[0][1] &&
      valGameboard[0][2] === valGameboard[0][0] &&
      valGameboard[0][0] != null &&
      (valGameboard[1][0] != valGameboard[1][1] ||
        valGameboard[1][0] != valGameboard[1][2] ||
        valGameboard[1][0] == null) &&
      (valGameboard[2][0] != valGameboard[2][1] ||
        valGameboard[2][0] != valGameboard[2][2] ||
        valGameboard[2][0] == null)
    ) {
      bval = valGameboard[0][0];
      userAfMove(bval);
      newbool(true);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[1][0] === valGameboard[1][1] &&
      valGameboard[1][2] === valGameboard[1][0] &&
      valGameboard[1][0] != null &&
      (valGameboard[0][0] != valGameboard[0][1] ||
        valGameboard[0][0] != valGameboard[0][2] ||
        valGameboard[0][0] == null) &&
      (valGameboard[2][0] != valGameboard[2][1] ||
        valGameboard[2][0] != valGameboard[2][2] ||
        valGameboard[2][0] == null)
    ) {
      bval = valGameboard[1][0];
      userAfMove(bval);
      newbool(true);
      console.log(typeof bval, bval, userBfMove, bval, oldbool);
    } else if (
      valGameboard[2][0] === valGameboard[2][1] &&
      valGameboard[2][2] === valGameboard[2][0] &&
      valGameboard[2][0] != null &&
      (valGameboard[0][0] != valGameboard[0][1] ||
        valGameboard[0][0] != valGameboard[0][2] ||
        valGameboard[0][2] == null) &&
      (valGameboard[1][0] != valGameboard[1][1] ||
        valGameboard[1][0] != valGameboard[1][2] ||
        valGameboard[1][0] == null)
    ) {
      bval = valGameboard[2][0];
      newbool(true);
      userAfMove(bval);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[0][0] === valGameboard[1][0] &&
      valGameboard[2][0] === valGameboard[0][0] &&
      valGameboard[0][0] != null
    ) {
      bval = valGameboard[0][0];
      newbool(true);
      userAfMove(bval);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[0][1] === valGameboard[1][1] &&
      valGameboard[2][1] === valGameboard[0][1] &&
      valGameboard[0][1] != null
    ) {
      bval = valGameboard[0][1];
      newbool(true);
      userAfMove(bval);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[0][2] === valGameboard[1][2] &&
      valGameboard[2][2] === valGameboard[0][2] &&
      valGameboard[0][2] != null
    ) {
      bval = valGameboard[0][2];
      newbool(true);
      userAfMove(bval);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[0][0] === valGameboard[1][1] &&
      valGameboard[2][2] === valGameboard[0][0] &&
      valGameboard[0][0] != null
    ) {
      bval = valGameboard[0][0];
      newbool(true);
      userAfMove(bval);
      console.log(userBfMove, bval, oldbool);
    } else if (
      valGameboard[0][2] === valGameboard[1][1] &&
      valGameboard[2][0] === valGameboard[0][2] &&
      valGameboard[0][2] != null
    ) {
      bval = valGameboard[0][2];
      newbool(true);
      userAfMove(bval);
    }
  }

  // console.log(!!moves[userBfMove],userBfMove,!testin['state'],!!testin['state'],oldbool)
  function chk(userBfMove) {
    rlcount += 20;
    return moves[userBfMove] + " is the winner";
  }
  return (
    <>
      <ol>
        <li>
          <ol>
            <li>
              <button
                className="now"
                disabled={!!moves[userBfMove] ? true : bfclick}
                onClick={test}
              >
                {before}
              </button>
            </li>
            <li>
              <button
                className="now"
                disabled={!!moves[userBfMove] ? true : bfclick1}
                onClick={test1}
              >
                {before1}
              </button>
            </li>
            <li>
              <button
                className="now"
                disabled={!!moves[userBfMove] ? true : bfclick2}
                onClick={test2}
              >
                {before2}
              </button>
            </li>
          </ol>
        </li>
      </ol>
      <span className="winner">
        {userBfMove
          ? chk(userBfMove)
          : rlcount === 10 && "Match Draw Welldone!"}
      </span>
    </>
  );
}
