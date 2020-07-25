import React from 'react'
import ContactInfo from '../components/ContactInfo'

const Sidebar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <aside class="sidebar column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile menu">
        <p class="menu-label has-text-black">Sarah Stand Kandlar</p>
        <ul class="menu-list">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">Acerca de mi</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contacto</a>
          </li>
        </ul>
        <ContactInfo />
      </aside>
    )
  }
}

export default Sidebar
