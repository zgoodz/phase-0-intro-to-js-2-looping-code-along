function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--)
    }
}