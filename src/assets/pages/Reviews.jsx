const Reviews = () => {
  return (
    <section id="reviews" className="section reviews min-h-screen bg-c-1 p-4">
            <div className="reviews__header">
              <h2 className="section__title2">
                Testimonios<span className="span__dot">.</span>
              </h2>

              <div className="reviews__buttons">
                <div className="button--prev">
                  <i className="bx bxs-left-arrow-circle"></i>
                </div>
                <div className="button--next">
                  <i className="bx bxs-right-arrow-circle"></i>
                </div>
              </div>
            </div>

            <div className="container swiper p-6">
              <div className="reviews__content swiper-wrapper">
                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>

                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>

                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>

                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>

                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>

                {/* <!--review Item-->*/}
                <div className="swiper-slide">
                  <div className="reviews__item">
                    <div className="reviews__head">
                      <div className="reviews__img">
                        <img src="assets/img/camilo.jpg" alt="profile" />
                      </div>

                      <div className="reviews__info">
                        <span className="reviews__tag">Frontend Developer</span>
                        <h3 className="reviews__name">Camilo Esteban</h3>
                      </div>
                    </div>
                    <p className="reviews__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium voluptates dolorem quod molestiae, consequuntur
                      aliquid incidunt? Fugiat consectetur impedit deleniti iure
                      commodi dolor aut, voluptas voluptatibus dolorum tempore,
                      iste autem.
                    </p>
                  </div>
                </div>
              </div>

              {/*<!-- If we need pagination -->*/}
              <div className="swiper-pagination"></div>
            </div>
          </section>
  )
}
export default Reviews