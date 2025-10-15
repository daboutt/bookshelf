import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HexagonIcon } from 'lucide-react';

const Profile = () => {
  return (
    <div className='ml-auto mr-10'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='cursor-pointer'>
            <HexagonIcon />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='cursor-pointer'>
            Saved list
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>Report</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Profile;
