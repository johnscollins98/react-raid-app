import React from "react";

import { IHomeProps } from "../../utilities/Interfaces";

function HomePage(props: IHomeProps) {
  return <p>{props.errorMessage}</p>
}

export default HomePage;