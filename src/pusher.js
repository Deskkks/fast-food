import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster, 
  useTLS: true
})

export const pusherClient = new PusherClient("afaaaf031c07bd902aff",{
  cluster: "sa1"
})