import React from 'react'

const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Acme Widgets, INC. Job Hazard Analysis Database',
  }

export default Header