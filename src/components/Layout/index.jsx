import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="NeilLewin.com - thoughts, comments and notes from me, Neil Lewin, the owner of Semantic" />
        {children}
      </div>
    )
  }
}

export default Layout
