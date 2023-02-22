import "./header.css";

const Header = ({movielatest}) => {

  return (
    <div>
    {movielatest.map((item, index) => {
      return (
          <div key={index}
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item item active">
              <img class="d-block w-100 img-fluid " src={`https://image.tmdb.org/t/p/original/${item.results[0].poster_path}`} alt="First slide" />
               <div className="carousel-caption">
                <p className="h3">{item.results[0].title}</p>
                <p className="p">Data Lansare: {item.results[0].release_date}</p>
              </div> 
            </div>
          </div>
        </div>
   
      )
    })}
    </div>
  );
};

export default Header;
