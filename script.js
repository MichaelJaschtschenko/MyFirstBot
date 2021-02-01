const form = document.querySelector('.bot__form form');
const botAnswer = document.getElementById('bot__answer');

const db = {
    'Как дела?' : 'Хорошо! Как у тебя?',
    'Как открыть консервы?' : 'Никак',
    'Сколько тебе лет?' : 0
}

const animationType = 'animate__pulse';

function handleAnimationEnd() {  
    botAnswer .classList.remove(animationType );
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = event.target.bottext.value;
if(value){
    const answer = db[value];
    if(answer !== undefined){
        botAnswer.innerText = answer;
    }else{
        botAnswer.innerText = 'Я не знаю ответа на данный вопрос!';
    }

    botAnswer.classList.add(animationType);
    botAnswer.addEventListener('animationend', handleAnimationEnd, {once: true});
}
    //botAnswer.innerText = db[value];
    //console.log(db[value]);
})






 




// function handleAnimationEnd(event) {
//     event.stopPropagation();
//     node.classList.remove(`${prefix}animated`, animationName);
//     resolve('Animation ended');
//   }

//   node.addEventListener('animationend', handleAnimationEnd, {once: true});
