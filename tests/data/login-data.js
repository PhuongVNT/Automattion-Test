const LoginData = [
    {
        title: 'Login sucessfully',
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
        expectted: 'You logged into a secure area'
    },
    {
        title: 'Login fail with wrong username',
        username: 'tomsmith_wrong',
        password: 'SuperSecretPassword!',
        expectted: 'Your username is invalid'
    },
    {
        title: 'Login fail with wrong password',
        username: 'tomsmith',
        password: 'SuperSecretPassword!_wrong',
        expectted: 'Your password is invalid'
    }
]
module.exports = { LoginData };