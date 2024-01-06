"use server"
export async function sendContactMeGetFormDataAction(name: string, mail: string, message: string) {
  "use server"
  console.log(`Send event data: NAME=${name} \tMAIL=${mail} \tMESSAGE=${message}`);
}
