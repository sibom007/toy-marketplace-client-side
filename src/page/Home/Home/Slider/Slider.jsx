

const Slider = () => {
    return (
        <div className="carousel w-full h-[660px] rounded mb-9">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn bg-yellow-300 hover:bg-red-500">❮</a>
                    <a href="#slide2" className="btn bg-yellow-300 hover:bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn bg-yellow-300 hover:bg-red-500">❮</a>
                    <a href="#slide3" className="btn bg-yellow-300 hover:bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn bg-yellow-300 hover:bg-red-500">❮</a>
                    <a href="#slide4" className="btn bg-yellow-300 hover:bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-yellow-300 hover:bg-red-500">❮</a>
                    <a href="#slide5" className="btn bg-yellow-300 hover:bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1613276017067-ef618366152a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn bg-yellow-300 hover:bg-red-500">❮</a>
                    <a href="#slide1" className="btn bg-yellow-300 hover:bg-red-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;