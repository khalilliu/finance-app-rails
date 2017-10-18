

// function init_friend_lookup(){
	
// 	$('#friend-lookup-form').on('ajax:before',function(ev,data,status){
// 		show_spinner()
// 	})

// 	$('#friend-lookup-form').on('ajax:after',function(ev,data,status){
// 		hide_spinner()
// 	})

// 	$('#friend-lookup-form').on('ajax:success',function(ev,data,status){
// 		console.log(data+'success')
// 		$('#friend-lookup').replaceWith(data);
// 		init_friend_lookup();
// 	})


// 	$('#friend-lookup-form').on('ajax:error',function(ev,xhr,status,error){

// 		init_friend_lookup();
// 		$('#friend-lookup-results').replaceWith(' ');
// 		$('#friend-lookup-errors').replaceWith('person was not found');
// 	})
// }

// window.onload = (function(){
// 	console.log('loaded friend')
// 	init_friend_lookup();
// })
