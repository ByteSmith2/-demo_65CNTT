import React, { useState } from 'react';

function Welcome(text,color,random,props) {
  const [count, setCount] = useState(0);
  console.log(props) ;
  return(
    <div>
      hello world
      <p>
        Message cha la :
        <b>{text}</b>
        <button className='d-block' onClick={random}>
          Click me to random
        </button>
      </p>
    </div>

  ); }

  
  
  
  
  
  
  


export default Welcome;

export const Goodbye = () => {
  return <div>Đây là component Goodbye</div>;
};

