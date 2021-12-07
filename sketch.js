// variables
var strdivselection = ".characterlight"
var strdivselection2 = ".characteranimator"
var eight = "8"


//random letter and array variables 

polyhedron = ["H", "I", "W", "3", "5", "9"]
extrudes = ["A","O","Q", "2", "4"]
fold = ["M", "V", "L", "B", "N"]
linear = ["F","K","T", "X", "Z"]
crescent = ["C","D", "U", "1"]
shapes = [polyhedron, extrudes, fold, linear, crescent]


const randomlinear = linear[Math.floor(Math.random() * linear.length)];
const randomlinearsent = randomlinear + randomlinear + randomlinear + randomlinear +randomlinear +randomlinear +randomlinear +randomlinear +randomlinear +randomlinear + randomlinear + randomlinear + randomlinear + randomlinear +randomlinear +randomlinear +randomlinear +randomlinear +randomlinear +randomlinear;

const randompoly = polyhedron[[Math.floor(Math.random() * polyhedron.length)]]
const randomextrude = extrudes[[Math.floor(Math.random() * extrudes.length)]]
const randomfold = fold[[Math.floor(Math.random() * fold.length)]]
const randomcrescent = crescent[[Math.floor(Math.random() * crescent.length)]]
const randompoly2 = polyhedron[[Math.floor(Math.random() * polyhedron.length)]]
const randomextrude2 = extrudes[[Math.floor(Math.random() * extrudes.length)]]
const tripple1 = randompoly + randomextrude + randomfold
const tripple2 = randomcrescent + randompoly2 + randomextrude2
const thisshape1 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape2 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape3 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape4 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape5 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape6 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape7 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape8 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape9 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape10 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape11 = shapes[[Math.floor(Math.random() * shapes.length)]]
const thisshape12 = shapes[[Math.floor(Math.random() * shapes.length)]]
const randrow1 = thisshape1[[Math.floor(Math.random() * thisshape1.length)]]+ thisshape2[[Math.floor(Math.random() * thisshape2.length)]]+ thisshape3[[Math.floor(Math.random() * thisshape3.length)]]+ thisshape4[[Math.floor(Math.random() * thisshape4.length)]];
const randrow2 = thisshape5[[Math.floor(Math.random() * thisshape5.length)]]+ thisshape6[[Math.floor(Math.random() * thisshape6.length)]]+ thisshape7[[Math.floor(Math.random() * thisshape7.length)]]+ thisshape8[[Math.floor(Math.random() * thisshape8.length)]];
const randrow3 = thisshape9[[Math.floor(Math.random() * thisshape9.length)]]+ thisshape10[[Math.floor(Math.random() * thisshape10.length)]]+ thisshape11[[Math.floor(Math.random() * thisshape11.length)]]+ thisshape12[[Math.floor(Math.random() * thisshape12.length)]];


pairshapes = [polyhedron, extrudes, linear]
const thisshape13 = pairshapes[[Math.floor(Math.random() * pairshapes.length)]]
const pairshape1 = thisshape13[[Math.floor(Math.random() * thisshape13.length)]]
const pairshape2 = thisshape13[[Math.floor(Math.random() * thisshape13.length)]]

const pairline1 = pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2 + pairshape1+ pairshape2;
const pairline2 = pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1 + pairshape2 + pairshape1;

//functions

function setup() {
  }

function scrollanimatecharacter(divselection, scrollstart, scrollend, minsize, maxsize){
    var progressstr;
    var scaleprogressstr;
    var disp = selectAll(divselection);
    for (i=0; i< disp.length; i++){
      var idisp = disp[i]
      var scroll = document.documentElement.scrollTop
      var progress = map(scroll, scrollstart, scrollend, 0, 500)
      var scaleprogress = map(scroll, scrollstart, scrollend, minsize, maxsize)
      console.log(progress)
      scaleprogressstr =str(scaleprogress) + "pt"
      progressstr = "'ROTA' " + str(progress) 
      idisp.style("font-variation-settings", progressstr)
      idisp.style('font-size', scaleprogressstr)
  }
}

