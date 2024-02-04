import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-slate-200 p-2 mb-5 flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
