import {useState} from "react";
import {useNavigate, Link} from "react-router-dom"

const Form = ({initialBlog, handleSubmit, buttonLabel}) => {

    const form ={
        margin: "10px auto",
        width: "80%",
    }

    const navigate = useNavigate()

    ////////////////
    // The Form Data State
    ////////////////
    // Initiallize the form with the initialBlog state
    const [formData, setFormData] = useState(initialBlog)

    //////////////////////////
    // Functions
    //////////////////////////

    // Standard React Form HandleChange Function 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // Function to run when form is submitted
    const handleSubmisson = (event) => {
        // prevent the form page refresh
        event.preventDefault();
        // pass formData to handleSubmit prop function
        handleSubmit(formData);
        // push user back to main page
        navigate("/");
    };

    // Our form, with inputs for fields and a submit button
    return (
        <form style={form} onSubmit={handleSubmisson}>
        <fieldset>
        <label for="mealnameField">Meal Name:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.mealname}
            name="mealname"
            placeholder="name of the meal"
          />
        <label for="imageield">Image URL:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.image}
            name="image"
            placeholder="image url"
          />
        <label for="ratingField">Rating:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.rating}
            name="rating"
            placeholder="your rating"
          />
        <label for="restnameField">Restaurant Name:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.restname}
            name="restname"
            placeholder="restaurant name"
          />
        <label for="restaddressField">Restaurant Address:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.restaddress}
            name="restaddress"
            placeholder="restaurant address"
          />
        <label for="summaryField">Summary:</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.summary}
            name="summary"
            placeholder="a summary of your thoughts about the meal"
          />
          <input type="submit" value={buttonLabel} />
          </fieldset>
          <Link to="/">
            <button >Go Back</button>
          </Link>
        </form>
      );
  };
  
  export default Form;