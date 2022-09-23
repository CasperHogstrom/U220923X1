var x;
var y;

Cards = [x,y];

var CardCharacteristics = {
    Hearts: '',
    Diamonds: '',
    Clubs: '',
    Spades: ''
};

var CardsPlayed = [];

StartGame = () => {
    CardsPlayed = [];
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    for (i = 0; i < 2; i++) {
        var CardDrawn = (DrawRandomCard(4) + ', ' + DrawRandomCard(13));
        CardsPlayed.push(CardDrawn);
    };

    console.log(CardsPlayed)
};


Hit = () => {
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    var CardDrawn = (DrawRandomCard(4) + ', ' + DrawRandomCard(13));

    CardsPlayed.push(CardDrawn);
    console.log(CardsPlayed);

};

Add = () => {
    
}