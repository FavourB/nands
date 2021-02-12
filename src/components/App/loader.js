import React from 'react';

function Loader() {
  return (
    <div className="loader center">
      <img  alt='loading' src={require("../../assets/images/logo.png")}/>
    </div>
  );
}

export default Loader;
