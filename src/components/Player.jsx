import { useState } from "react"

export class moves{
}
export default function Player({name,symbol}){
    
    const[Edit,isEdit]=useState(false)
    const[oldName,newName]=useState(name)
    moves[symbol] = oldName
    function editCheck(){
        isEdit(true)
    }
    function saveCheck(){
        isEdit(false)
    }
    function inputCheck(e){
        newName(e.target.value.toUpperCase())
    }
    return (<>
    <li>{!Edit ? oldName : <input type="text" onChange={inputCheck}  value={oldName} />}  <span className="symbol">{symbol}</span>
        {!Edit ?<button className='tic' onClick={editCheck}>Edit</button>:<button onClick={saveCheck} className='tic'>Save</button>}
        </li>
    </>)
}