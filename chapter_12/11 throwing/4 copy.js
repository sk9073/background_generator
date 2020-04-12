// fetch api
//this works as a promise within itself
// fetch('1.json').then((response) => {
//     console.log('resolves',response);
//     return response.json();
// })
// .then( data => {
// console.log(data);
// })
// .catch(() => {                           //promise is only canceled when there is network error or something 
// console.log('rejected ',err);              //else it is resolved as usual
// });

const geTodo = async () => {
     const response =await fetch('1.json'); //always returns promise(the async ,.json())
if(response.status !== 200)
{
     throw new Error('CANNOT FETCH THE DATA');
}
     const data = await response.json();
     return data;
};

geTodo()
     .then(data => console.log(data))
     .catch(err => console.log('rejected',err.message));