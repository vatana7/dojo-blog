import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Vatana');
    const [isPending, setisPending] = useState(false);

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const blog = { title, body, author };

        setisPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log(blog)
            setisPending(false)
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Create New Blogs</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                    type="text"
                    placeholder="Enter here"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)
                    }
                />

                <label>Blog body: </label>
                <textarea
                    type="text"
                    placeholder="Start typing..."
                    required 
                    value={ body }
                    onChange={ (e) => setBody(e.target.value)}
                />
                <label>Blog author: </label>    
                <select 
                    value = { author }
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Vatana">Vatana</option>
                    <option value="Zack">Zack</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button disabled >Adding blog...</button>}
            </form>
            
        </div>
    )
}

export default Create;