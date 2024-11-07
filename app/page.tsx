

import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
 
 export default function Home(){
    return(
        <div className="bg-[#A29875]  w-full text-white pl-9  font-serif font-normal text-[50px]">
            <h1 >
                <Header/>
                <Hero/>
          
            </h1>

        </div>
    )
}
