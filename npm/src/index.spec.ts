import Hobsec from ".";

describe("helloWorld", () => {
  it("Should return greetings", () => {
    const hobsec = new Hobsec();
    expect(hobsec.main()).toBe("Hello");
  });
});
