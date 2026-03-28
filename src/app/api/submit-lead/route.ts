import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget?: string;
  timeline?: string;
  description: string;
}

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/wedzyfdcsfqc0";

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.company || !data.service || !data.description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Send to SheetDB (Google Sheets)
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Timestamp: timestamp,
          Name: data.name,
          Email: data.email,
          Phone: data.phone,
          Company: data.company,
          Service: data.service,
          Budget: data.budget || "",
          Timeline: data.timeline || "",
          Description: data.description,
        },
      }),
    });

    if (!response.ok) {
      console.error("SheetDB error:", await response.text());
      return NextResponse.json(
        { error: "Failed to submit lead" },
        { status: 500 }
      );
    }

    console.log("Lead submitted successfully:", { ...data, timestamp });

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
