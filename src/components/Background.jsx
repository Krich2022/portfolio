import backgroundImage from "../assets/image-from-rawpixel-id-441166-jpeg.jpg";

export default function Background({ children }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  return (
    <section
      style={sectionStyle}
      className="d-flex justify-content-center align-items-center text-center vh-100 text-light"
    >
      <div style={overlayStyle}></div>
      {children}
    </section>
  );
}
