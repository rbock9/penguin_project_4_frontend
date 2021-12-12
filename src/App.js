// Import Our Components
import Header from "./components/Header";
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import Footer from "./components/Footer"

// Import Hooks from React
import {useState, useEffect} from "react"

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import {Route, Routes, Link, useNavigate} from "react-router-dom"

function App(props) {

  /////////////////////////
  // Style Objects
  /////////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px"
  }

  const button = {
    // backgroundColor: "navy",
    display: "block",
    margin: "auto",
    
  };

  ///////////////
  // State & Other Variables
  ///////////////
  // Backend URL
  const url = "https://rbock9-penguin-project4.herokuapp.com/blogs/"

  // useNavigate
  const navigate = useNavigate()

  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  // an object that represents a null blog
  const nullBlog = {
    mealname: "",
    image: "",
    rating: "",
    restname: "",
    restaddress: "",
    summary: "",
  };

  // const state to hold blog to edit
  const [targetBlog, setTargetBlog] = useState(nullBlog);

  //////////////
  // Functions
  //////////////
  // Function to get list of blogs from API
  const getBlogs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  // Function to add blog from form data
  const addBlogs = async (newBlog) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    // get updated list of blogs
    getBlogs();
  };

  // Function to select blog to edit
  const getTargetBlog = (blog) => {
    setTargetBlog(blog);
    navigate("/edit");
  };

  // Function to edit blog on form submission
  const updateBlog = async (blog) => {
    await fetch(url + blog.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    // get updated list of blogs
    getBlogs();
  };

  const deleteBlog = async (blog) => {
    await fetch(url + blog.id, {
      method: "delete"
    })

    getBlogs()
    navigate("/");
  }


  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getBlogs()
  }, [])


  //////////////////////////
  // Returned JSX
  //////////////////////////
  return (
    <div className="App">
      <Header />
      {/* <h1 style={h1}>What Did I Eat?</h1> */}
      <Link to="/new"><button style={button}>Create New Post</button></Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts}/>}/>
        <Route path="/post/:id" element={
          <SinglePost 
            posts={posts} 
            edit={getTargetBlog}
            deleteBlog={deleteBlog}
          />
        }/>
        <Route path="/new" element={
          <Form
            initialBlog={nullBlog}
            handleSubmit={addBlogs}
            buttonLabel="Create Blog Post"
          />
        }/>
        <Route path="/edit" element={
          <Form
            initialBlog={targetBlog}
            handleSubmit={updateBlog}
            buttonLabel="Update This Post"
          /> 
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
