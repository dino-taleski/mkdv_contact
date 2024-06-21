import type { NextApiRequest, NextApiResponse } from 'next';
import MailjetClient from 'node-mailjet';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.MJ_APIKEY_PUBLIC || '';
const SEC_KEY = process.env.MJ_APIKEY_PRIVATE || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Preflight request successful
    return;
  }

  if (req.method === 'POST') {
    console.log(req.body);

    const { name, surName, email, message } = req.body;
    console.log(name, email, message);

    try {
      // Create a Mailjet client
      const mailjet = new MailjetClient({ apiKey: API_KEY, apiSecret: SEC_KEY });

      // Send an email
      const request = mailjet.post("send", { 'version': 'v3.1' }).request({
        "Messages": [
          {
            "From": {
              "Email": "contact@mkdv.mk",
              "Name": "КОНТАКТ | MKDV"
            },
            "To": [
              {
                "Email": "mkdvcontact@gmail.com",
                "Name": "MKDV"
              }
            ],
            "Subject": `Нова порака од ${name} ${surName}`,
            "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            "HTMLPart": `<h3>Лице за контакт ${name} ${surName} со е-мејл: ${email} </h3><br />Порака: ${message}`
          }
        ]
      });

      // Handle the response
      const result = await request;
      console.log(result.body);

      res.status(200).json({ submitted: true });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
