const speak = function(name)
{
    console.log(`hi ${name}`);
}

let name = 'm siva kumaran';
speak(name);

// arguments & parameters

const speaks = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}!`);
  };
  
  // speak('mario', 'morning');
  // speak();
  speaks('shaun');
  
