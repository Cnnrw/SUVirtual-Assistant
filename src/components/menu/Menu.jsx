import Link           from 'next/link'
import { bool }       from 'prop-types'
import React          from 'react'
import { StyledMenu } from './Menu.styled'
import ThemeToggle    from '../themeToggle'

const Menu = ({
  links,
  open,
  auth,
  login,
  logout,
  toggleTheme
}) => {
  return (
    <StyledMenu open={open}>
      <span>Theme</span>
      <ThemeToggle toggleTheme={toggleTheme} />
      {
        links.map((link, index) =>
          <Link key={index}
                href={link.to}
                passHref>
            <a aria-label={link.name}>
              {link.name}
            </a>
          </Link>)
      }
      <a href="https://docs.su-assistant.chat"
         aria-label="Docs">
        Docs
      </a>
      {
        auth ? <a onClick={() => logout()}>Logout</a>
             : <a onClick={() => login()}>Login</a>
      }
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
