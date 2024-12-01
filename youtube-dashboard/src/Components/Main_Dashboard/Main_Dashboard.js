
import React from 'react';
import '../Main_Dashboard/Main_Dashboard.css';


import { Route, Routes } from 'react-router-dom';


import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Chanel_Dashoard from '../Chanel_Dashoard/Chanel_Dashoard';

function Main_Dashboard() {
    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row '>
                        <div className='col-12 border border-light-subtle '>
                            <Navbar />
                        </div>
                    </div>
                    <div className='container-fluid'> <div className='row'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2 bg-dark border border-light-subtle'>
                                    <Sidebar />
                                </div>
                                <div className='col-10 custom-height bg-dark border border-light-subtle'>
                                    <Routes>
                                        <Route path='/Chanel_Dashoard' element={<Chanel_Dashoard />} />
                                    </Routes>


                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>




    );
}

export default Main_Dashboard;
