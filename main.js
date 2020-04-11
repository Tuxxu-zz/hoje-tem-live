$(document).ready(function(){
$.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
		var template = Handlebars.compile($('#item-template').html())
		$('#list').html(template(data))
	})
})
