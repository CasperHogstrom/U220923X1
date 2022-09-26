var color;
var value;

Cards = [color, value];

var CardsPlayed = [];

DrawCardFn = () => {
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    color = DrawRandomCard(4);
    value = DrawRandomCard(13);
    CardDrawn = {color, value};
    CheckCard(`${CardDrawn.color}, ${CardDrawn.value}`);
    console.table(Cards);
    console.table(CardsPlayed)
};

CheckCard = (color) => {
    if (CardsPlayed.includes(`${CardDrawn.color}, ${CardDrawn.value}`)) {
        DrawCardFn();
    } else {
        Cards.push(CardDrawn);
        CardsPlayed.push(`${CardDrawn.color}, ${CardDrawn.value}`);
    };
};

StartGame = () => {    
    Cards = [];
    CardsPlayed = [];
    for (i = 0; i < 2; i++) {
        DrawCardFn();
    };

    console.log(Cards)
};


Hit = () => {
    DrawCardFn();
    console.log(Cards);

};

Add = () => {
    
}