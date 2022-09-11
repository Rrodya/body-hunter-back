export default function validToken(users, token){
    let tokenExist = false;

    users.forEach(item => {
        if(item._id.toString() === token){
            tokenExist = true;
        }
    })

    return tokenExist;
}
