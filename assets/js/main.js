var imgArr = new Array({image: "cowboy-bebop-0.jpg", wasClicked: false}, {image: "cowboy-bebop-1.jpg", wasClicked: false}, {image: "cowboy-bebop-2.jpg", wasClicked: false},
                    {image: "cowboy-bebop-3.jpg", wasClicked: false}, {image: "cowboy-bebop-4.jpg", wasClicked: false}, {image: "cowboy-bebop-5.jpg", wasClicked: false},
                    {image: "cowboy-bebop-6.jpg", wasClicked: false});

var basePath = "assets/imgs/";

var row = $("<div class='row'></div>");

imgRandom();

function imgRandom()
{
    $("#images").append(row);
    sortArray();
    for (var i = 0; i < imgArr.length; i++) 
    {
        var image = new Image(200, 200);
        image.src = basePath + imgArr[i].image;
        $(image).css({"margin": "10px 10px"});
        $(image).addClass("col-lg-3");
        $(row).append(image);
    }
}

function sortArray()
{
    imgArr.sort(function(a,b)
    {
        return 0.5 - Math.random();
    });
}

/////////////////////////
//create a function that resets the wasClicked value's of each img to 'false'
//it will be used on the resetGame button click
/////////////////////////

$("#resetGame").on("click", function()
{
    $(row).empty();
    console.log("row emptied");
    imgRandom();
});

$("img").on("click", function()
{
    this.wasClicked = true;
    console.log(this.wasClicked);
});

//////////////////////////
//Next objective: create button object, give it on("click") event so that it randomizes the images whenever any button is clicked,
//give objects a boolean value of wasClicked so endgame can be reached if a button is clicked twice
/////////////////////////