import Head from 'next/head';
import { FC } from 'react';

const CustomHead: FC = () => (
  <Head>
    <title>Todo App</title>
    <meta name="description" content="Todo App" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default CustomHead;
