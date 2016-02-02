function dogPark(offLeash, doggieBags, fenced, parkSize) {
  this.offLeash = offLeash;
  this.doggieBags = doggieBags;
  this.fenced = fenced;
  this.parkSize = parkSize;
}

dogPark.prototype.search = function() {
  if (this.parkSize === "Large") {
    return $(".large").append("Large")
  } else if (this.parkSize === "Medium") {
    return $(".medium").append("Medium")
  } else if (this.parkSize === "Small") {
    return $(".small").append("Small")
  } else {

  }
}

var offLeash = false;
var doggyBags = false;
var fenced = false;

$(document).ready(function() {
  $("form#parkForm").submit(function(event) {

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

  $('a.readMore').click(function(event) {
    event.preventDefault(); /* prevent the a from changing the url */
    $('.readMoreTravel').toggle(); /* show the .more_text span */

  });
});
