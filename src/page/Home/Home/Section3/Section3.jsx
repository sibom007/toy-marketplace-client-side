import React, { useContext } from 'react';
import { MyAuthcontext } from '../../../../Provider/Authprovider';

const Section3 = () => {

    const { user } = useContext(MyAuthcontext)


    return (
        <div className='w-1/2 mx-auto mt-10 mb-10' data-aos="fade-up-right">
            <div className="stats stats-vertical lg:stats-horizontal shadow p-10 bg-amber-200">

                <div className="stat text-slate-600">
                    <div className="stat-title">View</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat text-slate-600">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat text-slate-600">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value flex">1,200 <span><div className="avatar online ml-4">
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div></span></div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Section3;