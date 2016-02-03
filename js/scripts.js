function dogPark(offLeash, doggieBags, fenced, parkSize) {
  this.offLeash = offLeash;
  this.doggieBags = doggieBags;
  this.fenced = fenced;
  this.parkSize = parkSize;
}

dogPark.prototype.search = function() {
  if (this.parkSize === "Large") {
    return $(".large").toggleClass("backgroundBorder");
  } else if (this.parkSize === "Medium") {
    return $(".medium").toggleClass("backgroundBorder");
  } else if (this.parkSize === "Small") {
    return $(".small").toggleClass("backgroundBorder");
  }
}

dogPark.prototype.noLeash = function() {
  if (this.offLeash === "true") {
    return $(".glyph1").show(".glyph1");
  }
}

dogPark.prototype.bringBags = function() {
  if (this.doggieBags === "true") {
    return $(".glyph2").show(".glyph2");
  }
}

dogPark.prototype.noFenced = function() {
  if (this.fenced === "true") {
    return $(".glyph3").show(".glyph3");
  }
}
/*-------- business logic---------*/
$(document).ready(function() {
  $("form#parkForm").submit(function(event) {
    $(".backgroundBorder").toggleClass("backgroundBorder");
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

  $('a.readArticle').click(function(event) {
    event.preventDefault();
    $('.readMoreArticle').fadeToggle();
  });

  $('a.readMoreHike').click(function(event) {
    event.preventDefault();
    $('.readMoreHikes').fadeToggle();
  });
});
