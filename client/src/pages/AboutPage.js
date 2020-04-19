import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                My start as an SDR at HotSchedules led me to do sales for a digital marketing agency, where I decided to make the transition from sales to SEO account management. As an SEO, I have manipulated HTML & CSS and looked at JavaScript all day for years without actually understanding what the code is doing holistically; this realization is what organically led me to attend a full-stack software development bootcamp at the University of Texas. 
                <br/>
                <br/>
                As my time in bootcamp quickly proceeds, I am learning in immense waves just how interconnected marketing and development truly are and how these roles could both be made more efficient if they interacted in a more interdependent manner.
                My background in digital marketing, coupled with my rapidly evolving skillset as a developer makes me a valuable asset to any front-end or marketing team I join: I am conversion-focused and am able to implement a marketing strategy with development-friendly tactics in mind and vice versa, I can develop with marketing-friendly tactics in mind. I am currently on the job market and would love to speak to any recruiter or hiring management about how my skillset can be used as an asset.

            </Content>

        </div>
    );

}

export default AboutPage;