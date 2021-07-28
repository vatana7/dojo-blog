function BlogList(props) {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <h4>{ blog.body }</h4>
                <p>{ blog.author }</p>
            </div>
        ))}
        </div>
        
    )
}

export default BlogList;