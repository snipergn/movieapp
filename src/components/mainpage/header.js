import "./header.css";
import firstSlide from "../Assets/batman.jpg";
import secondSlide from "../Assets/second.jpg";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner img-fluid">
          <p className="h1 title-batman">Batman Movie</p>
          <div class="carousel-item active">
            <img class="d-block w-100 image" src={firstSlide} alt="First slide" />
            <div class="carousel-content">
              <p className="h1">Movie Title</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
