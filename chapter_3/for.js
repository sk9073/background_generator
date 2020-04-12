// for loops

for(let i = 0; i < 5; i++)
{
   console.log('loop: ', i);
}

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// break & continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }

}
