import users from './user';
const User = {
    find: async (email) => {

        if (users.hasOwnProperty(email)) {
            return users[email]
        } else {
            return null
        }
    }
}


export default User;