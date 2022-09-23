var x;
var y;

Cards = [x,y];

var CardCharacteristics = {
    Hearts: '',
    Diamonds: '',
    Clubs: '',
    Spades: ''
};

DrawCard = () => {
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    console.log(DrawRandomCard(4) + ', ' + DrawRandomCard(14));
};
