import "./header.css";
import firstSlide from "../Assets/batman.jpg";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item item active">
            <img class="d-block w-100" src={firstSlide} alt="First slide" />
            <div className="carousel-caption">
              <p className="h4">Name Movie</p>
              <p className="p">Date Release </p>
            </div>
          </div>
        </div>
        <div className="section">
          <p className="h1 title"> Popular now </p>
          <div className="image-div">
          <img src={firstSlide} className="image" alt="image"/>
          </div>
        </div>
        <div className="section-2">
          <p className="h1 title "> Action SF & Fantasy</p>
        </div>
        <div className="section-3">
          <p className="h1 title"> Blockbuster Movie</p>
        </div>
        <div className="section-4">
          <p className="h1 title"> Documentary</p>
        </div>
        <div className="section-5">
          <p className="h1 title">Action Movie </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
