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
    const card = {
        textAlign: "center",
        border: "3px solid lightgray",
        borderRadius: "12px",
        width: "80%",
        margin: "30px auto"
    }

    const cardTop = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5px"
    }

    const cardBody = {
        textAlign: "left",
        margin: "10px"
    }

    const cardImage = {
        width: "33%"
    }

    const button = {
        margin: "10px"
    }

    return <div style={card}>
                <div style={cardTop}>
                    <h1>{post?.mealname}</h1>
                    <img style={cardImage}  src={post?.image} alt={post?.mealname} />
                </div>
                <div style={cardBody}>
                    
                    <h3>Restaurant: {post?.restname}</h3>
                    <h3>Restaurant Address: {post?.restaddress}</h3>
                    <h3>Summary: {post?.summary}</h3>
                    <h3>Rating: {post?.rating}</h3>
                </div>
                <button style={button} onClick={(event) => edit(post)}>Edit</button>
                <button style={button} onClick={(event) => deleteBlog(post)}>Delete</button>
                <Link to="/">
                    <button style={button}>Go Back</button>
                </Link>
            </div>
}

export default SinglePost;