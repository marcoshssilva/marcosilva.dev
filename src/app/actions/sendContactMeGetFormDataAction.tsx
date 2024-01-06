"use server"
import rabbitConnection from "../lib/rabbimq/RabbitMQConnector";
import process from "process";

export async function sendContactMeGetFormDataAction(name: string, mail: string, message: string) {
  // get queueName from env
  const queueName = process.env.NEXTJS_RABBITMQ_QUEUE_NOTIFY_CONTACT ? process.env.NEXTJS_RABBITMQ_QUEUE_NOTIFY_CONTACT : '';
  // sending message
  await rabbitConnection.sendToQueue(queueName, {name, mail, message});
}
