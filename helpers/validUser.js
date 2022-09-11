export function validUser(users, user) {
    let isExistEmail = false;

    users.forEach(item => {
        if(item.email == user.email){
            isExistEmail = true;
        }
    })

    return isExistEmail
}

export function loginUser(users, data){
    let userInfo = {
        exist: false,
        token: false
    }

    users.forEach(item => {
        if(item.email === data.email){
            if(item.password === data.password){
                userInfo.exist = true;
                userInfo.token = item._id.toString();
            }
        }
    })

    return userInfo;
}
