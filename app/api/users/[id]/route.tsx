import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  // if (!body.name)
  //   return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.message },
      { status: 404 }
    );

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const existEmail = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existEmail)
    return NextResponse.json(
      { error: 'Email already exist, Can not updated' },
      { status: 400 }
    );

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 400 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}
