import { HomeIcon, SearchIcon } from 'lucide-react';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <NavLink to='/' end>
          <Button className='cursor-pointer'>
            Back to Home <HomeIcon />
          </Button>
        </NavLink>
        <InputGroup className='sm:w-3/4'>
          <InputGroupInput placeholder='Try searching for pages...' />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href='#'>Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
