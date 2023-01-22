import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-light text-lg-start">
        <div class="py-4 text-center">
          <a
            role="button"
            class="btn btn-primary btn-lg m-2"
            href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
            rel="nofollow"
            target="_blank"
          >
            Github
          </a>
          <a
            role="button"
            class="btn btn-second btn-lg m-2"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>

        <hr class="m-0" />

        <div class="text-center py-4 align-items-center">
          <p>Movie App</p>
        </div>

        <div
          class="text-center p-3"
        >
          © 2022 Copyright: snipergn
        </div>
      </footer>
    </div>
  );
};

export default Footer;
