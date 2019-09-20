document.getElementById('output').style.visibility='hidden';
document.getElementById('kgInput').addEventListener('input',function(e){
document.getElementById('output').style.visibility='visible';
let kg = e.target.value;
if(kg<0)	
{
	document.getElementsByTagName('body')[0].style.background="#620000";
	document.getElementById('lbsOutput').innerHTML="Oops! Weight can't be negative...";
	document.getElementById('ozOutput').innerHTML="Oops! Weight can't be negative...";
}
else
{	
document.getElementsByTagName('body')[0].style.background="#333";
document.getElementById('lbsOutput').innerHTML=(kg*2.2046).toFixed(2);
document.getElementById('ozOutput').innerHTML=(kg*35.274).toFixed(2);
}
})

function goBack() {
    window.history.back();
}
