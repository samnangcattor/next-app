import React, { ReactNode } from 'react';
import NavBar from '../components/NavBar/NavBar';

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  console.log(children);
  return (
    <>
      <div className="flex">
        <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
