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
    console.log('promise resolved',data);
}).catch(err =>{console.log(err)});
//Promise example

// const getSomething = () => {

//     return new Promise((resolve,reject)=>{     //resolve is the data   reject is the error
        
//         //resolve('some data');
//         reject('some error');
//     });
// };
// //first getsomething. gets processed  but the function need not take any parameter
// getSomething().then((data) => {
// console.log(data);   
// },(err) => { 
//     console.log(err);
// });

// getSomething().then((data) => {
//     console.log(data);   
//     }).catch(err => { 
//         console.log(err);
//     });

