import { Link } from "react-router-dom";

import './About.css';

export const About = () => {
    return (
        <div className="about-page-container">
            <div className="about-container">
                <div className="left-side">
                    <img data-testid="about-img" src="/images/about-page-image.png" alt="about-img" />
                </div>
                <div className="right-side">
                    <h2 data-testid="about-h2">This app is made for project defence of SoftUni's JS Web module - ReactJS course</h2>
                    <h4 data-testid="about-h4">Here you can upload and browse through variety of movies.</h4>
                    <Link to={'/catalog'}><button className="about-btn">ENJOY !</button></Link>
                </div>
            </div>
        </div>
    );
};