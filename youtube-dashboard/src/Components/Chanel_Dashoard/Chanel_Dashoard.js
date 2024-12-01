import Analytics from "./Analytics/Analytics";
import Importent_notifications from "./Importent_notifications/Importent_notifications";
import Latest_video_performence from "./Latest_video_performence/Latest_video_performence";
import React from "react";
import News from "./News/News";
import Ideas_for_you from "./Ideas_for_you/Ideas_for_you";

const Chanel_Dashoard = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-4 ">
                        <Latest_video_performence />
                    </div>
                    <div className="col-4 ">
                        <div className="row ">
                            <div className="col-12">
                                <Importent_notifications />
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <Analytics />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12">
                                <News />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 ">
                                <Ideas_for_you />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className="row mt-3">
                    <div className="col-4 ">
                        <Latest_video_performence />
                    </div>
                    <div className="col-4 ">
                        <div className="row ">
                            <div className="col-12">
                                <Importent_notifications />
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <Analytics />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12">
                                <News />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 ">
                                <Ideas_for_you />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chanel_Dashoard;
