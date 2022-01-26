function messages(statusCode){
    let message = ""
    switch (statusCode) {
        case 201:
            message = "Created successfully"
            break;
        case 400:
            message = "Error bad request"
            break;
        case 404:
            message = "Data not found"
            break;
        case 500:
            message = "Server error"
        default:
            break;
    }
    return message
}

module.exports = {
    messages
}