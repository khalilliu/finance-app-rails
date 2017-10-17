

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

window.onload = (function(){
	console.log('loaded')
	init_stock_lookup();
})