function animatecharacter(zdivselection, zscrollstart, zscrollend, zminsize, zmaxsize, zminkern, zmaxkern, minheight, maxheight){
  var zscaleprogressstr;
  var zkerningprogress;
  var zheightprogress;
  var zdisp = selectAll(zdivselection);
  for (i=0; i< zdisp.length; i++){
    var zidisp = zdisp[i]
    var zscroll = document.documentElement.scrollTop
    var zscaleprogress = map(zscroll, zscrollstart, zscrollend, zminsize, zmaxsize)
    var zheightprogress = map(zscroll, zscrollstart, zscrollend, minheight, maxheight)
    var zkerningprogress = map(zscroll, zscrollstart, zscrollend, zminkern, zmaxkern)
    zscaleprogressstr =str( zscaleprogress) + "pt"
    zidisp.style('font-size', zscaleprogressstr)
    zidisp.style('letter-spacing', (str(zkerningprogress) + "pt"))
    
    $(strdivselection).css("line-height", (zheightprogress)+'px');
}
}
// flatland hover event


$( document ).ready(function() {
  document.getElementById("flatland").addEventListener("mouseover", function( event ) {
    $(".bookimage").show();
    console.log("hide")
  });

  document.getElementById("flatland").addEventListener("mouseout", function( event ) {
    $(".bookimage").hide();
    console.log("hide")
  });
});



// disable horizontal scroll

$(function() {

  var $body = $(document);
  $body.bind('scroll', function() {
      // "Disable" the horizontal scroll.
      if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
      }
  });

}); 

// scroll event listener

