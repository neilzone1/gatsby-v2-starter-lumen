import React from 'react'
import './style.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__inner">
          <div>
          <div class="links"><ul class="links__list"><li class="links__list-item"><a href="https://www.linkedin.com/in/neillewin" target="_blank" rel="noopener noreferrer"><i class="icon-linkedin"></i></a></li><li class="links__list-item"><a href="https://www.twitter.com/neillewin" target="_blank" rel="noopener noreferrer"><i class="icon-twitter"></i></a></li><li class="links__list-item"><a href="mailto:neil@semantic.co.uk"><i class="icon-mail"></i></a></li></ul></div>
            <p className="footer__copyright">©2019 All rights reserved.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
