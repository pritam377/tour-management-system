import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../../src/shared/Subtitle";
import Search from "../shared/Search";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      {/* ===============Hero Section Starts================ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">
                  <Subtitle subtitle={"Know before you go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Search />
          </Row>
        </Container>
      </section>
      {/* ===============Hero Section ends================ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* =================Featured tour section Starts========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* =================Featured tour section ends=========== */}
      {/* ===========Experience Section Starts ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting
                  <br />
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="expimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========Experience Section ends =================== */}
      {/* ===========Gallery section starts===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========Gallery section ends======================= */}
      {/* ===========Testimonial Section starts================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========Testimonial Section ends=================== */}
    <Newsletter/>
    </>
  );
};

export default Home;
