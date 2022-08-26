import React from 'react'

const city = ({city}) => {
  return (
    <div>
      <div>
        <h1>{city.main.temp}</h1>;
        <h1>{city.name}</h1>;
        <h1>{city.wather[0].main}</h1>
      </div>
    </div>
  )
}

export default city;
