import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () =>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lakindu');
    const history = useHistory();

    const handleSUbmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            history.push('/');
        });

    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit ={handleSUbmit}>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value) }
                >
                 <option value="Lakindu">Lakindu</option>
                 <option value="Dulakshan">Dulakshan</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;