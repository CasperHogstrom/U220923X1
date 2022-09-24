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
    /*
    En loop som först kollar efter om kortet som "dragits" är false(kanske måste leta efter true för att "korten" ej har värdet false som standard) 
    och i fall att det är det "dela" ut det, och sedan sätt det kortet till true. Om kortet däremot är true ska det genereras ett nytt kort som "delas" ut.
    Detta ska köras för varje kort så att inte två av samma kort delas ut vid start av nytt spel.
    Loopen bör då köras för varje DrawRandomCard funktion.
    */
    
    //var falseCond = new Boolean(false);
    var CardDrawn = (`${DrawRandomCard(4)}, ${DrawRandomCard(13)}`);
    CheckCard(CardDrawn);
    console.table(CardsPlayed);
};

CheckCard = (CardDrawn ) => {
    if (CardsPlayed.includes(CardDrawn)) {
        DrawCardFn();
    } else {
        CardsPlayed.push(CardDrawn);
    };

};

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