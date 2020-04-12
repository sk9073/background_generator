//func_decl

function type()// even if u call it before defining it , the compiler will host the definition to the top:
{
    console.log('just type it up');
}

type();

const speak = function() //  u cant define it after calling the function for thsi type
{
    console.log('heyyyy,guess what i am speaking')
}
speak();