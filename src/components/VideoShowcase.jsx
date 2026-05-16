import React from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/video.mp4';

const VideoShowcase = () => {
  return (
    <section className="video-split-section" id="video-showcase">
      <div className="video-column">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video-overlay-gradient"></div>
      </div>

      <div className="content-column">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="subtitle">
              Experience the Craftsmanship
            </span>
            <h2 className="title">
              Where Tradition <br /> Meets Timeless Art
            </h2>
            <p className="description">
              Step into a world where heritage meets contemporary elegance. Our master craftsmen pour generations of wisdom into every curve and setting, creating pieces that aren't just jewelry, but legacies.
            </p>
            <div className="button-group">
              <a href="#categories" className="btn btn-primary" style={{ textDecoration: 'none' }}>EXPLORE COLLECTIONS</a>
              <a href="#about" className="btn btn-outline" style={{ textDecoration: 'none' }}>OUR LEGACY</a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .video-split-section {
          display: flex;
          height: 100vh;
          width: 100%;
          background: #0f0f0f;
          overflow: hidden;
          position: relative;
        }

        .video-column {
          flex: 0.8;
          position: relative;
          overflow: hidden;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .video-overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(0,0,0,0), rgba(15,15,15,0.9));
          z-index: 1;
          display: none;
        }

        .content-column {
          flex: 1.2;
          display: flex;
          align-items: center;
          background: #0f0f0f;
          padding: 4rem 6rem;
          z-index: 2;
        }

        .content-container {
          max-width: 600px;
        }

        .subtitle {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.85rem;
          font-weight: 600;
          display: block;
          margin-bottom: 2rem;
        }

        .title {
          color: white;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 3.5rem;
          max-width: 90%;
        }

        .button-group {
          display: flex;
          gap: 2rem;
        }

        .video-split-section .btn {
          padding: 1.2rem 2.8rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .video-split-section .btn-outline {
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }

        .video-split-section .btn-outline:hover {
          background: white;
          color: var(--burgundy);
          border-color: white;
        }

        @media (min-width: 1200px) {
           .video-overlay-gradient {
              display: block;
           }
           .content-column {
              margin-left: -5vw;
              background: transparent;
           }
        }

        @media (max-width: 1024px) {
          .content-column {
            padding: 4rem;
          }
          .title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .video-split-section {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
          .video-column {
            height: 50vh;
            flex: none;
          }
          .video-overlay-gradient {
            background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(15,15,15,0.9));
            display: block;
          }
          .content-column {
            padding: 3rem 1.5rem 5rem;
            margin-top: -5vh;
            background: #0f0f0f;
          }
          .title {
            font-size: 2.5rem;
          }
          .description {
            font-size: 1.05rem;
            margin-bottom: 2.5rem;
          }
          .button-group {
            flex-direction: column;
            gap: 1rem;
          }
          .video-split-section .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoShowcase;

