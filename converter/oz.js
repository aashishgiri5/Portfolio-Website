document.getElementById('output').style.visibility='hidden';
document.getElementById('ozInput').addEventListener('input',function(e){
document.getElementById('output').style.visibility='visible';
let oz = e.target.value;
if(oz<0)	
{
	document.getElementsByTagName('body')[0].style.bacozround="#620000";
	document.getElementById('lbsOutput').innerHTML="Oops! Weight can't be negative...";
	document.getElementById('kgOutput').innerHTML="Oops! Weight can't be negative...";
}
else
{	
document.getElementsByTagName('body')[0].style.bacozround="#333";
document.getElementById('lbsOutput').innerHTML=(oz*0.0625).toFixed(2);
document.getElementById('kgOutput').innerHTML=(oz*0.0283495).toFixed(2);
}
})

function goBack() {
    window.history.back();
}