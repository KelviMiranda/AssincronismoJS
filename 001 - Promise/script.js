"use strict";
const betterDeveloper = 'Vanessa';
//Callback function
/* 
function whoIsBetterDeveloper (callback, callbackEror) {
    if(typeof callback === 'function' || typeof callbackEror === 'function'){
        
        const objError =  {
            name:'This is wrong',
            message:`${betterDeveloper} ? Really`
        }
    
        const objResollved = {
            name:betterDeveloper,
            message:'CDF are the best'
        }
    
        if(betterDeveloper != 'vanessa' && betterDeveloper != 'Gabriel'){
            callbackEror(objError);
        }else{
            callback(objResollved)
        }

        return ;
    }

    console.error('Você não passou a função como parâmetro')
}

function resolve(objResollved){
    console.log(`${objResollved.name} ? Yeah !  ${objResollved.message}`);
}

function reject(objError){
    console.log(`${objError.name} ${objError.message}`)
}
whoIsBetterDeveloper(resolve, reject); */

//Promise 
function whoIsBetterDeveloper(){
    return new Promise((resolve, reject) => {
        if(betterDeveloper != 'Vanessa' && betterDeveloper != 'Vabriel' ){
            resolve({
                name:'This is wrong',
                message:betterDeveloper + '? Really'
            });
        }else{
            reject({
                name:betterDeveloper,
                message:'CDFs are the best'
            })
        }
    })
}

whoIsBetterDeveloper().then(
    result => {
        console.log(result.name + ' ? Yeah ' + result.message);
    }
).catch(err => {
    console.log(err.name + ' ' + err.message);
}).finally(() => {
    console.log('Promise Executado com sucesso');
})