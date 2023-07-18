function card(type, title, description) {
    this.type = type;
    this.title = title;
    this.description = description;
    this.brand = brand;
    
}

var deck = [
    new card('Reflection', 'What is one thing that brings you energy and joy?'),
    new card('Completeness', 'Who is not in the room?'),
    new card('Completeness', 'What are we not asking?'),
    new card('Completeness', 'What are we missing?'),
    new card('Direction', 'What do you intend to do?'),
    new card('Direction', 'Can you tell me more about why this solution is important to you?'),
    new card('Direction', 'How might we reframe this idea as a hypothesis?'),
    new card('Direction', 'What is the user need?'),
    new card('Completeness', 'How will this affect future generations?'),
    new card('Alignment', 'Does anyone have any objections?'),
    
    new card('Sustainability', 'What will we stop doing?'),
    new card('Sustainability', 'What do we want to keep?'),

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(12);
    var currentCard = deck[index];

   
    document.getElementById("display").innerHTML = '<h3>' + currentCard.type + '</h3><h2>' + currentCard.title + '</h2><p>' + currentCard.description + '</p>';
};
