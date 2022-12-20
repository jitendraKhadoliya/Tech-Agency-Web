import React from "react";
import vg from '../assets/2.webp';
import {AiFillInstagram, AiFillYoutube , AiFillLinkedin, AiFillAmazonCircle  } from 'react-icons/ai'

const Home = ()=>{
    return <>
    <div className="home" id="home"> 
            <main>
                <h2>Jinix Servies</h2>
                <p>solution for all your Web services</p>
            </main>
    </div>

    <div className="home2">
        <img src= {vg} alt="GraphicImage" />
        <div>
            
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis est obcaecati culpa expedita fuga blanditiis voluptatum nostrum ea tempore rerum eum quia quasi, eveniet facilis fugiat! Libero error sint reiciendis.
            </p>
        </div>
    </div>


    <div className="home3" id="about">
        <div>
            <h3>Who We Are ?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, vitae deserunt incidunt natus perspiciatis, consectetur inventore culpa corporis ut commodi labore harum quis aliquam reiciendis? Mollitia, sapiente culpa maxime illum rem quis, non incidunt nihil ipsa minima distinctio nulla laboriosam quos hic odio similique earum molestiae sequi architecto. Ducimus, architecto mollitia? Et recusandae obcaecati temporibus explicabo doloribus asperiores molestiae minima eos, rerum expedita tenetur optio aliquam perferendis placeat repudiandae, aperiam vel architecto corrupti corporis neque tempore aut quo libero vero. Mollitia debitis quidem labore atque. Deleniti voluptates dicta saepe totam iste. Explicabo maxime voluptatum ullam hic animi quam molestiae officiis.</p>
        </div>

    </div>



    <div className="home4" id="brands">
        <div>

        <h3>Brands</h3>
        <article>

        <div
         style={ {animationDelay : "0.3s"} } >
            <AiFillAmazonCircle />    
            <p>Amazon</p>
        </div>
        <div
         style={ {animationDelay : "0.5s"} } >
            <AiFillInstagram />    
            <p>Instagram</p>
        </div>
        <div
         style={ {animationDelay : "0.7s"} } >
            <AiFillYoutube />    
            <p>Youtube</p>
        </div>
        <div
         style={ {animationDelay : "0.9s"} } >
            <AiFillLinkedin />    
            <p>Linkedin</p>
        </div>

        </article>
        </div>
    </div>


    </> 
}

export default Home;