import React, {useState} from 'react';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    return (
        <form>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content</label>
                <input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></input>
            </div>
            <button type="submit">Create Post</button>
        </form>
    )
};

export default PostForm;