import { db } from '@base/lib/api/config';
import { API } from '@base/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const page = searchParams.get('page') ?? '1';

    const data = await db<API.Page<API.Show>>('search/multi', `&query=${query}&page=${page}`);
    return NextResponse.json(data);
}
