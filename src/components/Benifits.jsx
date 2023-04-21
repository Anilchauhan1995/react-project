import Cards from "./BenifitCards/Cards"
const Benifits = () => {
    return(
        <section className="benifits my-5">
           <div className="container">
            <div className="row justify-content-center column-gap-6">
                <div className="col-lg-5 h-fit-content">
                    <div className="benifits_card_wrapper">
                        <div className="benifits_card_content">
                            <p>Learn the ways in which you can benefit 
                                from a UAE/Offshore Company. Then get 
                                started on fulfilling your UAE dream.</p>
                                <a href="/" className="t">Claim a Free Quote</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center">
                    <Cards/>
                </div>
            </div>
            <div className="row justify-content-center column-gap-6">
            <div className="col-lg-5 d-flex justify-content-center">
                    <Cards/>
                </div>
                <div className="col-lg-5">
                    <div className="benifits_card_wrapper">
                        <div className="benifits_card_content">
                            <p>Learn the ways in which you can benefit 
                                from a UAE/Offshore Company. Then get 
                                started on fulfilling your UAE dream.</p>
                                <a href="/" className="t">Claim a Free Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </section>
    );
}

export default Benifits;