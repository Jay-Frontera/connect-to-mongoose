import { connect, set } from "mongoose";

/**
 * 
 * @returns {Mongoose}
 */
export default async function connectToMongoose(uri) {
    return new Promise(async (res, rej) => {
        set("strictQuery", true);
        try {
            const mongoose = await connect(uri || process.env.MONGO_URI, {
                autoIndex: false
            });
            console.log(`[!] Connected to mongoose!`)
            res(mongoose)
        } catch (err) {
            rej(err)
        }
    });
}
