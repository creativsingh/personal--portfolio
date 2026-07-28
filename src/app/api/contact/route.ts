import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Email and message are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey || apiKey === "your_web3forms_key_here") {
      console.warn("WEB3FORMS_ACCESS_KEY is missing in .env.local");
      return NextResponse.json(
        {
          success: false,
          message: "Please add your free WEB3FORMS_ACCESS_KEY to .env.local to receive email notifications.",
        },
        { status: 400 }
      );
    }

    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        name: name || "Portfolio Visitor",
        email: email,
        message: message,
        subject: `New Portfolio Message from ${name || email}`,
        from_name: name || "CreativSingh Portfolio",
      }),
    });

    const data = await web3Response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send message" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error sending message" },
      { status: 500 }
    );
  }
}
