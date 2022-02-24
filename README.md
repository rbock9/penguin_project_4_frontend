# Project 4 - What Did I Eat?
#### Frontend Readme By Rob Bock

- This application will be used as a personal blog for food experiences, with pictures and data about meals users ate

## User Stories

- Users can view a listing of all blog posts through an index page.
- Users can create, update, and delete posts via a form.
- Users can click the blog title in the header to go back to the home page.

## List of Components

- Header
- Main
- Footer

## List of Pages

- AllPosts
- SinglePost
- Form

## Sketch of Intended Component Tree
```
-> App
  -> Header
  -> Main 
    -> Routes
      -> Route |path: "/"|
        -> Index 
      -> Route 
        -> Show
  -> Footer
```
## Frontend React Router Route Table

    <main>
      <Header />
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
    </main>
