"use strict";

function bestRockBand(band){
    const response = new Promise((resolve, reject) =>{
        
        if(band == 'Queen'){
            resolve({
                success:true,
                bandName:band,
                msg:band + 'is the best rock band ever !'
            })
        }else{
            reject({
                success:false,
                msg:'I \'m not sure'
            })
        }
    })

    return response;
}

function bestRockSong(response){
    return new Promise((resolve, reject) =>{
        if(response.success){
            resolve('Boheman Rhapsody by ' + response.bandName)
        }else{
            reject('Do you know Queen ?')
        }
    })
}

/* bestRockBand('Quee').then(
    response => {
        console.log('Checking the answer........');
        return bestRockSong(response)
    }
).then(response => {
    console.log('Finding the best song.............');
    console.log(response)
}).catch(err => {
    console.error(err.msg)
}) */

const doTheJob = async () => {
    try{
        const bestRockresponse = await bestRockBand('Queen');
        console.log(bestRockresponse)
        const bestRockSongResponse = await bestRockSong(bestRockresponse);
        console.log(bestRockSongResponse)
    }catch(err){
        console.error(err.msg)
    }
}
doTheJob()
