"use client";
import React, { useState } from 'react';

export default function Square() {
  const [player, setPlayer] = useState();
  function handleClick() {
    let randomNumber = Math.round(Math.random());
    let position = randomNumber ? "O" : "X";
    setPlayer(position);
    }
  
    return (
        <div 
            className="w-20 h-20 border-black border" 
             onClick={handleClick}>
            <p className="text-6xl text-center pt-3">{player}</p>
        </div>
    );
}