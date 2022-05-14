import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { APP_NAME } from '../../constants';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const titleToShow = title ? `${title} | ${APP_NAME}` : APP_NAME;

  return (
    <>
      <Head>
        <title>{titleToShow}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
