import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  title,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Helmet>
        <title>Sarah Stand Kandlar | Home</title>
    </Helmet>
    <section className="hero is-fullheight">
      <div 
        className="full-width-image-container"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="full-width-image">
          <div className="content has-text-centered">
            <h1 className="title has-text-white">
              { heading }
            </h1>
            <h4 className="subtitle has-text-white">
              { subheading }
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section className="hero section">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title has-text-center has-text-centered">{ title }</h1>            
            <p>{ description }</p>
            </div>
          </div>
      </div>
    </section>

    <section className="hero section" id="contact">
      <div clasName="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title has-text-center has-text-centered">Contacto</h1>            

            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Mensaje</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div class="control">
                <button class="button is-link">Enviar</button>
              </div>
            </form>    
          </div>
        </div>
      </div>
    </section>  
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
