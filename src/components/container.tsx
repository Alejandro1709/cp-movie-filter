import { ReactNode } from 'react';

interface ContainerProps {
  isMain: boolean;
  children: ReactNode;
}

function Container({ isMain, children }: ContainerProps) {
  return isMain ? (
    <main className='container'>{children}</main>
  ) : (
    <div className='container'>{children}</div>
  );
}

export default Container;
