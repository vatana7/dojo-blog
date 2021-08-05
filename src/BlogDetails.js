import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails(){

    const { id } = useParams();
    const { data: blog, isError, isPending } = useFetch(' http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-detail">
            { isPending && <div>Loading...</div> }
            { isError && <div>{ isError }</div>}
            { blog && (
                <div>
                <h2>{ blog.title }</h2>
                <br/>
                <p>{ blog.body }</p>
                <br/>
                <p>Written by - { blog.author }</p>
                </div>
            )}
        </div>
    )
}

export default BlogDetails;