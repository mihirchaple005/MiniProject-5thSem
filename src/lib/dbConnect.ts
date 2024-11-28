import { log } from "console";
import mongoose from "mongoose";

type connectionObject = {
    isConnected?: Boolean;
}

const connection: connectionObject = {}
const maxRetry: number  = 2;
let retryCount: number = 0;



async function dbConnect(): Promise<boolean> {

    if (connection.isConnected) {
        console.log("Database is already connected");
        return true;
    }

    try {

        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        connection.isConnected = db.connections[0].readyState === 1;

        console.log("Connected to database", connection.isConnected);

        return true;

    } catch (error) {
        
        // process.exit(1); // force exit
        // Attempt to recover from the error
        if (await retryDatabaseConnection()) {
            return true;
        }

        console.log("Failed to connect to database. Exiting process.", error);

        // Exit the process with a non-zero exit code
        process.exit(1);
    }


}

async function retryDatabaseConnection(): Promise<boolean> {
    if (retryCount > maxRetry) {
        return false;
    }

    retryCount++;
    console.log("Error connecting to database trying again");
    await new Promise(res => setTimeout(res, 3000)); 
    return dbConnect();
}



