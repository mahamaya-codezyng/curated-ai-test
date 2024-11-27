import React, { useState } from "react";
import "./component.css";
import api from "../services/apiServices.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const InsertImage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image!");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/closet/", formData);
      console.log("API Response:", response.data);

      if (response.status === 422) {
        alert("No outerwear detected!");
      } else if (response.status === 500) {
        alert("Something went wrong, please try again.");
      } else {
        setResult(response.data.message);
      }
    } catch (error) {
      alert("No outerwear detected!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="render-body">
      <div className="image-container">
        <div className="source-image">
          {file && <img src={URL.createObjectURL(file)} alt="Source" />}
        </div>

        <div className="carousel-container">
          {result && result.length > 0 && (
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              emulateTouch={true}
              showThumbs={false}
              dynamicHeight={true}
              swipeable={true}
            >
              {result.map((url, index) => (
                <div key={index}>
                  <img
                    src={url}
                    alt={`Generated ${index + 1}`}
                    style={{ width: "100%", height: "auto", maxHeight: "80vh" }}
                  />
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="file-input my-2"
        />
        {/* <button type="submit" disabled={loading} className="btn btn-outline-light mx-2 mx-md-3 btn-sm">
          {loading ? "Processing..." : "Submit"}
        </button> */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-outline-light mx-2 mx-md-3 btn-sm"
        >
          {loading ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default InsertImage;
