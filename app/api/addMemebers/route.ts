import client from "@mailchimp/mailchimp_marketing"
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    client.setConfig({
        apiKey: process.env.NEXT_PUBLIC_MAIL_CHIMP_API_KEY,
        server: process.env.NEXT_PUBLIC_MAIL_CHIMP_SERVER_PREFIX
      });
      try {
        const { email } = await req.json()
        const response = await client.lists.addListMember(process.env.NEXT_PUBLIC_MAIL_CHIMP_LIST_ID, {
            email_address: email,
            status: "pending",
          });
          return NextResponse.json(response)
    } catch (error) {
        console.log(error)
        return new NextResponse("Server Error", {status: 500})
    }
}