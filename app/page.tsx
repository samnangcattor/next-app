'use client';

import { useState } from 'react';
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      {/* <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart /> */}
      {/* <Image src={coffee} alt="coffee" /> */}
      {/* <Image
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"
        alt="coffee"
        width={300}
        height={170}
        quality={5}
      /> */}
      <button
        onClick={async () => {
          // lazy load
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];

          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: 'Home Again',
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const user = await prisma.user.findUnique({
//     where: {
//       email: 'kcattor@gmail.com',
//     },
//   });

//   return {
//     title: user?.email,
//     description: 'user.description',
//   };
// }
