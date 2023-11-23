"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const text = formData.get("text");

    if (!validateString(email, 100)) {
      return {
        error: "Invalid e-mail"
      };
    }

    if (!validateString(text, 2000)) {
      return {
        error: "Invalid message"
      };
    }

    let data;
    try {
      data = await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: "syartapajaziti@gmail.com",
        subject: "Portfolio Form Message",
        reply_to: email as string,
        react: React.createElement(ContactFormEmail, {
          email: email as string,
          text: text as string,
        }),
      });
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      };
    }

  return {data};
};