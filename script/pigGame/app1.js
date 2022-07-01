var  scores , roundScores,lastDice, activePlayer , dice, gamePlaying;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em' +dice+ '</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        
    
    //random number
    var dice = Math.floor(Math.random()*6)+1;
    
    //display the result
   var diceDom=document.querySelector('.dice');
        console.log(diceDom);
    diceDom.style.display='block';
    diceDom.src='dice-' + dice + '.png'
    //update the round score if the rolled number was not a 1
        
        
        if(dice===6 && lastDice===6)
            {
                scores[activePlayer]=0;
                document.querySelector('#score-' + activePlayer).textContent='0';
                nextPlayer();
                
            }
    if(dice !== 1){
        //add score
        roundScores+=dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScores;
         
    }
    else{
       nextPlayer();
        }
        lastDice=dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying)
{
    
   //add current score to global score
    scores[activePlayer] += roundScores;
    
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    var input=document.querySelector('.final-score').value;
    console.log(input);
    
    if(input){
         var winningScore = input;
    }
    else{
        winningScore = 100;
    }
    
    //check if player won the game
    if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent='winner!';
        
        document.querySelector('.dice').style.display='none';
        
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying= false;
        }
    else
        {
            
    //Next player
    nextPlayer();
            
        }
}
    
    
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores=0;
        document.getElementById('current-0').textContent='0';
         document.getElementById('current-1').textContent='0';
        
       // document.querySelector('.player-0-panel').classList.remove('acttive');
      //document.querySelector('.player-1-panel').classList.add('active');
         document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
       document.querySelector('.dice').style.display = 'none' ;
        
    
}
document.querySelector('.btn-new').addEventListener('click',init);




function init(){
    
scores =[0,0];
roundScores =0;
activePlayer =0;
    gamePlaying = true;
document.querySelector('.dice').style.display='none';
      
document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';

document.getElementById('current-1').textContent='0';

 document.getElementById('name-0'  ).textContent='player 1';
    
 document.getElementById('name-1'  ).textContent='player 2';
    
 document.querySelector('.player-0-panel').classList.remove('winner');
    
 document.querySelector('.player-1-panel').classList.remove('winner');
    
 document.querySelector('.player-0-panel').classList.remove('active');
        
 document.querySelector('.player-1-panel').classList.remove('active');
    
 document.querySelector('.player-0-panel').classList.add('active');
}






