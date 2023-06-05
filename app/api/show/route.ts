import { db } from '@base/lib/api/config';
import { API } from '@base/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') ?? '1';

    let url = '';

    switch (true) {
        case Boolean(searchParams.get('type')):
            url = `trending/${searchParams.get('media_type')}/${searchParams.get('time_window')}`;
            break;
        case Boolean(searchParams.get('list_type')):
            url = `${searchParams.get('media_type')}/${searchParams.get(
                'show_id',
            )}/${searchParams.get('list_type')}`;
            break;
        case Boolean(searchParams.get('ratings_type')):
            url = `${searchParams.get('media_type')}/${searchParams.get('ratings_type')}`;
            break;
        default:
            throw new Error('Invalid request');
    }

    const data = await db<API.Page<API.Show>>(url, `&page=${page}`);

    if(!searchParams.get('type')){
        data.results.forEach(f => f.media_type = searchParams.get('media_type') ?? '');
    }

    return NextResponse.json(data);
}
