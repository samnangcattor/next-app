import Link from 'next/link';
import ProductCart from './components/ProductCard/ProductCart';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Image from 'next/image';
import coffee from '@/public/images/caffe.jpg';
import { Metadata } from 'next';
import { prisma } from '@/prisma/client';

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main>
      {/* <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart /> */}
      {/* <Image src={coffee} alt="coffee" /> */}
      <Image
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"
        alt="coffee"
        width={300}
        height={170}
        quality={5}
      />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: 'Home Again',
// };

export async function generateMetadata(): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      email: 'kcattor@gmail.com',
    },
  });

  return {
    title: user?.email,
    description: 'user.description',
  };
}
