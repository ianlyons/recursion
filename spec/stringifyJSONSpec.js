// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  it("should match the result of calling JSON.stringify", function(){

    stringifiableValues.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

    arrayWithInvalidStrings.forEach(function(obj){
      var result = stringifyJSON(obj);
      console.log(JSON);
      var expected = JSON.stringify(obj);
      console.log(expected);
      expect(result).toEqual(expected);
    });

  });
});
