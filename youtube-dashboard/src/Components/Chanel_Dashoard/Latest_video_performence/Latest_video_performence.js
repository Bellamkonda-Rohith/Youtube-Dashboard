import React from 'react';
import thumbnail from '../Latest_video_performence/thumbnail.webp'

import '../Latest_video_performence//Latest_video_performence.css'

const Latest_video_performence = () => {
    return (
        <>

            <div className="card  bg-dark border border-light-subtle">
                <div className="card-title text-center text-light">
                    <h4>Latest video performence</h4>
                </div>
                <div className="card-body">
                    <div className="container "> <img src={thumbnail} alt="thubmnail" className='w-100 rounded position-sticky' /></div>
                    <div className="container custom-container ">
                        <p className='text-light mt-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quidem repellendus nostrum eum facere dicta at, officiis quibusdam aliquam atque ducimus nisi iste quod et consequuntur earum minus eos aspernatur mollitia ex exercitationem dolor commodi. Aliquam maiores accusantium sint modi expedita suscipit a cum rem dolorem quibusdam quas obcaecati reiciendis saepe natus tempora quae, quaerat adipisci sequi. Quaerat iusto volupta
                            tur adipisicing elit. Quis quidem repellendus nostrum eum facere dicta at, officiis quibusdam aliquam atque ducimus nisi iste quod et consequuntur earum minus eos aspernatur mollitia ex exercitationem dolor commodi. Aliquam maiores accusantium sint modi expedita suscipit a cum rem dolorem quibusdam quas obcaecati reiciendis saepe natus tempora quae, quaerat adipisci sequi. Quaerat iusto volupta
                        </p>

                    </div>


                </div>
            </div>




        </>
    );
};
export default Latest_video_performence;
