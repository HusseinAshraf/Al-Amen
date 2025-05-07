import myImage from "../../assets/image/leaf-pattern.jpg";

const BackGround = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center md:bg-fixed sm:bg-scroll">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      ></div>

      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.1 }}
      ></div>


      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center ">
        {children}
      </div>
    </div>
  );
};

export default BackGround;
