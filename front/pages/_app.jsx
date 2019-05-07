import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLaout';

const Sns = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Sns</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default Sns;
