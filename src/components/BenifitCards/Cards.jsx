import CardImg from "../../assets/images/Group.png";
import Arrow from "../../assets/images/Vector.png";
const Cards = ()=>{
    return(
        <div className="benifits_cards_wrapper">
            <div className="benifits_cards_image d-flex justify-content-center">
                <img src={CardImg} alt="CardImg" />
            </div>
            <div className="benifits_cards_title">
                <h5>Advice & Guidance</h5>
            </div>
            <div className="benifits_cards_description">
                <p className="theme_text_color">All activities in the UAE are licensed. 
                    Whether manufacturing, finance, 
                    trading, marketing, consultancy or 
                    restaurants. In some countries only 
                    manufacturing is licensed. In others 
                    there is a threshold below which 
                    business are encouraged. Get our 
                    insightfull guidance today.</p>
            </div>
            <div className="benifits_cards_more">
                <a href="/">Learn more  <img src={Arrow} alt="Arrow" /></a>
            </div>
        </div>
    );
};
export default Cards;