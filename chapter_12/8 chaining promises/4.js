const GeTodo = (resource) =>{
    
    return new Promise((resolve,reject)=> {


        const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() =>{
        
        
        if(request.readyState ===4 && request.status === 200)
            {
            const data = JSON.parse(request.responseText);
            resolve(data);
            }
        else if (request.readyState === 4)
            {
                callback('could not fetch data',undefined);
                reject('error GETTING resource');
            }
   
    });
    request.open('GET',resource);   //type of request ,end point from where we want the data from 
    request.send();//sending the request 

    });
};

GeTodo('1.json').then(data => {
    console.log('promise 1 resolved',data);
    return GeTodo('2.json');
})
.then((data => { console.log('promise 2 resolved',data);
return GeTodo('3.json')

}))
.then((data => { console.log('promise 3 resolved',data);}))


.catch(err =>{console.log(err)});
