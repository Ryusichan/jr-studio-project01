import React from "react";

const Testimonials = () => {
  const customerlogo1 = require("./../res/images/customer-logo-1.png");
  const customerlogo2 = require("./../res/images/customer-logo-2.png");
  const customerlogo3 = require("./../res/images/customer-logo-3.png");
  const customerlogo4 = require("./../res/images/customer-logo-4.png");
  const customerlogo5 = require("./../res/images/customer-logo-5.png");

  return (
    <div className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>User Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  I love using Sync for my personal development needs. It meets
                  all my requirements and it actually helps a lot with focusing
                  skills.
                </div>
                <div className="testimonial-author">Rick Jones - Designer</div>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  After trying out a large number of personal coaching apps I
                  decided to give Sync a try and what a wonderful surprise it
                  was.
                </div>
                <div className="testimonial-author">
                  Lynda Marquez - Developer
                </div>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  Never dreamed I could learn so fast how to focus on my
                  personal goals and improve my life to levels I never thought
                  possible.
                </div>
                <div className="testimonial-author">Jay Frisco - Marketer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <img
                className="img-fluid"
                src={customerlogo1}
                alt="alternative"
              />
              <img
                className="img-fluid"
                src={customerlogo2}
                alt="alternative"
              />
              <img
                className="img-fluid"
                src={customerlogo3}
                alt="alternative"
              />
              <img
                className="img-fluid"
                src={customerlogo4}
                alt="alternative"
              />
              <img
                className="img-fluid"
                src={customerlogo5}
                alt="alternative"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  I got so much value from using Sync in my daily life for which
                  I am very grateful and would recommend it to everybody
                </div>
                <div className="testimonial-author">Frank Gibson - Manager</div>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  If you have great goals but can't figure out a way to keep
                  focused then you should definitely give Sync a try and see the
                  results
                </div>
                <div className="testimonial-author">
                  Rita Longmile - Designer
                </div>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <hr className="testimonial-line" />
              </div>
              <div className="card-body">
                <div className="testimonial-text">
                  I've been looking for a great organizer app for such a long
                  time but now I am really happy that I found Sync. It's beeen
                  working great
                </div>
                <div className="testimonial-author">
                  Jones Smith - Developer
                </div>
              </div>
            </div>
            {/* end of card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
