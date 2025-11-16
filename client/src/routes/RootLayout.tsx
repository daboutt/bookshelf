import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';
import '../styles/global.css';
import AppSidebar from '@/components/common/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='flex flex-col min-h-screen h-screen w-screen'>
        <Header />
        <main className=' flex-1 flex items-center justify-center overflow-hidden'>
          <div className='container w-full max-w-7xl h-full overflow-y-auto scrollbar-hide'>
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
