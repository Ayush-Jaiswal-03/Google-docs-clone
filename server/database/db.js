import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://ayush:89W58ANziqVuueXQ@cluster0.ntililz.mongodb.net/google`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;