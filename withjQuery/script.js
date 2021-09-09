const colors = ["green","red","rgba(153,122,200)","#f15025"];

$('#btn').click(function(){
    const randomNumber =  Math.floor(Math.random()*colors.length);
    $('body').css('backgroundColor', colors[randomNumber]);
    $('#color').text(colors[randomNumber]);
})