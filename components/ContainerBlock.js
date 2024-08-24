import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DM_Sans } from 'next/font/google';
const dm_sans = DM_Sans({
  subsets: ['latin'],
});

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Miguel Luna',
    descrition: '',
    image: '/avatar2.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="icon" href="favicon.png" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Miguel Luna" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className={` ${dm_sans.className} w-full`} lang="en">
        <div>{children}</div>
      </main>
    </div>
  );
}
