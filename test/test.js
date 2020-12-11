import * as assert from "assert";
import * as assessment from "../index.js";

describe("day one assessment", () => {
  beforeEach(() => {
    assessment.emptyClass();
  });

  describe("addCat function", () => {
    it("should add new cat to cats list", () => {
      assessment.addCat("First", "last", 20);
      let catsList = assessment.getCatsList();

      let found = catsList.filter((cat) => {
        return cat.name == "First" && cat.breed == "last" && cat.age === 20;
      });

      assert.equal(found.length, 1);
      assert.equal(catsList[0], found[0]);
    });
  });
});
