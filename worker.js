import {Worker} from "bullmq";

//logics to send email
const sendEmail = async () =>
  new Promise((resolve, reject) => setTimeout(resolve(), 5000));

//Initialize worker
const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message recieved id: ${job.id}`);
    console.log("Processing message ...");
    console.log(`Sending mail to ${job.data.email}`);
    await sendEmail();
    console.log("Email sent");
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);
