import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  // if (!body.name)
  //   return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.message },
      { status: 400 }
    );

  return NextResponse.json(
    {
      id: 1,
      name: 'Me',
    },
    { status: 200 }
  );
}
