import React from "react"
import {Link, useParams} from "react-router-dom"

const SinglePost = ({posts, edit, deleteBlog}) => {
    // get the params from the url
    const params = useParams()
    //get the id from url param
    const id = parseInt(params.id) 
    // find the particular post the user wants to see based on the param
    const post = posts.find((p) => p.id === id)
    // console.log(post)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={div}>
        <h1>{post?.mealname}</h1>
        <h2>{post?.image}</h2>
        <h2>{post?.rating}</h2>
        <h2>{post?.restname}</h2>
        <h2>{post?.restaddress}</h2>
        <h2>{post?.summary}</h2>
        <button onClick={(event) => edit(post)}>Edit</button>
        <button onClick={(event) => deleteBlog(post)}>Delete</button>
        <Link to="/">
            <button>Go Back</button>
        </Link>
    </div>
}

export default SinglePost;