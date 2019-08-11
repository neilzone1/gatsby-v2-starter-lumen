import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs
    
    const links = {
      linkedin: author.linkedin,
      twitter: author.twitter,
      email: author.email,
    }

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          All Articles
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="post-single__date">
              <em>
                Published {moment(post.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              <em>{subtitle}</em>
            </p>
              <div className="links">
                <ul className="links__list">
                  <li className="links__list-item">
                    <a
                      href={`https://www.linkedin.com/in/${links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li className="links__list-item">
                    <a
                      href={`https://www.twitter.com/${links.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="links__list-item">
                    <a href={`mailto:${links.email}`}>
                      <i className="icon-mail" />
                    </a>
                  </li>
                </ul>
              </div>
              
            {commentsBlock}
          </div>
        </div>
        
        {homeBlock}
      </div>
    )
  }
}

export default PostTemplateDetails
