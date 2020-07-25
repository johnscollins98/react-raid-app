import React from "react";

import { IHomeProps } from "../../utilities/Interfaces";

function HomePage(props: IHomeProps) {
  return (
    <div className="homepage">
      <h1>Sunspear Order</h1>
      <p>{props.errorMessage}</p>
    </div>
  )
}

export default HomePage;