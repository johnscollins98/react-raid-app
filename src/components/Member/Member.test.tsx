import React from "react";
import { render } from "@testing-library/react";
import Member from "./Member";

it("renders without failing", () => {
  render(<Member name="TestName" role="TestRole" profession="elementalist" />);
});
