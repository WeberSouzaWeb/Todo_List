import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('') // MongoDB Data Base Connect URL
    console.log('Db')
}