window.onscroll = function() {myFunction()};
function myFunction() {
  var scrolled = document.documentElement.scrollTop
    
  if (scrolled < 50) {
        $( "#parenttextan").children().addClass( "characteranimatorlight");
        $( "#parenttextan").children().removeClass( "characterlight");
        $("#parenttextan" ).children().removeClass( "opacityfadeindark");
        $( "#parenttextan").removeClass( "opacityfade");
        $( "#parenttextan").children().addClass("characterlight");
        $( "#textan2").text(eight)  
        $( "#textan23").text("")
        $( "#textan22").text("")
        $( "#textan21").text("")
        $( "#textan13").text("")
        $( "#textan12").text("")
        $( "#textan11").text("")
        $( "#textan31").text("")
        $( "#textan32").text("")
        $( "#textan33").text("")
        $( "#textan41").text("")
        $( "#textan42").text("")
        $( "#textan43").text("")
        $( "#parenttextan").children().removeClass( "characteranimatordark");
        console.log("condition 1")
        
      }

  else if ((scrolled > 50) && (scrolled < 2000)) {
    $("#parenttextan").children().removeClass( "characteranimator");
    $("#parenttextan").children().removeClass( "characteranimatorlight");
    $("#parenttextan" ).children().removeClass( "opacityfadeindark");
    $("#parenttextan").removeClass( "opacityfade"); 
    $("#parenttextan").children().addClass("characterlight");
    $( "#textan2").text("8")
    $( "#textan23").text("")
    $( "#textan22").text("")
    $( "#textan21").text("")
    $( "#textan13").text("")
    $( "#textan12").text("")
    $( "#textan11").text("")
    $( "#textan31").text("")
    $( "#textan32").text("")
    $( "#textan33").text("")
    $( "#textan41").text("")
    $( "#textan42").text("")
    $( "#textan43").text("")
    scrollanimatecharacter(strdivselection, 200, 2000, 150, 350);
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    console.log("condition 2")

  } 


  else if ((scrolled > 3820) && (scrolled < 6220)){
    $( "#parenttextan" ).removeClass( "opacityfade");
    $("#parenttextan" ).addClass( "opacityfadein");
    $("#parenttextan" ).children().removeClass( "opacityfadeindark");
    $( "#parenttextan").children().addClass("characterlight");
    $( "#textan1").text("")
    $( "#textan2").text(tripple1)
    $( "#textan3").text("")
    $( "#textan23").text("")
    $( "#textan22").text("")
    $( "#textan21").text("")
    $( "#textan13").text("")
    $( "#textan12").text("")
    $( "#textan11").text("")
    $( "#textan31").text("")
    $( "#textan32").text("")
    $( "#textan33").text("")
    $( "#textan41").text("")
    $( "#textan42").text("")
    $( "#textan43").text("")
    scrollanimatecharacter(strdivselection, 3820, 6220, 100, 350); 
    $( "body" ).removeClass( "bodydark");
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    console.log("condition 3")
  } 

  else if ((scrolled > 3820) && (scrolled < 6220)){
    $( "#parenttextan").removeClass( "opacityfade");
    $("#parenttextan" ).children().removeClass( "opacityfadeindark");
    $("#parenttextan").addClass( "opacityfadein");
    $( "#parenttextan").children().addClass("characterlight");
    $( "#textan1").text("")
    $( "#textan2").text(tripple1)
    $( "#textan3").text("")
    $( "#textan23").text("")
    $( "#textan22").text("")
    $( "#textan21").text("")
    $( "#textan13").text("")
    $( "#textan12").text("")
    $( "#textan11").text("")
    $( "#textan31").text("")
    $( "#textan32").text("")
    $( "#textan33").text("")
    $( "#textan41").text("")
    $( "#textan42").text("")
    $( "#textan43").text("")
    scrollanimatecharacter(strdivselection, 3820, 6220, 100, 350);
    $( "body" ).removeClass( "bodydark"); 
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    console.log("condition 4")
  } 

  else if ((scrolled > 8220) && (scrolled < 10220)){
    $( "#parenttextan" ).removeClass( "opacityfade");
    $( "#parenttextan" ).children().removeClass( "opacityfadeindark");
    $("#parenttextan").addClass( "opacityfadein");
    $( "#parenttextan").children().addClass("characterlight");
    $( "#textan1").text("")
    $( "#textan2").text(tripple2)
    $( "#textan3").text("")
    $( "#textan23").text("")
    $( "#textan22").text("")
    $( "#textan21").text("")
    $( "#textan13").text("")
    $( "#textan12").text("")
    $( "#textan11").text("")
    $( "#textan31").text("")
    $( "#textan32").text("")
    $( "#textan33").text("")
    $( "#textan41").text("")
    $( "#textan42").text("")
    $( "#textan43").text("")
    scrollanimatecharacter(strdivselection, 8220, 10220, 100, 350); 
    $( "body" ).removeClass( "bodydark");
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    console.log("condition 5")
  } 

  else if ((scrolled > 12620) && (scrolled < 15020)){
    $( "body" ).addClass( "bodydark");
    $( "#parenttextan").removeClass( "opacityfade");
    $( "#parenttextan").children().addClass( "opacityfadeindark");
    $( "#parenttextan").children().addClass("characterlight");
    $(".characterlight").css("line-height", (350)+'px');
    $( "#textan1").text(randrow1)
    $( "#textan2").text(randrow2)
    $( "#textan3").text(randrow3)
    $( "#textan23").text("")
    $( "#textan22").text("")
    $( "#textan21").text("")
    $( "#textan13").text("")
    $( "#textan12").text("")
    $( "#textan11").text("")
    $( "#textan31").text("")
    $( "#textan32").text("")
    $( "#textan33").text("")
    $( "#textan41").text("")
    $( "#textan42").text("")
    $( "#textan43").text("")
    console.log("condition 6")
    // scrollanimatecharacter(strdivselection, 12620, 15020, 100, 350); 
    scrollanimatecharacter(strdivselection, 12620, 15020, 100, 300); 
  } 

  else if ((scrolled > 15020) && (scrolled < 16420)){
    $( "#parenttextan").removeClass( "opacityfadeindark");
    $( "#parenttextan" ).removeClass( "opacityfadein");
    $("#parenttextan" ).addClass("opacityfade");
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    $( "#parenttextan").children().addClass("characterlight");
    $( "#parenttextan").children().removeClass( "characteranimator");
    console.log("condition 7")
    console.log(scrolled)
    // $( "#textan1").text("ICGXY")
    // $( "#textan2").text("BKQ3H")
    // $( "#textan3").text("15GF4") 
  } 

  else if ((scrolled >= 16420) && (scrolled < 18930)){
    $( "body" ).addClass( "bodydark");
    $( "#parenttextan").removeClass( "opacityfade");
    $( "#parenttextan").addClass( "opacityfadeindark");
    $( "#parenttextan").children().removeClass("characterlight");
    $( "#parenttextan").children().removeClass("opacityfadeindark");
    $( "#parenttextan").children().addClass( "characteranimator");
    // $( "#parenttextan").children().addClass( "characteranimatordark");
    $( "#textan23").text(randomlinearsent)
    $( "#textan22").text(randomlinearsent)
    $( "#textan21").text(randomlinearsent)
    $( "#textan13").text(randomlinearsent)
    $( "#textan12").text(randomlinearsent)
    $( "#textan11").text(randomlinearsent)
    $( "#textan1").text(randomlinearsent)
    $( "#textan2").text(randomlinearsent)
    $( "#textan3").text(randomlinearsent)
    $( "#textan31").text(randomlinearsent)
    $( "#textan32").text(randomlinearsent)
    $( "#textan33").text(randomlinearsent)
    $( "#textan41").text(randomlinearsent)
    $( "#textan42").text(randomlinearsent)
    $( "#textan43").text(randomlinearsent)
    animatecharacter(strdivselection2, 16420, 18930, 50, 200,50, 100, 50, 100); 
    console.log("condition 8")
    console.log(scrolled) 
  } 

  else if ((scrolled > 18930) && (scrolled < 19930)){
    $( "#parenttextan").removeClass( "opacityfadeindark");
    $( "#parenttextan" ).removeClass( "opacityfadein");
    $("#parenttextan" ).addClass("opacityfade");
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    $( "#parenttextan").children().addClass("characterlight");
    console.log("condition 9")
    console.log(scrolled)
    // $( "#textan1").text("ICGXY")
    // $( "#textan2").text("BKQ3H")
    // $( "#textan3").text("15GF4") 
  } 

  else if ((scrolled >= 19930) && (scrolled < 22930)){
    $( "body" ).addClass( "bodydark");
    $( "#parenttextan").removeClass( "opacityfade");
    $( "#parenttextan").addClass( "opacityfadeindark");
    $( "#parenttextan").children().removeClass("characterlight");
    $( "#parenttextan").children().removeClass("opacityfadeindark");
    $( "#parenttextan").children().addClass( "characteranimator");
    // $( "#parenttextan").children().addClass( "characteranimatordark");
    $( "#textan23").text(pairline1)
    $( "#textan22").text(pairline2)
    $( "#textan21").text(pairline1)
    $( "#textan13").text(pairline2)
    $( "#textan12").text(pairline1)
    $( "#textan11").text(pairline2)
    $( "#textan1").text(pairline1)
    $( "#textan2").text(pairline2)
    $( "#textan3").text(pairline1)
    $( "#textan31").text(pairline2)
    $( "#textan32").text(pairline1)
    $( "#textan33").text(pairline2)
    $( "#textan41").text(pairline1)
    $( "#textan42").text(pairline2)
    $( "#textan43").text(pairline1)
    animatecharacter(strdivselection2, 19930, 22930, 50, 350,100, -200, 100, -200); 
    console.log("condition 8")
    console.log(scrolled) 
  } 

  else if ((scrolled >= 22930)){
    $( "body" ).addClass( "bodydark");
    $( "#parenttextan").removeClass( "opacityfadeindark");
    $( "#parenttextan" ).removeClass( "opacityfadein");
    $("#parenttextan" ).addClass("opacityfade");
    $( "#parenttextan").children().removeClass( "characteranimatordark");
    $( "#parenttextan").children().addClass("characterlight");
    console.log("condition 9")
    console.log(scrolled)
    // $( "#textan1").text("ICGXY")
    // $( "#textan2").text("BKQ3H")
    // $( "#textan3").text("15GF4") 
  } 

  else {
    $( "#parenttextan").removeClass( "opacityfadeindark");
    $( "#parenttextan" ).removeClass( "opacityfadein");
    $("#parenttextan" ).addClass("opacityfade");
    $( "body" ).removeClass( "bodydark");
    console.log("condition else")
  }

}
// window.addEventListener('mousemove', e => {
//   console.log("mouseindahouse")
//   var dispillustration = select(".characteranimator");
//   //numbertype.style(fontVariationSettings = "\"ROTA\" " + slider)
//   slider = map(mouseX,0,windowWidth,0,500)
//   sliderstr2 = "'ROTA' " + str(slider)  
//   dispillustration.style("font-variation-settings", sliderstr2)
// });

