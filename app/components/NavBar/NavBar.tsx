'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="bg-slate-200 p-2 mb-5 flex gap-5 font-komigo">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session.user!.name} <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin" className="ml-3">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
