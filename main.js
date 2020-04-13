$(document).ready(function() {
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var teste = data.filter(element => element.status == "today")
        var template = Handlebars.compile($('#item-template').html())
        $('#list').html(template(teste))
    });
});

function todayLives() {
    $('#list').fadeOut();
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var today = data.filter(element => element.status == "today")
        var template = Handlebars.compile($('#item-template').html())
        $('#list').html(template(today)).fadeIn();
    });
}

function allLives() {
    $('#list').fadeOut();
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var template = Handlebars.compile($('#item-template').html())
        $('#list').html(template(data));
        $('#list').fadeIn();
    });
}