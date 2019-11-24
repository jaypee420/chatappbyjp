import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

export default function Join() {

  const [name, setName] = useState(null);
  const [room, setRoom] = useState(null);

  return (
    <div className="joinoutercontainer" >
            <div className="joininnercontainer">
                <h1 className="join"></h1>
                <div><input placeholder="name" className="join" type="text" onChange={(event)=>setName(event.target.value)} /></div>
                <div><input placeholder="name" className="join mt-20" type="text" onChange={(event)=>setRoom(event.target.value)} /></div>
                <link onClick={event=>(!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                 <button className="button mt-20" type="submit">Sign in</button>
                </link>
            </div>
        </div>
  )
}
