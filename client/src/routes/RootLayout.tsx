import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className='flex-1 flex items-center justify-center'>
        <div className='container m-0'>
          <Outlet />
        </div>
      </main>
    </>
  );
}
