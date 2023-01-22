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
          <div class="carousel-item header item active">
            <img class="d-block headerImage w-100" src={firstSlide} alt="First slide" />
            <div className="carousel-caption">
              <p className="h4">Name Movie</p>
              <p className="p">Date Release </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
