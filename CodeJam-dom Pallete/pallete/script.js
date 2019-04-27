var bucket=0;
var color_picker=0;
var move=0;
var transform=0;

$("#transform").click(function (e) { 
  e.preventDefault();
  bucket=color_picker=move=0;
  transform=1;
  $(".choosen").css("background", "none");
  $("#transform:hover").css("background",'red');
  this.className="choosen"  
});

$("#move").click(function (e) { 
  e.preventDefault();
  bucket=color_picker=transform=0;
  move=1;
  $(".choosen").css("background", "none");
  $("#move:hover").css("background",'red');
  this.className="choosen"  
});

$("#color-picker").click(function (e) { 
  e.preventDefault();
  bucket=color_picker=transform=0;
  move=1;
  $(".choosen").css("background", "none");
  $("#color-picker:hover").css("background",'red');
  this.className="choosen"  
});

$("#paint-bucket").click(function (e) { 
  e.preventDefault();
  bucket=color_picker=transform=0;
  move=1;
  $(".choosen").css("background", "none");
  $("#paint-bucket:hover").css("background",'red');
  this.className="choosen"  
});

$(".figures").click(function (e) { 
  e.preventDefault();
  if(transform===1)
  {
    if($(e.target).css("border-radius")=="50%")
      $(e.target).css("border-radius","0");
    else
    $(e.target).css("border-radius","50%");
  }
  
});