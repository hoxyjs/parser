import Hello from "../index";

describe("Class Hello", () => {
  const hello = new Hello();
  it("Has msg variable", () => {
    expect(hello.msg.length).not.toEqual(0);
  });
});
