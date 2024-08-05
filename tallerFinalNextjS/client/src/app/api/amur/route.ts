import { NextResponse } from "next/server";

type Salidita = {
    ms: string;
    body: string;
}

export const GET = async () => {
    try {
        const saliditas: Salidita = { ms: "success", body: "alguito" }
        return new NextResponse(JSON.stringify(saliditas), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error in fetching users" + error.message, {
            status: 500,
        });
    }
};