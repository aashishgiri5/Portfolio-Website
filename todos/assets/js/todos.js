$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();


});

$("input[type='text']").keypress(function(e)
{
	if(e.which===13)
	{
		var textEntered=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+textEntered+"</li>")
	}
});

$(".fa-plus").click(function(){
$("input[type='text']").slideToggle(140);
});

function goBack() {
    window.history.back();
}
