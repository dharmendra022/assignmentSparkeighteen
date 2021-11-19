import React from 'react';
import Data from "./data.json";


const Feedpage = () => {

    console.log(Data);
    return (

        <div >
            {


                Data.posts.map(posts => {

                    return (
                        <>
                            <div key={posts.id}>
                                <div className="cards">
                                    <div className="card">
                                        <img src={posts.thumbnail_image} alt="myPic" className="card_img" />
                                        <div className="card_info">
                                            <span className="card_category">Event_Name {posts.event_name}</span>
                                            <h3 className="card_title">Event_Date {posts.event_date}</h3>
                                            <h3 className="card_title">Views {posts.views}</h3>
                                            <h3 className="card_title">Likes {posts.likes}</h3>
                                            <h3 className="card_title">Shares {posts.shares}</h3>




                                        </div>

                                    </div>

                                </div>

                            </div>



                        </>

                    )
                })
            }


        </div>


    )



}




export default Feedpage;
