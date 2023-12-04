"use server";
import { Resend } from "resend";
import { getErrorMessage } from "../../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const subject = formData.get("senderSubject");

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <portfolio@resend.dev>",
      to: "supakritaphonmaeklong@gmail.com",
      subject: subject,
      reply_to: senderEmail,
      text: message,
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  return {
    data,
  };
};
