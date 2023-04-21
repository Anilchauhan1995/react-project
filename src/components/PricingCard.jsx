import PriceCard from "./PricingCards/PriceCard";
const Pricing = ()=> {
    return (
        <section className="pricing_section">
            <div className="container">
                <div className="pricing_header text-center my-100">
                    <div className="pricing_heading">
                        <h3 className="fw-bold">Most <span className="theme_border_bottom">popular affordable pricing </span> per<br/> 
                            jurisdictions are brought to you to <br/>
                            kick off your adventure.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <PriceCard/>
                    </div>
                    <div className="col-lg-4 active_price">
                        <PriceCard/>
                    </div>
                    <div className="col-lg-4">
                        <PriceCard/>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Pricing;