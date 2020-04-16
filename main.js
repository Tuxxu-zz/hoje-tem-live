$(document).ready(function() {
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var teste = data.filter(element => element.status == "today")
        var template = Handlebars.compile($('#lives').html())
        $('#list').html(template(teste))
    });
});

$(document).ready(function(){
  $("#light").click(function(){
    $("#light").css("display", "none");
    $("#dark").css("display", "block");
    $("body").addClass("dark");
  });
});

$(document).ready(function(){
  $("#dark").click(function(){
    $("#dark").css("display", "none");
    $("#light").css("display", "block");
    $("body").removeClass("dark");
  });
});

function todayLives() {
    $('#list').fadeOut();
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var today = data.filter(element => element.status == "today")
        var template = Handlebars.compile($('#lives').html())
        $("#more").css("display", "block");
        $("#less").css("display", "none");
        $('#list').html(template(today)).fadeIn();
    });
}

function allLives() {
    $('#list').fadeOut();
    $.getJSON('https://sheet.best/api/sheets/2f8d9274-9901-47fa-a582-01d445d4c709', function(data) {
        var template = Handlebars.compile($('#lives').html())
        $("#more").css("display", "none");
        $("#less").css("display", "block");
        $('#list').html(template(data));
        $('#list').fadeIn();
    });
}
