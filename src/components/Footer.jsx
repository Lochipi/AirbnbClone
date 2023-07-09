import { StyledFooter } from "./styles/Footer.styled";
import { IconContext } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date;
    let day = weekday[date.getDay()];
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return (
        <StyledFooter>
            <div className="footer">
                <div className="Flex--footer section_padding">
                    <div className="footer_links">
                        <div className="footer_links_div">
                            <h4>Company</h4>
                            <a href="#">
                                <p>Home Page</p>
                            </a>
                            <a href="#">
                                <p>About Us</p>
                            </a>
                            <a href="#">
                                <p>Services</p>
                            </a>
                            <a href="#">
                                <p>Contact Us</p>
                            </a>
                            <a href="#">
                                <p>Career</p>
                            </a>
                        </div>

                        <div className="footer_links_div">
                            <h4>Resources</h4>
                            <a href="#">
                                <p>Testimonials</p>
                            </a>
                            <a href="#">
                                <p>FAQ's</p>
                            </a>
                            <a href="#">
                                <p>Services</p>
                            </a>
                            <a href="#">
                                <p>Contact Us</p>
                            </a>
                        </div>

                        <div className="footer_links_div">
                            <h4>Partners</h4>
                            <a href="#">
                                <p>Murang'a University</p>
                            </a>
                            <a href="#">
                                <p>Microsoft</p>
                            </a>
                            <a href="#">
                                <p>Turkana County</p>
                            </a>
                        </div>

                        <div className="footer_links_div">
                            <h4>We are social</h4>
                            <div className="social-icons">
                                <IconContext.Provider value={{ color: 'green', size: '1.8em'}}>
                                    <div><FaInstagram /> </div>
                                    <div><FaTwitter /></div>
                                    <div><FaLinkedinIn /></div>
                                    <div><FaWhatsapp /></div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-below">
                    <div className="copy_right">
                        <p>&copy; {new Date().getFullYear()} All rights reserved <a style={{color: 'blue'}} href="#">Lochipi</a></p>
                    </div>
                    
                    <div className="footer_below_links">
                        <a href="#"><div><p>Terms & conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Cookie and declaration</p></div></a>
                     </div>
                </div>
                <p>Have a great {day} {timeOfDay}</p>
            </div>
        </StyledFooter>
    )
}

export default Footer


