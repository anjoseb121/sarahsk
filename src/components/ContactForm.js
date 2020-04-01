import React from 'react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => {
      alert("Success!")
      this.setState({
        email: '',
        message: '',
      })
    })
    .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input className="input" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Mensaje</label>
        <div className="control">
          <textarea className="textarea" name="message" placeholder="Mensaje..." value={message} onChange={this.handleChange} />
        </div>
      </div>

      <div className="control">
        <button type="submit" className="button is-link">Enviar</button>
      </div>
    </form>  
    )
  }
}

export default ContactForm
