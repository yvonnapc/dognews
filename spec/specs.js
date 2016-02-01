describe('dogPark', function(){
  it("will describe a park based on its features", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Large");
    expect(testPark.offLeash).to.equal("offLeash");
    expect(testPark.doggieBags).to.equal("doggieBags");
    expect(testPark.fenced).to.equal("fenced");
    expect(testPark.parkSize).to.equal("Large");
  });

});
