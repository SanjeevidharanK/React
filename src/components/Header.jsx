import React from 'react';
import ticLogo from '../../tic-tac-toe.svg'


export default function Header(){
    return (<>
    <header className='head'>
        <img src={ticLogo} className="logo react" alt="tic-tac-toe" />
        <h1>Tic-Tac-Toe</h1>
    </header>
    </>)
}