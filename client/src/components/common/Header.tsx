import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';

const Header = () => {
  return (
    <div className='w-full flex pt-10 justify-between gap-20 pb-5 bg-primary text-secondary'>
      <div className='logo mr-auto'>This is logo</div>
      <div className='grid w-full max-w-sm gap-6'>
        <InputGroup className=''>
          <InputGroupInput placeholder='Search books...' />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
      {/* <Profile /> */}
    </div>
  );
};
export default Header;
