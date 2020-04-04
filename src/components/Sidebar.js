import React from 'react'
import { Link } from 'gatsby'

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
            <a>Home</a>
          </li>
          <li>
            <a>Acerca de mi</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div>
          <p>Sarah Stand Kandlar</p>
          <p>Colombia</p>
          <p>+57 305 331 2091</p>
          <p>info@sarahstand.me</p>
        </div>
      </aside>
    )
  }
}

export default Sidebar
