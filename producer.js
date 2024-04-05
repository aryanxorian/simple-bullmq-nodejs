import {Queue} from "bullmq";

//Insantiate the queue
const emailQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

//Add messages to the queue
const enqueue = async () => {
  const response = await emailQueue.add("email to sushanta", {
    email: "youremail@gmail.com",
    subject: "Welcome email",
    body: "Welcome to the Platform",
  });

  console.log("messages added to queue", response.id);
};
//Run the queue
enqueue();
