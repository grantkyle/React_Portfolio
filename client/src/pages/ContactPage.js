import React from "react";
import axios from "axios"; // For making client request.



class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/S9dQfV4QkxmB",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
      })
      .catch(function (error) {

      });
    e.preventDefault();
  }
  handleFields = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div style={divWidth} className="my-container">
        <h3 style={subHeaderStyle}>Contact</h3>
        <form onSubmit={this.handleForm}>

          <input style={formStyle} placeholder="Full Name" htmlFor="name"
            type="text" id="name" name="name" onChange={this.handleFields} />
          <input style={formStyle} placeholder="Email" htmlFor="email"
            type="email" id="email" name="email" onChange={this.handleFields} />
          <textarea style={formStyle} placeholder="Your Message..." htmlFor="message"
            ame="message" id="message" onChange={this.handleFields}></textarea>
          <button id='button' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactPage;

// ADDITIONAL STYLING
const subHeaderStyle = {
  color: '#333',
  textShadow: '3px  3px 0 #f2f2f2 -1px -1px 0 #f2f2f2 1px -1px 0 #f2f2f2 -1px  1px 0 #f2f2f2 1px  1px 0 #f2f2f2',
  clear: 'both',
  height: '-150px',
  fontWeight: 'bold',
  textAlign: 'Center',
  padding: '2%'
}
const divWidth = {
  width: '50%'
}
const formStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  marginTop: '6px 16px',
  marginBottom: '16px'
}