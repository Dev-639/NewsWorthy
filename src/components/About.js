import React, { Component } from 'react' 

export default class About extends Component {
    render() {
        return (
            <div className='image'style={{marginTop:"5rem",}}>
            <div className="container my-5 fs-3 d-flex flex-column justify-content-start" style={{ backgroundColor:"#d1dfff",}} >
                <h4 className="fw-medium text-center">
                    Welcome to your gateway to the world's latest happenings! Here, you'll find a comprehensive platform to stay informed about current events, tailored to your preferences.
                </h4>
                <div className=" my-3 fs-5 fw-medium">
                    <h3>Global Headlines at Your Fingertips:</h3>
                    <ul>
                        <li>Real-time Updates: Our dynamic feed displays breaking news headlines from across the globe, ensuring you're always up-to-date on the most pressing issues.</li>
                        <li>Customizable Location: Travel the world virtually! Select any country to see the most relevant news stories specific to that region.</li>
                        <li>Dive Deeper: Each headline is linked to the full news article, allowing you to delve deeper into stories that pique your interest.</li>
                    </ul>
                </div>
                <div className=" my-3 fs-5 fw-medium">
                    <h3>Curated Categories for Focused Exploration:</h3>
                    <ul>
                        <li>Business & Finance: Stay ahead of market trends, economic developments, and major corporate news.</li>
                        <li>Sports: Follow the latest scores, team updates, and sporting events from around the world.</li>
                        <li>Science & Technology: Catch groundbreaking discoveries, innovations, and scientific breakthroughs.</li>
                    </ul>
                </div>
                <h4>
                Our Commitment to Credibility:
                </h4>
                <h5>We understand the importance of reliable information. That's why we source our news from a network of reputable news outlets worldwide. You can be confident that the content you see is accurate and unbiased.</h5>
                <h4>Start Exploring Today!!</h4>
            </div>
            </div>
        )
    }
}
