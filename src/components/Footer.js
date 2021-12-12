function Footer(props) {

    const footer = {
        textAlign: "center",

      };

    return <footer style={footer}>
        <h5>Copyright Rob Bock - <span>{new Date().getFullYear()}</span> </h5>
        </footer>;
}
  
export default Footer;