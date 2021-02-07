import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    // const blogPost = [
    //     {
    //         title: 'Blog post #1',
    //     },
    //     {
    //         title: 'Blog post #2',
    //     },
    //     {
    //         title: 'Blog post #3',
    //     },
    //     {
    //         title: 'Blog post #4',
    //     },
    // ];

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }


    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;
