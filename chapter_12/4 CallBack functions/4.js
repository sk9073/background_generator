const GeTodo = (callback) =>{
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() =>{
           
        if(request.readyState ===4 && request.status === 200)
            {
            callback(undefined,request.responseText);//https://developer.mozilla.org/en-US/docs/web/HTTP/Status
            }
        else if (request.readyState === 4)
            {
                callback('could not fetch data',undefined);
                
            }
   
    });



    request.open('GET','https://jsonplaceholder.typicode.com/todos/');   //type of request ,end point from where we want the data from 
    request.send();//sending the request 

};

console.log(1);
console.log(2);

GeTodo((err,data) => { //we take error first and data second

if(err)
    {
        console.log(err);
    }
else
    {
        console.log(data);
    }
});
console.log(3);
console.log(4);