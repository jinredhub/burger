
$(function(){
	$("#submit-btn").on("click", function(event){
		event.preventDefault();
		var newBurger = {
			burger_name : $("textarea").val().trim()
		}
		console.log("textarea",newBurger);

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).done(function(){
			console.log("created new burger!");
			location.reload();
		});
	});

	// console.log("hi handlebars");

	$(".del-btn").on("click", function(event){
		event.preventDefault();
		var id = $(this).attr("data-id");

		var updateDevour = {
			devoured: true
		};

		$.ajax("/api/" + id, {
			type: "PUT",
			data: updateDevour
		}).then(function(){
			console.log("devoured: ", id);
			location.reload();
		})
	});

});