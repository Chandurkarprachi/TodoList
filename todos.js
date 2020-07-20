//strike Throught effect code

$("ul").on("click","li" ,function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding new todos
$("input").keypress(function(event){
	if(event.which===13){
		//grab new todo
		 var todoText=$(this).val();
		 $(this).val("");//clearing input textBox after grabbing the value

		 //adding textTodo into our lis using append() method
		 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText +"</li>")
	}
});

$(".fa-pencil-alt").click(function(){

	$("input").fadeToggle();
});