import React from 'react';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Post from '../components/post';
import Footer from '../components/footer';

export default () => (
  <div className="bg-body post pb-5">
    <Header />
    <NavTop title="Post Job" />
    <Post />
    <Footer />
  </div>
);
