import React from "react";
import { render } from "@testing-library/react";

import Subgroup from "./Subgroup";
import { mockSubgroupOne } from "../../utilities/MockData";

it("renders without failing", () => {
  render(<Subgroup {...mockSubgroupOne} />);
});
