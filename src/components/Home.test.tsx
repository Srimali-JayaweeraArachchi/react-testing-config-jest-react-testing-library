import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

function sum(a: number, b: number) {
  return a + b;
}

// let data = [];
// beforeAll(() => {
//   console.log("beforeAll");
//   data = [1, 2, 3.4, 5, 6];
// });

//before every test
let data = [];
beforeEach(() => {
  console.log("beforeEach");
  data = [1, 2, 3.4, 5, 6];
});

// AfterAll, AfterEach

test("adds 2+3 should be equal to 5", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(3, 3)).not.toBe(5);
});

test("object assignment", () => {
  const data: any = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//using regular expressions
test('There is a "stop" in Christop', () => {
  expect("Christop").toMatch(/stop/);
});

//asynchronous function test
async function getResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: "Hello World" });
    }, 1000);
  });
}

// test("async function should return Hello World", async () => {
//   const response = await getResponse();
//   expect(response).toEqual({ value: "Hello World" });
// });

//grouping tests

describe("Combine promise response values", () => {
  test("async function should return Hello World", async () => {
    const response = await getResponse();
    expect(response).toEqual({ value: "Hello World" });
  });

  test("async function should not return abcd", async () => {
    const response = await getResponse();
    expect(response).not.toEqual({ value: "abcd" });
  });
});

describe("Testing Home component", () => {
  beforeEach(() => {
    render(<Home />);
  }); //we do not render Home component in every test, we render it once before each test

  it("renders a heading", () => {
    // render(<Home />);
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument(); //document mean in the Dom
  });

  it("renders a heading inside h1", () => {
    // render(<Home />);
    const text = screen.getByRole("heading", { level: 1 });
    expect(text).toBeInTheDocument();
  });

  it("renders a description", () => {
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
  });

  it("test the description", () => {
    const text = screen.getByTestId("description");
    expect(text.textContent).toMatch(/description/);
  });
});
