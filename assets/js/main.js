var imgArr = new Array({image: "cowboy-bebop-0.jpg", wasClicked: false}, {image: "cowboy-bebop-1.jpg", wasClicked: false}, {image: "cowboy-bebop-2.jpg", wasClicked: false},
                    {image: "cowboy-bebop-3.jpg", wasClicked: false}, {image: "cowboy-bebop-4.jpg", wasClicked: false}, {image: "cowboy-bebop-5.jpg", wasClicked: false},
                    {image: "cowboy-bebop-6.jpg", wasClicked: false}, {image: "cowboy-bebop-7.jpg", wasClicked: false}, {image: "cowboy-bebop-8.jpg", wasClicked: false});

var basePath = "assets/imgs/";
var row = $("<div class='row'></div>");

initializeImages();
imgRandom();

function initializeImages() 
{
    $("#images").append(row);
    for (var i = 0; i < imgArr.length; i++) 
    {
        image = new Image(200, 200);
        image.src = basePath + imgArr[i].image;
        $(image).css({"margin": "10px 10px"});
        $(image).addClass("col-lg-3");
        $(row).append(image);
    }
}

function imgRandom()
{
    sortArray();
    $("#images img").each(function(index) 
    {
        $(this)[0].src = basePath + imgArr[index].image;
    });
}

function sortArray() 
{
    imgArr.sort(function(a, b)
    {
        return 0.5 - Math.random();
    });
}

$("#resetGame").on("click", function() 
{
    imgArr.forEach(function(element) 
    {
        wasClicked = false;
        console.log(element.wasClicked);
    });
    imgRandom();
});

function endGame()
{
    if(this.wasClicked === true)
    {
        alert("You've already clicked this one, GAME OVER");
    }
    else
    {
        this.wasClicked = true;
        imgRandom();
    }
}

$(document).ready(function()
{
    $("img").on("click", function() 
    {
        if(this.wasClicked !== true)
        {
            console.log(this.image + " was clicked and is now " + this.wasClicked);
            endGame();
            imgArr.forEach(function(element)
            {
                console.log(element);
            });
        }
        else
        {
            endGame();
        }
        // if(this.src === basePath + imgArr[0].image && this.wasClicked !== true)
        // {
        //     this.wasClicked = true;
        //     console.log(imgArr[0].image + "was clicked and is now true " + this.wasClicked);
        //     // endGame();
        //     // imgArr.forEach(function(element)
        //     // {
        //     //     console.log(element);
        //     // });
        // }
        // else if(this.src === basePath + imgArr[1].image && this.wasClicked !== true)
        // {
        //     this.wasClicked = true;
        //     console.log(imgArr[1].image + "was clicked and is now true " + this.wasClicked);
        // }
    });
});

///////////////////////////////////////////
//endGame() now runs reliably but it runs after any image is clicked after the first click, not just after a select one is clicked twice.
//Not sure why that is, but ask someone check around on stackoverflow
///////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This works by emptying the images from a row, the adding them back in and re-attaching the event listeners
//Not super elegant, but functional

// imgRandom();
// endGame();

// function imgRandom()
// {
//     sortArray();
//     $("#images").append(row);
//     for (var i = 0; i < imgArr.length; i++) 
//     {
//         var image = new Image(200, 200);
//         image.src = basePath + imgArr[i].image;
//         $(image).css({"margin": "10px 10px"});
//         $(image).addClass("col-lg-3");
//         $(row).append(image);
//     }
//     attachListeners();
// }

// function sortArray()
// {
//     imgArr.sort(function(a,b)
//     {
//         return 0.5 - Math.random();
//     });
// }

// $("#resetGame").on("click", function()
// {
//     $(row).empty();
//     // $("img").detach(); //This also work so I'm keeping it here for now
//     console.log("row emptied");
//     imgArr.forEach(function(element)
//     {
//         wasClicked = false;
//         console.log(element.wasClicked);
//     });
//     imgRandom();
// });

// function attachListeners()
// {
//     $("img").on("click", function()
//     {
//         this.wasClicked = true;
//         console.log("this images wasClicked value is now " + this.wasClicked);
//     });
// }

// function endGame()
// {
//     $("img").on("click", function()
//     {
//         if(this.wasClicked === true)
//         {
//             alert("You've already clicked this one, GAME OVER");
//         }
//     });
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
