import { Server, Socket } from "socket.io";
import { NextApiRequest, NextApiResponse } from "next";

let io: Server | undefined;

export async function GET(req: NextApiRequest, res: any): Promise<void> {
  if (!io) {
    io = new Server(res.socket.server, {
      cors: {
        origin: "http://localhost:3001/community", // Your frontend URL
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket: Socket) => {
      console.log("User connected:", socket.id);

      socket.on("sendMessage", (messageData: { conversationId: string; text: string; timestamp: string }) => {
        io?.to(messageData.conversationId).emit("receiveMessage", messageData);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    console.log("Socket.IO server initialized");
  }
  res.end();
}
