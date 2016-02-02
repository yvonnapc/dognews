function dogPark(offLeash, doggieBags, fenced, parkSize) {
  this.offLeash = offLeash;
  this.doggieBags = doggieBags;
  this.fenced = fenced;
  this.parkSize = parkSize;
}

dogPark.prototype.search = function() {
  if (this.parkSize === "Large") {
    return $(".large").toggleClass("backgroundBorder")
  } else if (this.parkSize === "Medium") {
    return $(".medium").toggleClass("backgroundBorder")
  } else if (this.parkSize === "Small") {
    return $(".small").toggleClass("backgroundBorder")
  } 
}

var offLeash = false;
var doggyBags = false;
var fenced = false;

$(document).ready(function() {
  $("form#parkForm").submit(function(event) {
    $(".backgroundBorder").toggleClass("backgroundBorder")
    // $(".offLeash").hide();
    var offLeash = $('input[name=feature]:checked').val();
    var doggieBags = $('input[name=feature]:checked').val();
    var fenced = $('input[name=feature]:checked').val();
    var parkSize = $("select#parkSize").val();
    var parkProfile = new dogPark(offLeash, doggieBags, fenced, parkSize);
    parkProfile.search();
console.log(new dogPark(offLeash, doggieBags, fenced, parkSize));
    event.preventDefault();
  });
});
