import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should render the same content as 'yarn start' does", () => {
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      esm
    </div>
  `);
});
