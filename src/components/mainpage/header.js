import "./header.css";

const Header = ({ movielatest }) => {
  return (
    <div>
      {movielatest.map((item, index) => {
        return (
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[0].poster_path}`}
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{item.results[0].title}</h2>
                  <p>{item.results[0].overview}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[1].poster_path}`}
                  alt="Second slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{item.results[1].title}</h2>
                  <p>{item.results[1].overview}</p>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[2].poster_path}`}
                  alt="Third slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{item.results[2].title}</h2>
                  <p>{item.results[2].overview}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[3].poster_path}`}
                  alt="Fourth slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h2>{item.results[3].title}</h2>
                  <p>{item.results[3].overview}</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
