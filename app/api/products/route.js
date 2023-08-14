import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products?limit=5";
export async function GET() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
}
