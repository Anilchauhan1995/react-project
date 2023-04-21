import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BannerImage from "../assets/images/ILLUSTRATION.png";
import PlayIcon from "../assets/images/play.png";
const Banner = () => {
    return(
        <section className="banner_section">
            <div className="container">
            <div className="search_wrapper d-flex justify-content-end mt-4">
                                <form className="search_bar d-inline-block">
                                    <div className="search_input d-flex position-relative">
                                        <span className="seach_icon position-absolute top-50 translate-middle-y ps-2"><SearchOutlinedIcon/></span><input className ="form-control border_outline" type="search" placeholder="Search a Term | Topic" aria-label="Search" />
                                    </div>
                                </form>
                            </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="banner_wrapper_text">
                            <div className="banner_text_wrapper">
                                <span className="theme_primary_color position-relative">Claim a Free Quote</span>
                                <h1><span className="theme_border_bottom">Get started</span> on fulfilling your Dubai or UAE dream.</h1>
                                <p className='theme_primary_color'>UAE & Offshore Company</p>
                                <div className="banner_content">
                                    <p className='theme_text_color'>We provide you with information about UAE or 
                                    Offshore Company Registration & help you 
                                    setup your company with a bank account and 
                                    visas.</p>
                                </div>
                            </div>
                            <div className="banner_buttons">
                                <a href="/" className='btn start_btn btn-theme_btn'>Start a Company</a>
                                <a href="/" className='btn btn_outline_btn'>Renew a Company</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="banner_img_wrapper">
                            <div className="img_wrapper">
                                <img src={BannerImage} alt="BannerImage" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comreg_wrapper d-flex justify-content-center align-items-center my-5">
                    <span className='theme_primary_color'><p className='fw-500 mb-0'>Watch the video about UAE or Offshore Company Registration</p></span>
                    <span className='border theme_border p-1 rounded-circle'><img src={PlayIcon} alt="playicon" /></span>
                </div>
            </div>
        </section>

    )
};

export default Banner;