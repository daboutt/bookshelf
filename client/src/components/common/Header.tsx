import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';

const Header = () => {
  return (
    <div className='w-full flex pt-10 justify-between gap-20 pb-5 border-b-2 border-b-primary text-secondary'>
      <div className='grid w-full max-w-sm gap-6 ml-10'>
        <InputGroup className='border-primary text-primary'>
          <InputGroupInput className='' placeholder='Search books...' />
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
