const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() =>{
if(request.readyState ===4 )
{
console.log(request.responseText);
}
});



request.open('GET','https://jsonplaceholder.typicode.com/todos/');   //type of request ,end point from where we want the data from 
request.send();//sending the request 


