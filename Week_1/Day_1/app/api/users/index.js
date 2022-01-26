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
module.exports = {
    getAllUsers,
    getUser
}