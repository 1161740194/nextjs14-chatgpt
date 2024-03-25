import mongoose from 'mongoose';

export let mongodb: typeof mongoose;

export async function connectMongodb() {
try {
    if (mongodb) return;

    mongodb = await mongoose.connect((process.env as any).MOGODB_URI)
} catch(error) {
    console.error('mongodb error', error)
}
}