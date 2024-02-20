import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-800 font-bold"> Our Exclusive Picks</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
              }
            </div>
        </div>
    );
};

export default Services;