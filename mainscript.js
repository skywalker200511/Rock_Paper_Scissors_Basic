let result = '';
    let userPick = '';
    let compMove = '';
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
    }
    updateScore();
    
    
    function pickCompMove()
    {
        const randomNumber = Math.random();
        let computerMove = '';

        if(randomNumber>=0 && randomNumber<=1/3)
        {
            computerMove = 'rock';
        }
        if(randomNumber>1/3 && randomNumber<=2/3)
        {
            computerMove = 'paper';
        }
        if(randomNumber>2/3 && randomNumber<1)
        {
            computerMove = 'scissors';
        }
     
       return computerMove;
    }

    function calcResult(compMove,userPick)
    {
        let result = '';
        if(userPick === 'rock')
        {
            if(compMove === 'rock')
                {
                    result = 'TIED';
                }
            if(compMove === 'paper')
                {
                    result = 'LOST';
                }
            if(compMove === 'scissors')
                {
                    result = 'WON';
                }
        }
        if(userPick === 'paper')
        {
            if(compMove === 'rock')
                {
                    result = 'WON';
                }
            if(compMove === 'paper')
                {
                    result = 'TIED';
                }
            if(compMove === 'scissors')
                {
                    result = 'LOST';
                }
        }
        if(userPick === 'scissors')
        {
            if(compMove === 'rock')
                {
                    result = 'LOST';
                }
            if(compMove === 'paper')
                {
                    result = 'WON';
                }
            if(compMove === 'scissors')
                {
                    result = 'TIED';
                }
        }
  
        if(result === 'WON')
        {
            score.wins = score.wins + 1;
        }
        else if(result === 'LOST'){
            score.losses = score.losses + 1;
        }
        else if(result === 'TIED')
        {
            score.ties = score.ties + 1;
        }

        document.querySelector('.result_score').innerHTML = result;
        updateScore();
        document.querySelector('.moves').innerHTML = `You ${userPick} - ${compMove} computer`;

        localStorage.setItem('score',JSON.stringify(score));
        
    }
    function updateScore()
        {
            document.querySelector('.ScoreText').innerHTML = `WINS = ${score.wins}  LOSS = ${score.losses}  TIES = ${score.ties}`;

        }