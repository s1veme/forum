import { useRef } from "react";
import "./404.scss";
export const NotFound = () => {
  const scene = useRef();

  return (
    <>
      <div class="about">
        <a
          class="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
        >
          <span class="icon"></span>
        </a>
        <a
          class="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
        >
          <span class="icon"></span>
        </a>
        <a
          class="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
        >
          <span class="icon"></span>
        </a>
      </div>

      <section class="wrapper">
        <div class="container">
          <div id="scene" class="scene" data-hover-only="false" ref={scene}>
            <div class="circle" data-depth="1.2"></div>

            <div class="one" data-depth="0.9">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="two" data-depth="0.60">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="three" data-depth="0.40">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <p class="p404" data-depth="0.50">
              404
            </p>
            <p class="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div class="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <button>i dare!</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
