import { NextApiRequest, NextApiResponse } from "next";


import { pusherServer } from "../../../../lib/pusher";
import { currentUser } from "@clerk/nextjs/server";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const user = await currentUser()

    if(user === null || user?.emailAddresses[0].emailAddress) {
        return response.status(401)
    }

    const socketId = request.body.socket_id;
    const channel = request.body.channel_name;
    const data = {
        user_id: user.emailAddresses[0].emailAddress
    }

    const authResponse = pusherServer.authorizeChannel(socketId, channel, data)

    return response.send(authResponse);
}