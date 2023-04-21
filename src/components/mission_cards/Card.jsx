import CardIcon from "../../assets/images/dungeon.png";
// import CardIcon from "../../assets/images/Vector-2.png";
// import CardIcon from "../../assets/images/Vector-1.png";

let arr = [
    {
        "title" : "UAE Free Zone Company",
        "Description" : `Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.`,
        "button" : "Get Started"

    },
    {
        "title" : "UAE Free Zone Company2",
        "Description" : `Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.`,
        "button" : "Get Started"

    },
    {
        "title" : "UAE Free Zone Company3",
        "Description" : `Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.`,
        "button" : "Get Started"

    }
];

const Card = () =>{
    return(
        <div className="row">
            {
                arr.map((value)=>
                    <div className="col-lg-4">
                        <div className="card_wrapper">
                            <div className="card_icon  mb-4">
                                <img src={CardIcon} alt="CardIcon" />
                            </div>
                            <div className="card_title">
                                <h5 className="fw-500">{value.title}</h5>
                            </div>
                            <div className="card_description">
                                <p className="theme_text_color">{value.Description}</p>
                            </div>
                            <div className="card_btn">
                                <a>{value.button}</a>
                            </div>                   
                        </div>
                    </div>
                )
            }           
        </div>
    );
}

export default Card;