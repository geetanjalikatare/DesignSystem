import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './card.css'
import './style.css'
function Card(props) {

    return (
        <>

            <div class="card-holidays">
                <p class="day">{props.day}</p>
                <h3 class="month">aug 08</h3>
                <p class="year">2020</p>
                <h4 class="festival">rakhi</h4>
                <p class="country">india</p>
            </div>


            {/* <div>
             <div className="item text-center rounded-0">
                    <div className="card">
                        <div className="card-body">
                            
                        
                        </div>
                    </div>
                </div>
         </div> */}
     )


        </>
    )
}

export default Card;