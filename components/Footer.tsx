import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="container">
      <nav>
        <ul>
          <li>&copy; 2023 Love Message</li>
        </ul>
        <ul>
          <li>
            <a href="mailto:oyenirantunji2339@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
