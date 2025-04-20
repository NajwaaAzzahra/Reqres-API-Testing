async function logResponse(response) {
    console.log((await response).status)
    console.log((await response).body)
}

module.exports = logResponse