"use client";
import React, { useState } from 'react';

export default function Square({index}) {
  const [player, setPlayer] = useState();
  const [input, setInput] = useState([]);
  function handleClick() {
        let randomNumber = Math.round(Math.random());
        let position = randomNumber ? "O" : "X";
        
        setInput((prevInput) => {
          if (!prevInput.includes(index)) {
            console.log("not taken");
            setPlayer(position);
            return [...prevInput, index];;
          } else {
            console.log("already taken");
            return prevInput;
          }
        });
}
  
    return (
        <div 
            className="w-20 h-20 border-black border" 
             onClick={handleClick}>
            <p className="text-6xl text-center pt-3">{player}</p>
        </div>
    );
}