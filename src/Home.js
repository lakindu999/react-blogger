import React from 'react'
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState ([
        {title: 'My new site', body:'lorem ipsum...', author:'Shashini', id:1},
        {title: 'Welcome Party !', body:'lorem ipsum...', author:'Ramalka', id:2},
        {title: 'Halo Halo', body:'lorem ipsum...', author:'Shanuka', id:3},
    ]);

  return (
<div className="home">
    <BlogList blogs={blogs} title="All Blogs"/>
</div>
  )
}

export default Home;