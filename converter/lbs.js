document.getElementById('output').style.visibility='hidden';
document.getElementById('poundInput').addEventListener('input',function(e){
document.getElementById('output').style.visibility='visible';
let pounds = e.target.value;
if(pounds<0)	
{
	document.getElementsByTagName('body')[0].style.background="#620000";
	document.getElementById('kgOutput').innerHTML="Oops! Weight can't be negative...";
	document.getElementById('ozOutput').innerHTML="Oops! Weight can't be negative...";
}
else
{	
document.getElementsByTagName('body')[0].style.background="#333";
document.getElementById('kgOutput').innerHTML=(pounds/2.2046).toFixed(2);
document.getElementById('ozOutput').innerHTML=(pounds*16).toFixed(2);
}
})

function goBack() {
    window.history.back();
}