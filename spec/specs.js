describe('dogPark', function(){
  it("will describe a park based on its features", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Large");
    expect(testPark.offLeash).to.equal("offLeash");
    expect(testPark.doggieBags).to.equal("doggieBags");
    expect(testPark.fenced).to.equal("fenced");
    expect(testPark.parkSize).to.equal("Large");
  });
  it ("will allow user to search based on park size Large", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Large");
    expect(testPark.search()).to.eql($(".large").toggleClass("backgroundBorder"));
  });
  it ("will allow user to search based on park size Small", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Small");
    expect(testPark.search()).to.eql($(".small").toggleClass("backgroundBorder"));
  });
  it ("will allow user to see if a dogpark requires a leash", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Small");
    testPark.offLeash = "true";
    expect(testPark.noLeash()).to.eql($(".glyph1").show(".glyph1"));
  });
  it ("will allow user to see if a dogpark offers free doggybags", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Small");
    testPark.doggieBags = "true";
    expect(testPark.bringBags()).to.eql($(".glyph2").show(".glyph2"));
  });
  it("will allow user to see if dogpark is fenced", function(){
    var testPark = new dogPark("offLeash", "doggieBags", "fenced", "Small");
    testPark.fenced = "true";
    expect(testPark.noFenced()).to.eql($(".glyph3").show(".glyph3"));
  });
});
