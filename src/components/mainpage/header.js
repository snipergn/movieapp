import "./header.css";

const Header = ({ movielatest, OnActive}) => {
  return (
    <div>
      {movielatest.map((item, index) => {
        console.log(item.results)
        return (
          <div key={index}
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[0].backdrop_path}`}
                  alt="First slide"
                />
                
                <div class="carousel-caption d-none mb-5 d-md-block text-left">
                <h6>Movie</h6>
                  <h1 className="mb-4">{item.results[0].title}</h1>
                  <p className="display-block-ove">{item.results[0].overview}</p><br/>
                  
                  <button type="button" 
                  onClick={() => OnActive(item.results[0].id)}
                  class="btn-lg btn-primary mt-2 ml-3">View More</button>
                </div>
                
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[1].backdrop_path}`}
                  alt="Second slide"
                />
                 <div class="carousel-caption d-none mb-5 d-md-block text-left">
                  <h6>Movie</h6>
                  <h1 className="mb-4">{item.results[1].title}</h1>
                  <p className="display-block-ove">{item.results[1].overview}</p><br/>
                  <button type="button" 
                  onClick={() => OnActive(item.results[1].id)} 
                  class="btn-lg btn-primarymt-2 ml-3">View More</button>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[2].backdrop_path}`}
                  alt="Third slide"
                />
                 <div class="carousel-caption d-none mb-5 d-md-block text-left">
                 <h6>Movie</h6>
                  <h1 className="mb-4">{item.results[2].title}</h1>
                  <p className="display-block-ove">{item.results[2].overview}</p><br/>
                 
                  <button type="button"
                  onClick={() => OnActive(item.results[2].id)} class="btn-lg btn-primary mt-2 ml-3">View More</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 w-100 image img-responsive"
                  src={`https://image.tmdb.org/t/p/original/${item.results[3].backdrop_path}`}
                  alt="Fourth slide"
                />
                 <div class="carousel-caption d-none mb-5 d-md-block text-left">
                 <h6>Movie</h6>
                  <h1 className="mb-4">{item.results[3].title}</h1>
                  <p className="display-block-ove">{item.results[3].overview}</p><br/>
                  
                  <button type="button" 
                  onClick={() => OnActive(item.results[3].id)} class="btn-lg btn-primary mt-2 ml-3">View More</button>
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
