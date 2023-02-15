const user = {
    fullName: "Matan Adi",
    name: "Matan",
    imgUrl: 'https://ca.slack-edge.com/T043N4KE97B-U045HE0SWR3-89a31180034c-512',
    balance: 256,
    transactions: []
}

function getUser() {
    return user
}

export const userService = {
    getUser,
}
