

import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
 
 export default function Home(){
    return(
        <div className="bg-[#FFFFFF]  w-full text-white  font-serif font-normal text-[50px]">
            <h1 >
                <Header/>
                <Hero/>
          
            </h1>

        </div>
    )
}
