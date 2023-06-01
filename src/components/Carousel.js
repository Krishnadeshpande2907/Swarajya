import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};


const slideImages = [
  {
    url: "http://www.gyanipandit.com/wp-content/uploads/2016/12/Tukaram.jpg",
    caption: "Tukaram Maharaj",
  },
  {
    url: "https://i.pinimg.com/originals/ba/32/25/ba3225df4185a21692eef86d3acb2267.jpg",
    caption: "Jyotiba Phule",
  },
  {
    url: "https://images.indianexpress.com/2020/04/ambedkar-feature.jpg",
    caption: "Babasaheb Ambedkar",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDLMtYb8jGiM-y0ayCSUEB4JWWd8gpeb17FoiseryMrE3n0KooPI6AOU80Vs4vJjTdFc&usqp=CAU",
    caption: "Lokmanya Tilak",
  },
  {
    url: "https://gumlet.assettype.com/theceo%2Fimport%2F2019%2F04%2FDhundiraj-Govind-Phalke.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
    caption: "Dadasaheb Phalke",
  },
  {
    url: "https://images.thequint.com/thequint%2F2022-02%2F26472596-119d-4b12-ab63-951c98553f80%2FPrabhatkhabar_2022_01_5dd1be83_0c86_46a9_9929_73bf453a8ca9_lata_mangeshkar.webp",
    caption: "Lata Mangeshkar",
  },
];
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",

  width: "100%",
 
};
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const Slideshow = () => { 
  return (
    <div className="slide-container mx-auto sm:w-1/2 md:mx-auto w-3/4 ">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="mx-auto"
              style={{ ...divStyle }}
            >
              <img 
              src={slideImage.url}
              className="object-fill w-full h-auto"
              />
              {/* <span style={spanStyle}></span> */}
            </div>
          </div>
        ))}
      </Slide>
      <span style={{ paddingTop: "10px", fontWeight: "500" }}>
        Prominent Marathi Figures
      </span>
    </div>
  );
};
export default Slideshow;
