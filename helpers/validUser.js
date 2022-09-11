export default function validUser(users, user) {
    let isExistEmail = false;

    users.forEach(item => {
        if(item.email == user.email){
            isExistEmail = true;
        }
    })

    return isExistEmail
}
