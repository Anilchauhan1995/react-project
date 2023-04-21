import Card from "./mission_cards/Card";

const OurMission = () => {
    return (
        <>
            <section className="our_mission_section">
                <div className="container">
                    <div className="mission_header text-center mb-5">
                        <div className="mission_heading">
                            <h3 className="fw-bold"><span className="theme_border_bottom">Dedicated</span>
                                <br />to our mission we are</h3>
                        </div>
                        <div className="mission_content">
                            <p className="theme_text_color">Our services include Company Formation & Renewals,
                                Trust & Fiduciary, Tax Residency Setup With Family, Bank
                                Accounts, Remote Management, Stock Trading
                                Platforms, Ownership Solutions.</p>
                        </div>
                    </div>
                   
                    <Card/>
                    
                </div>
            </section>

        </>
    );
};

export default OurMission;