import React, {useState, useEffect} from "react";
import axios from "axios";
import s from "./Posts.module.css";

const Posts = (props) => {

    const [ posts, setPosts ] = useState([]);
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");

    const onTitleChange = (e) => {
        setTitle (e.target.value)
    }

    const onBodyChange = (e) => {
        setBody (e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const token =

        document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token

        const post = {
            title: title,
            body: body,
        }

        axios
            .post('/api/posts', post)
            .then(response => {
                console.log(response);
                console.log(response.data);
                setPosts({ posts: response.data.posts })
            })
    }

    useEffect( () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts({ posts: response.data.posts });
            })
    }, [] )

    return (
        <div>
            <div>
                {Object.values (posts).map(post => (
                    <div key={post}>{post}</div>
                ))}
            </div>
            <div>
                <form onSubmit={onFormSubmit} >
                    <div className={s.title} >
                        Create New Post
                    </div>
                    <div>
                        <input onChange={onTitleChange} type = "text" name = "title" value={title} />
                    </div>
                    <div>
                        <input onChange={onBodyChange} type = "text" name = "body" value={body} />
                    </div>
                    <div>
                        <button>Create Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Posts;
