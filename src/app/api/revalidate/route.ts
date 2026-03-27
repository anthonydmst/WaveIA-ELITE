import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Validate secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { path, type } = body;

    // Revalidate specific path or layout
    if (path) {
      revalidatePath(path, type || 'page');
      return NextResponse.json({ 
        revalidated: true, 
        path,
        now: Date.now() 
      });
    }

    // Revalidate all main routes
    const paths = [
      '/',
      '/creation-site-internet',
      '/referencement-seo',
      '/agence-communication',
      '/solutions',
      '/realisations',
      '/tarifs',
      '/a-propos',
      '/contact',
    ];

    for (const p of paths) {
      revalidatePath(p, 'page');
    }

    return NextResponse.json({ 
      revalidated: true, 
      paths,
      now: Date.now() 
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Error revalidating', message: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
