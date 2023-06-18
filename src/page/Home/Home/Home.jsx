
import useTitle from '../../../Hooks/useTitle';
import Alltoydata from '../../Alltoydata/Alltoydata';
import Banner from './Banner/Banner';
import Sectiomntwo from './Section-two/Sectiomntwo';
import Section3 from './Section3/Section3';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner />
            <Sectiomntwo />
            <Slider />  
            <Alltoydata></Alltoydata>
            <Section3 />
        </div>
    );
};

export default Home;