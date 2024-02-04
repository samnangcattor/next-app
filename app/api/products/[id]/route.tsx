import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Product not found' }, { status: 400 });

  return NextResponse.json(
    {
      id: params.id,
      name: 'Orange',
      price: 3,
    },
    { status: 200 }
  );
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error, { status: 404 });

  if (params.id > 10)
    return NextResponse.json(
      { error: 'Production not found' },
      { status: 400 }
    );

  return NextResponse.json({
    id: params.id,
    name: 'Cake',
    price: 300,
  });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({});
}
