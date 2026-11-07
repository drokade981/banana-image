import { NextResponse } from "next/server";

// POST /api/edit-mage
export async function POST(request: Request) {
    const {imageBase64, prompt} = await request.json();

    console.log('image', imageBase64);
    console.log('prompt', prompt);
    return NextResponse.json({ imageBase64, prompt });
}