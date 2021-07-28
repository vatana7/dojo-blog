import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {

    const [name, setName] = useState('Mario')

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ])

    useEffect(() => {
        console.log('useEffect ran');
        console.log(blogs)
    }, [name]);

    function handleDelete(id) {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog)
    }
    return(
        <div className="home">
            <BlogList blogs = {blogs} title = {"All blogs"} handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home;