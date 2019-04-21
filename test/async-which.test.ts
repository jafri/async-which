import which from "../src/async-which"

/**
 * Dummy test
 */
describe("Full Test", () => {
  it("Find NodeJS Binary", async () => {
    const path = await which('node')
    expect(path).toBeTruthy()
  })

  it("Fail on Fake Binary", async () => {
    const path = await which('fakenode')
    expect(path).toBeFalsy()
  })
})
