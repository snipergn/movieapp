import React from "react";

const Section = ({movielatest}) => {

 
    return (
      <div>
        { movielatest.map((item, index) => {

          return (
      <main class="my-5">
        <div class="container">
          <section class="text-left">
            <h4 class="mb-2 mt-5">
              <strong>Filmele Recente</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4  col-sm-6 mb-4">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        `https://image.tmdb.org/t/p/original/${item.results[0].poster_path}`
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 

          </section>

          {/* Section 2*/}

          <section class="text-left">
            <h4 class="mb-1 mt-5">
              <strong>Drama</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </section>

          {/* Section 3*/}

          <section class="text-left">
            <h4 class="mb-1 mt-5">
              <strong>Thriller</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4 mb-4 col-sm-6 ">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 

          </section>

          {/* Section 4*/}

          <section class="text-left">
            <h4 class="mb-1 mt-5">
              <strong>Comedy</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </section>


          {/* Section 5*/}

          <section class="text-left">
            <h4 class="mb-1 mt-5">
              <strong>Latest posts</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </section>


          {/* Section 6*/}

          <section class="text-left">
            <h4 class="mb-1 mt-5">
              <strong>Latest posts</strong>
            </h4>

            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      }
                      class="img-fluid"
                      alt ="img"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                      >
                        <button type="button" class="btn btn-primary mt-3">Add to Favorite</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </section>
        </div>        
      </main>
          )
      })   
    }
    </div>
  );
                    
};

export default Section;
