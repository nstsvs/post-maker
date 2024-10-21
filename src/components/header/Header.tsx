import React, { ReactNode } from 'react';

function Header({children}: {children: ReactNode}) {
  return (
    <header className="text-2xl font-bold text-gray-800">
      {children}
    </header>
  )
}

export default Header;
