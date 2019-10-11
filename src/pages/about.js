import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>This is the about page</p>
            <p><Link to="/contact">Want to reach out to me? Reach out.</Link></p>
        </Layout>
       
    )
}

export default AboutPage