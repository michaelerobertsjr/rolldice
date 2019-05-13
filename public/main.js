function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

$('#roll').click(function() {
    $(".box").html("");
    var random = getRandomInt(1,7);
    $(`#${random}`).html(random);
    $(`#${random}`).attr("background-color","green")
});

