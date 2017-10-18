

function init_stock_lookup(){
	
	$('#stock-lookup-form').on('ajax:before',function(ev,data,status){
		show_spinner()
	})

	$('#stock-lookup-form').on('ajax:after',function(ev,data,status){
		hide_spinner()
	})

	$('#stock-lookup-form').on('ajax:success',function(ev,data,status){
		console.log(data+'success')
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	})


	$('#stock-lookup-form').on('ajax:error',function(ev,xhr,status,error){

		init_stock_lookup();
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('stock was not found');
	})
}

function init_friend_lookup(){
	console.log('load friend-lookup')
	$('#friend-lookup-form').on('ajax:before',function(ev,data,status){
		show_spinner()
	})

	$('#friend-lookup-form').on('ajax:after',function(ev,data,status){
		hide_spinner()
	})

	$('#friend-lookup-form').on('ajax:success',function(ev,data,status){
		console.log('success')
		$('#friend-lookup').replaceWith(data);
		init_friend_lookup();
	})


	$('#friend-lookup-form').on('ajax:error',function(ev,xhr,status,error){

		init_friend_lookup();
		$('#friend-lookup-results').replaceWith(' ');
		$('#friend-lookup-errors').replaceWith('person was not found');
	})
}


window.onload = (function(){
	
	init_stock_lookup();
	init_friend_lookup()
})
