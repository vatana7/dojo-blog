import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails(){

    const { id } = useParams();
    const { data: blog, isError, isPending } = useFetch(' http://localhost:8000/blogs/' + id)
    const history = useHistory();

    function handleDelete() {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        })
    }
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
                <br/>
                <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default BlogDetails;