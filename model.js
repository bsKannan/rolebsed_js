var usersRoles = {
    adminBsk : "admin",
    editorBsk : "editor",
    authorBsk : "author",
    subscrBsk : "subscriber"
}

module.exports.getroles = function(user){
    return usersRoles[user];
}
