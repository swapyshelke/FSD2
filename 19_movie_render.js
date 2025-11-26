import React from 'react';

function Slip19() {
    
    const movie=['Chava','Batman','Munna Bhai MBBS','Kakan','3-idiots','PK']
    const listItems=movie.map(movie=>
      <li key={movie}>{movie}</li>);
 return<ul>{listItems}</ul>
}
export default Slip19;