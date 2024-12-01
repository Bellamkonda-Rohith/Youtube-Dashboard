import React from "react";
import dashboard from '../Sidebar/dashboard.png'
import shivaimg from '../Sidebar/shiva anna.jpg';
import '../Sidebar/Sidebar.css'
import barchart from '../Sidebar/bar-chart.png'
import community from '../Sidebar/crowd-of-users.png'
import subtitile from '../Sidebar/subtitle.png'
import copyright from '../Sidebar/copyright.png'
import earn from '../Sidebar/earnings.png'
import feedbak from '../Sidebar/feedback.png'
import settingslogo from '../Sidebar/settings.png'
import { useNavigate } from "react-router-dom";
const Sidebar = () => {

    const table_details = [
        { img: dashboard, title: "Dashboard" },
        { img: barchart, title: "Analytics" },
        { img: community, title: "Community" },
        { img: subtitile, title: "Subtitles" },
        { img: copyright, title: "Copyright" },
        { img: earn, title: "Earnings" },
    ];
    const settings = [
        {
            img: settingslogo,
            title: "Setings"

        }, {
            img: feedbak,
            title: "Feedback"

        }

    ]
    const Navigate = useNavigate()


    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="d-flex justify-content-center bg-dark">
                        <div><img src={shivaimg} className="w-100 rounded-circle" /></div>
                    </div>
                    <div className="text-center">
                        <h4 className="text-light mt-2">Your Channel</h4>
                        <p className="text-secondary">Shiva Kumar Vakiti</p>
                        <div className="container">
                            <div className="table-responsive table-responsive-vertical hide-scrollbar">
                                <table className="table table-dark ">
                                    {table_details.map((copyof_table) => {
                                        const { img, title } = copyof_table;
                                        return (
                                            <tr key={title}>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img src={img} alt="Dashboard" className="custom-img-dashboard bg-light" />
                                                        </div>
                                                        <div className="col-9 text-center">
                                                            <p className="text-light text-center" onClick={() => Navigate("Chanel_Dashoard")}>{title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="text-light"><hr /></div>
                        <div className="container">
                            <div className="row">
                                {settings.map((copyofsettings) => {
                                    const { img, title } = copyofsettings;
                                    return (
                                        <>
                                            <div className="col-3 "><img src={img} alt={title} className="custom-img-dashboard bg-light " /></div>
                                            <div className="col-9"><p className="text-light">{title}</p></div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidebar;
