import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title: pageTitle }) => {
  const t = useTranslations();
  const appName = t('common.app.name');
  const titleToShow = pageTitle ? t('common.app.title', { name: appName, pageTitle }) : appName;

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
