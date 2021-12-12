import { Link } from "react-router-dom";

function Header(props) {

    const header = {
        textAlign: "center",
        background: "lightgray",
       
    }

    const subtitle = {
        marginTop: "-20px"
    }

  return (
    <nav style={header}>
      <Link to="/">
        <div >
          <h1 >What Did I Eat?</h1>
          <h4 style={subtitle}>(A Food Blog)</h4>
          </div>
      </Link>
      
    </nav>
  );
}

export default Header;