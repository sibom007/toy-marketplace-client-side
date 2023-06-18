import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero h-[500px] mt-4 rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624562563808-170065db4fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)` }}>
      <div className="hero-overlay bg-opacity-60 rounded"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-5xl " data-aos="zoom-in-down">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Welcome to our Shop</p>
          <Link to={'/Alltoydata'}><button className="btn glass">All toy</button></Link>
        </div>
      </div>
    </div>


  );
};

export default Banner;