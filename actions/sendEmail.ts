
"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "elizzakaimachiande@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};



// "use server";

// import { Resend } from "resend";
// import { validateString, getErrorMessage} from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";
// import React from "react";

// const resend = new Resend(process.env.RESEND_API_KEY);


// export const sendEmail = async(FormData: FormData) => {
//     const senderEmail = FormData.get("senderEmail");
//     const message = FormData.get("message");
//     console.log("running on server...");
//     // console.log(FormData.get("senderEmail"));
//     // console.log(FormData.get("message"));

//     //server side validation

//     console.log(senderEmail);

//     if (!validateString(senderEmail, 500)) {
//         return {
//             error: "Invalid senderEmail",
//         };
//     }
//     if (!validateString(message, 5000)) {
//         return {
//             error: "Invalid message",
//         };
//     }

//     try {
//         await resend.emails.send({
//             from:'Contact Form <onboarding@resend.dev>',
//             to: 'elizzakaimachiande@gmail.com',
//             subject: 'Message from contact form!',
//             reply_to: senderEmail as string,
//             react: React.createElement(ContactFormEmail, {
//                 message: message as string,
//                 senderEmail: senderEmail as string,
//             }),
//             // <ContactFormEmail  message = {message}, senderEmail = {senderEmail}/>
//             // text: message as string,
//         });
//     }
//     catch(error: unknown) {
//         return {
//             error: getErrorMessage(error),
//         }
//         // if (error instanceof Error) {
            
//     //     return {
//     //         error: error.message,
//     //     }
//     // } else if ( error && typeof error === 'object' && 'message' in error) {
//     //     return {
//     //         error: error.message,
//     //     };
//     // }

//     }

//   };