import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // render About test
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    console.log(render(<About />));
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
