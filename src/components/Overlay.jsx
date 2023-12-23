// Import necessary modules and styles
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useNavigate } from "react-router-dom";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const navigate = useNavigate();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      }`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />

      {progress === 100 && (
        <>
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">
              APURV JHA
              <div className="spinner">
                <div className="spinner__image" />
              </div>
            </h1>
            <p className="intro__scroll">Scroll to begin the journey</p>
            <button
              className="explore bg-white"
              onClick={() => {
                setPlay(true);
              }}
            >
              Explore
            </button>
            <div className="top-right-buttons">
              <button
                className={`top-right-button ${
                  play ? "top-right-button--disappear" : ""
                }`}
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </button>

              <button
                className={`top-right-button ${
                  play ? "top-right-button--disappear" : ""
                }`}
                onClick={() => {
                  navigate("/projects")
                }}
              >
                Projects
              </button>
            </div>
          </div>
        </>
      )}

      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">
          Wish you had a great flight with us. Hope to See You Again. ...
        </p>
      </div>
    </div>
  );
};
