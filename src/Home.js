import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blogs, isPending, isError } = useFetch('http://localhost:8000/blogs')

    return(
        <div className="home">
            {isError && <div>{isError}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs = {blogs}></BlogList>}
            
        </div>
    )
}

export default Home;