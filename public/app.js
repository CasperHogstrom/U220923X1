var color;
var value;

Cards = [color, value];

var CardsPlayed = [];

var OutputCards = document.getElementById('outputcards');


DrawCardFn = () => {
    var DrawRandomCard = (max) => Math.floor(Math.random(Cards) * max);
    color = DrawRandomCard(4);
    value = DrawRandomCard(13);
    CardDrawn = {color, value};
    CheckCard(`${CardDrawn.color}, ${CardDrawn.value}`);
    console.table(Cards);
};

CheckCard = () => {
    if (CardsPlayed.includes(`${CardDrawn.color}, ${CardDrawn.value}`)) {
        DrawCardFn();
    } else {
        Cards.push(CardDrawn);
        CardsPlayed.push(`${CardDrawn.color}, ${CardDrawn.value}`);
    };
};

StartGame = (OutputCards) => {    
    OutputCards = document.getElementById('outputcards');
    OutputCards.innerHTML = '';
    Cards = [];
    CardsPlayed = [];
    for (i = 0; i < 2; i++) {
        DrawCardFn();
        Write();
    };

    console.log(Cards)
};


Hit = (OutputCards) => {
    DrawCardFn();
    console.log(Cards);
    Write();

};

Write = () => {
    OutputCards = document.getElementById('outputcards');
    OutputCards.innerHTML += (`${color}, ${value} <br>`);

    var PlayerSum = document.getElementById('outputsum')

    let Total = 0;

    for (var i=0; i < Cards.lenght; i++){
        sum += Cards[i].value+1;
    };

    PlayerSum.innerHTML = Total;


}

Add = () => {
    
}