console.log('hey tere')

function spsGame(yourChoice){
    console.log(yourChoice.id)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToSpsInt());
    // console.log('computer chioie '+botChoice);

    results = decideWinner(humanChoice, botChoice);
    // console.log(results);

    message = finalMessage(results);
    // console.log(message); 

    spsFrontEnd(yourChoice.id, botChoice, message);   
 }

function randToSpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['stone', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var spsDatabase = {
        'stone': {'scissors': 1, 'stone': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'stone': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'stone': 0, 'paper': 1}
    }

    var yourScore = spsDatabase[yourChoice][computerChoice];
    var computerScore = spsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost ! ', 'color': 'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You Tied ! ', 'color': 'yellow'};
    }
    else {
        return {'message': 'You Win ! ', 'color': 'green'};
    }
}

function spsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'stone': document.getElementById('stone').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    //remove image after user choice
    document.getElementById('paper').remove();
    document.getElementById('stone').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var flexDiv = document.getElementById('flex-box-sps-div');

    humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice] + "'height = 150 width = 150 style='box-shadow:0px 1px 50px rgba(37, 50, 233, 1);'>";
    botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "'height = 150 width = 150 style='box-shadow:0px 1px 50px rgba(243, 38, 24, 1);'>'"; 
    message.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['meessage'] + "</h1>"
    flexDiv.appendChild(humanDiv);
    flexDiv.appendChild(botDiv);
    flexDiv.appendChild(message);
}




