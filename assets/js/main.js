var imgArr = new Array("cowboy-bebop-0.jpg", "cowboy-bebop-1.jpg",
                "cowboy-bebop-2.jpg", "cowboy-bebop-3.jpg", "cowboy-bebop-4.jpg", "cowboy-bebop-5.jpg");

var basePath = "assets/imgs/";

var row1 = $("<div class='row'></div>");
var row2 = $("<div class='row'></div>");

function imgRandom()
{
    $("#images").append(row1);
    sortArray();
    for (var i = 0; i < imgArr.length; i++) 
    {
        // var rand = imgArr[Math.floor(Math.random() * imgArr.length)];
        var image = new Image();
        //image.src = basePath + rand;
        image.src = basePath + imgArr[i];
        $(image).css({
            "height": "200px", 
            "width": "200px", 
            "margin": "10px 10px"});
        $(image).addClass("col-lg-3");
        $(row1).append(image);
        console.log("test test");
        if(i >= 3 && i <= 5)
        {
            $("#images").append(row2);
            $(row2).append(image);
        }
    }
}

function sortArray()
{
    imgArr.sort(function(a,b)
    {
        return 0.5 - Math.random();
    });
}

imgRandom();

//////////////////////////
//Next objective: create button object, give it on("click") event so that it randomizes the images whenever any button is clicked,
//give objects a boolean value of wasClicked so endgame can be reached if a button is clicked twice
/////////////////////////