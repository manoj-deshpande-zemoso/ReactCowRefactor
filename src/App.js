import React from "react";
import "bulma";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365" />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Margueritte</p>
                <p class="subtitle is-6">Field A</p>
              </div>
            </div>

            <div class="content">
              She love organize poker game in the basment of the farm.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg" />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Thérèse</p>
                <p class="subtitle is-6">Field A</p>
              </div>
            </div>

            <div class="content">
              During the confinement, her hair grown up significantly.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg" />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Evelyne</p>
                <p class="subtitle is-6">Field B</p>
              </div>
            </div>

            <div class="content">She smile to me, it's weird.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
