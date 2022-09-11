export default function validToken(users, token){
    let tokenExist = false;

    users.forEach(item => {
        if(item._id === token){
            console.log(item._id);
            console.log(token);
            tokenExist = true;
        }
    })

    return tokenExist;
}
