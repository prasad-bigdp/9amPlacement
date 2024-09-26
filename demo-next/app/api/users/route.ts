import { NextRequest, NextResponse } from "next/server"

export async function GET(request:NextRequest) {
	const users = [
		{ name: "prasad", age: 55 },
		{ name: "john", age: 66 },
	]
	return NextResponse.json(users)
}
