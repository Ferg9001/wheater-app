import {mockedGeolocation} from "@/mocked-data/geolocation";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    if (process.env.ENVIROMENT == 'dev') {
        return Response.json({ data: mockedGeolocation });
    }
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.OPEN_WEATHERMAP_API_KEY}`);
    const data = await res.json();
    return Response.json({ data })
}