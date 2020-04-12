// fetch api
//this works as a promise within itself
fetch('1.json').then((response) => {
    console.log('resolves',response);
    return response.json();
})
.then( data => {
console.log(data);
})
.catch(() => {                           //promise is only canceled when there is network error or something 
console.log('rejected ',err);              //else it is resolved as usual
});