// Importing necessary dependencies and components
import logo from './logo.svg';
import './App.css';
import profileImage from "./images/challenge profile image (1).jpg"
import Star from "./components/Start" // Assuming this is a custom star rating component
import Slider from "react-slick"; // Assuming this is a slider component from React Slick
import ImageDiv from "./components/ImageDiv" // Assuming this is a custom component for displaying images
import image1 from "./images/challenge image (1) (1).webp"
import image2 from "./images/challenge image (2) (1).webp"
import image3 from "./images/challenge image (3) (1).webp"
import image4 from "./images/challenge image (4) (1).webp"
import "slick-carousel/slick/slick.css"; // Importing CSS for React Slick slider
import "slick-carousel/slick/slick-theme.css"; // Importing theme CSS for React Slick slider

// Main function component
function App() {

  // Settings for the slider component
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Rendering the UI
  return (
    <div className="App">
      <div className='page'>
        {/* Product title */}
        <h1 className='Heading'>New Deer Upholstered Barrel <br></br> Chair</h1>

        {/* Profile section */}
        <div className='profile_div'>
          <img className='profile_image' src={`${profileImage}`} />
          <p className='profile_text'><span style={{color:"#0000008F",fontWeight:"bold"}}>by</span>&nbsp;Sand and Stable</p>
        </div>
  
        {/* Rating section */}
        <div className='rating_box'>
          <Star/>
          <Star/>
          <Star/>
          <Star opacity={true}/>
          <Star opacity={true}/>
          <span style={{color:"#0000008F",marginLeft:"1%"}}> 3/5 (See 24 reviews)</span>
        </div>
        
        {/* Image slider */}
        <div className='image_slider'>
          <Slider {...settings}>
            <div><ImageDiv image={image1} /></div>
            <div><ImageDiv image={image2} /></div>
            <div><ImageDiv image={image3} /></div>
            <div><ImageDiv image={image4} /></div>
          </Slider>
        </div>

        {/* Price and delivery section */}
        <div className='price_section'>
          <div><p className='price' style={{fontWeight:"bold"}}>$ 450.55</p></div>
          <div className='getit' style={{marginRight:"5%"}}>
            <p style={{border:"2px solid black",padding:"2px",borderRadius:"6px"}}>Get it by 3rd March *Standard</p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deliver to <span style={{textDecoration:"underline"}}>Lewes19958</span></span>
          </div>
        </div>

        {/* Add to cart and buy now buttons */}
        <div>
          <div className='purchase_div'>
            <button className='sell_btns' style={{borderRadius:"6px", marginRight:"2%" ,background:"white"}}>+ 01 -</button>
            <button className='sell_btns' style={{borderRadius:"6px",background:"white"}}>ADD TO CART</button>
          </div>
        </div>

        <div>
          <button className='buyBtn' style={{background:"#D4AF38",width:"97%",borderRadius:"7px",color:"white",fontWeight:"bold"}}>BUY NOW </button>
        </div>

        {/* Product description */}
        <div className="product_description_container">
          <div className="product_description_heading">Product Description</div>
          <textarea
            className="product_description_textarea"
            rows="7"
            cols="120"
            value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
