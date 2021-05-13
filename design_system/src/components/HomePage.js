import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from './Card'
import { useEffect, useState } from 'react';
import "./card.css";
import axios from 'axios';
import Navbar from './Navbar'


const options = {
    nav: true,
    items: 4,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 4
        },
        1200: {
            items: 4
        }
    }

}

function HomePage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3002/getdata").then((res) => {
            //console.log(res.data);
            setList(res.data)
        })
    }, [])
    console.log("list is", list);
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <br></br>
                <br></br>
                <h4 className="heading">Upcoming Holidays </h4>
                <div className="row mb-5">
                    <OwlCarousel className='owl-theme' {...options} >
                        {list.map((e) => {
                            console.log(e);
                            return (

                                <div className="card">
                                    <div className="card-body">
                                        <div class="card-holidays">
                                            <p class="day">{e.day}</p>
                                            <h3 class="month">{e.date}</h3>
                                            <p class="year">2020</p>
                                            <h4 class="festival">{e.festival}</h4>
                                            <p class="country">india</p>
                                        </div>

                                    </div>
                                </div>


                            )
                        })} </OwlCarousel>
                    {/* <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card>
                           <Card ></Card> */}

                </div>
            </div>
        </div>
    )
}


export default HomePage