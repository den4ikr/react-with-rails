import React, {useState, useEffect} from "react";
import axios from "axios";

const Posts = (props) => {

    const [ posts, setPosts ] = useState([]);

    useEffect( () => {
        axios
            .get('/api/posts')
            .then(response => {
                this.setState({ posts: response.data.posts });
            })
    }, [] )

    return (
        <div>

        </div>
    )
}

export default Posts;