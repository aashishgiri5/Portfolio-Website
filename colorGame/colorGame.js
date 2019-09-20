var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

//When you click easy button
easy.addEventListener("click",function(){
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	reset.classList.remove("selected");
	message.textContent="";
	for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.backgroundColor=colors[i];
	}
	else
	{
		squares[i].style.display="none";
	}
	
}



});

//When you click hard button
hard.addEventListener("click",function(){
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	reset.classList.remove("selected");
	message.textContent="";
	for(var i=0;i<squares.length;i++)
{
		
		squares[i].style.backgroundColor=colors[i];	
		squares[i].style.display="block";	
	
}
});

//When you click new colors or play again button
reset.addEventListener("click",function(){
 colors = generateRandomColors(numOfSquares);
 pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
reset.classList.add("selected");
hard.classList.remove("selected");
easy.classList.remove("selected");
message.textContent="";
this.textContent="New Colors!";
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			message.textContent="Correct!";
			reset.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again!";

		}

	});
}



function changeColors(color)
{
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color;
}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
var arr=[];
for(var i=0;i<num;i++)
{
	arr.push(randomColors());
	
}
return arr;
}

function randomColors()
{
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

function goBack() {
    window.history.back();
}

