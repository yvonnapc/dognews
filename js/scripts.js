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

// dogPark.prototype.offLeash = function() {
//   if (this.offLeash === "true") {
//     $(".offLeash").append("<span class='glyphicon glyphicon-tree-deciduous'></span>")
//   } else if (this.doggieBags === "true") {
//     $(".dogBag").append("<span class='glyphicon glyphicon-cloud'></span>")
//   } else if (this.fenced === "true") {
//     $(".noFence").append("<span class='glyphicon glyphicon-link'></span>")
//   }
// }
/* tree/offleash=glyph1, cloud/dogbag=glyph2, link/fenced=glyph3 */
dogPark.prototype.noLeash = function() {
  if (this.offLeash === "true") {
    return $(".glyph1").show(".glyph1")
  }
}

dogPark.prototype.bringBags = function() {
  if (this.doggieBags === "true") {
    return $(".glyph2").show(".glyph2")
  }
}

dogPark.prototype.noFenced = function() {
  if (this.fenced === "true") {
    return $(".glyph3").show(".glyph3")
  }
}

// var size_pizza = $('input[name="feature"]').is(":checked");

/*-------- business ---------*/
$(document).ready(function() {
  $("form#parkForm").submit(function(event) {
    $(".backgroundBorder").toggleClass("backgroundBorder")

    $(".glyph1").hide();
    $(".glyph2").hide();
    $(".glyph3").hide();
    var offLeash = $('input[name="offLeash"]:checked').val();
    var doggieBags = $('input[name="doggieBags"]:checked').val();
    var fenced = $('input[name="fenced"]:checked').val();
    var parkSize = $("select#parkSize").val();
    var parkProfile = new dogPark(offLeash, doggieBags, fenced, parkSize);
    parkProfile.search();
    parkProfile.noLeash();
    parkProfile.bringBags();
    parkProfile.noFenced();

console.log(new dogPark(offLeash, doggieBags, fenced, parkSize));
    event.preventDefault();
  });
});
