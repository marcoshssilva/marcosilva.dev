import client, { Connection, Channel } from "amqplib";
import process from "process";

/**
 * RabbitMQConnector
 * Make a connection on RabbitMQ server using amqplib
 *
 * Thanks and congratulations to Hassan Fouad
 * Reference: https://hassanfouad.medium.com/using-rabbitmq-with-nodejs-and-typescript-8b33d56a62cc
 */
export class RabbitMQConnector {
  private connection?: Connection;
  private channel?: Channel;

  async connect() {
    try {
      console.log(`⌛️ Connecting to RabbitMQ Server`);
      let url = process.env.NEXTJS_RABBITMQ_URL ?? 'amqp://localhost:5672'
      this.connection = await client.connect(url);

      console.log(`✅ RabbitMQ Connection is ready`);

      this.channel = await this.connection.createChannel();

      console.log(`🛸 Created RabbitMQ Channel successfully`);
    } catch (error) {
      console.error(error);
      console.error(`Not connected to RabbitMQ Server`);
    }
  }

  async sendToQueue(queue: string, message: any) {
    try {
      if (!this.channel) {
        await this.connect();
      }
      this.channel?.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async disconnect() {
    let isConnected = await this.isConnected()
    if (isConnected) {
      await this.connection?.close();
    }
  }

  async isConnected() {
    return this.connection !== undefined;
  }
}

const rabbitConnection = new RabbitMQConnector();
export default rabbitConnection;
