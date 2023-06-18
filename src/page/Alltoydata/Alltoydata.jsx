import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Singletab/Tab1';
import Tab2 from './Singletab/Tab2';
import Tab3 from './Singletab/Tab3';

const Alltoydata = () => {
    useTitle("All Toy")
    // const [Alltoydatas,setAlltoydatas]=useState([])
    const [Marvels, setMarvels] = useState([])
    const [starwars, setstarwars] = useState([])
    const [Transformers, setTransformers] = useState([])


    useEffect(() => {

        fetch('https://assiment-11-server.vercel.app/Toydata')
            .then(res => res.json())
            .then(data => (
                setMarvels(data.filter(da => da.category == "Marvel")),
                setstarwars(data.filter(da => da.category == "starwars")),
                setTransformers(data.filter(da => da.category == "transformers"))
            ))
    }, [])

    console.log(Marvels, Transformers, starwars);



    return (
        <div className='mt-5'>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Super hero</Tab>
                        <Tab>star wars</Tab>
                        <Tab>Transformers</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5'>
                            {
                                Marvels.map(Marvel => <Tab1 key={Marvel._id} Marvel={Marvel} />)
                            }
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5' >
                            {
                                starwars.map(starwar => <Tab2 key={starwar._id} starwar={starwar} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5'>
                            {
                                Transformers.map(Transformer => <Tab3 key={Transformer._id} Transformer={Transformer} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};
export default Alltoydata;