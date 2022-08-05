export const AuthenticationService = () => {
    const authenticate = (userCred) => {
        return new Promise((resolve, reject) => {
            resolve(userCred)
        })
    }
    return {
        authenticate
    }
}