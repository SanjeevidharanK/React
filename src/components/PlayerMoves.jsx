import { useState } from "react"
import { moves } from "./Player"
export default function PlayerMoves(){
    const[oldmove,newmove] = useState(moves['move'])
    return <>
    <li>
        {oldmove} move is 'x'
    </li>
    </>
}