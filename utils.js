function isAuthenticated(req) {
    return !!req.cookies['userAuth']
}

function employeeAuthenticated(req) {
    return (req.cookies
        && (req.cookies['e_auth'] === 'employeeAuthenticated'))
}

module.exports = {
    isAuthenticated,
    employeeAuthenticated,
    parseAmount(amount = '0') {
        return parseFloat(amount.replace(/[^\d\.]/g, '')).toFixed(2)
    },
    basicData(req) {
        return {
            authenticated: isAuthenticated(req),
            isEmployee: employeeAuthenticated(req),
            username: isAuthenticated(req) ? req.cookies['userAuth'] : undefined
        }
    }
}
