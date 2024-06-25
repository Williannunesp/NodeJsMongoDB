import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:XmSGx0XTdrgb57sf@cluster0.tgl3ywx.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
  }

  
}

export default databaseConnection