import React from "react";
import vg from '../assets/2.webp';

const Home = ()=>{
    return <>
    <div className="home">
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


    </> 
}

export default Home;