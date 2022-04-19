import bcrypt from "bcryptjs"

const admins = [
    {
        name: 'Reem Stamker',
        email: 'Reem@example.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: '0541234562'
    },
    {
        name: 'Michael Scott',
        email: 'Michael@example.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: '0531234562'
    },
    {
        name: 'Jim Halpert',
        email: 'Jim@example.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: '0521234562'
    },
]

export default admins