const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$('#btn').click(function(){
    let hexColor = '#';
    for(let i=0; i < 6; i++){
        //we know in JavaScript + sign can be used to write strings side by side
        hexColor += hex[getRandomNumber()];

    }
    $('#color').text(hexColor);
    // console.log("11");
    $('body').css('backgroundColor', hexColor);
    // console.log("13");
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}