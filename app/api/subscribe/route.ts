import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();

  const _response = await fetch(
    "https://us21.api.mailchimp.com/3.0/lists/e9f3695e07/members",
    {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAIL_CHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: res.email,
        status: "subscribed",
      }),
    }
  );

  const data = await _response.json();

  return NextResponse.json(
    {
      message: "User subscribed successfully",
    },
    {
      status: 200,
    }
  );
}
