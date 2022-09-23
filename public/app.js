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

DrawCardFn = () => {
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    var CardDrawn = (DrawRandomCard(4) + ', ' + DrawRandomCard(13));
    CardsPlayed.push(CardDrawn);
}

StartGame = () => {
    CardsPlayed = [];
    
    for (i = 0; i < 2; i++) {
        DrawCardFn();
    };

    console.log(CardsPlayed)
};


Hit = () => {
    DrawCardFn();
    console.log(CardsPlayed);

};

Add = () => {
    
}