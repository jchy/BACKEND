const users = ["Aman","Jaswant","Nrupul","Albert"];

function getAllUsers(){
    return users;
}

function getUser(index){
    if(index >= 0 && index < users.length){
        return users[index];
    }
    else 
        return null;
}

function addUser(name){
    users.push(name);
    return users;
}

module.exports = {
    getAllUsers,
    getUser,
    addUser
}