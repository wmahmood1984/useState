import React, { useState } from 'react';

export const LessText = ({text, maxLength}) => {
    const [hidden, setHidden] = useState(true);
    if (text.length <= maxLength) {
        return <span>{text}</span>;}
        return (
            
            <span>
              {hidden ? `${text.substr(0, maxLength)}...` : text}
              {hidden ?
              (<button onClick={()=>{setHidden(false)}}>show more</button>) : 
              (<button onClick={()=>{setHidden(true)}}>show less</button>)}
              
            </span>
          );
}
