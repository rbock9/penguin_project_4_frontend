import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialBlog, handleSubmit, buttonLabel}) => {

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
        <form onSubmit={handleSubmisson}>
          <input
            type="text"
            onChange={handleChange}
            value={formData.mealname}
            name="mealname"
            placeholder="mealname"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.image}
            name="image"
            placeholder="image url"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.rating}
            name="rating"
            placeholder="your rating"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.restname}
            name="restname"
            placeholder="restaurant name"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.restaddress}
            name="restaddress"
            placeholder="restaurant address"
          />
          <input
            type="text"
            onChange={handleChange}
            value={formData.summary}
            name="summary"
            placeholder="a summary of your thoughts about the meal"
          />
          <input type="submit" value={buttonLabel} />
        </form>
      );
  };
  
  export default Form;