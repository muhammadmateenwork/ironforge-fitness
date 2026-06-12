import { NextRequest, NextResponse } from "next/server";
import { connectDB, Contact } from "@/backend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Determine type based on message content
    const type = message.startsWith("FREE TRIAL REQUEST") ? "free_trial" : "inquiry";

    // Save to MongoDB
    await Contact.create({
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
      type,
    });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
