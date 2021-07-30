import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState(null);

    const [isPending, setisPending] = useState(true);

    const [isError, setisError] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                        throw Error('Error 404 Message');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setisPending(false);
                    setisError(null)
                })
                .catch(err =>{
                    setisError(err.message);
                    setisPending(false);
                })
        }, 1000);
    }, [])


    return(
        <div className="home">
            {isError && <div>{isError}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs = {blogs}></BlogList>}
        </div>
    )
}

export default Home;