import RightIcon from "../../assets/images/Group35.png";
const PriceCard = ()=> {
    return (
        <div className="pricing_card_wrapper">
            <div className="price_card_title">
                <p>AJMAN OFFSHORE</p>
            </div>
            <div className="price_title">
                <p><span>$2,997</span>One Time Payment</p>
            </div>
            <div className="price_sub_title">
                <p>Ajman Offshore New Company 
                   formation includes</p>
            </div>
            <div className="price_card_list">
                <ul>
                    <li><img src={RightIcon} alt="RightIcon"/> Attestation Charges</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Registered Agent</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Registered Office</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Varal Administrative</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Preparing Statutory File</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Liasing with Registration Authorities</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Due Diligence Appraisal</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Keeping The Register</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Seal Charges</li>
                    <li><img src={RightIcon} alt="RightIcon"/> Certificate of Good Standing</li>
                </ul>
            </div>
            <div className="price_card_button">
                <a href="/" className="btn btn_outline_btn d-block">Continue</a>
            </div>
        </div>
    );
};

export default PriceCard;