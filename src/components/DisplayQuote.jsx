import React from 'react';

function DisplayQuote({props}) {
  return (
      <div>
        <img src={props.image} alt={props.character} />
        <h3> Quote: {props.quote}</h3>
      </div>
  );
}

export default DisplayQuote;