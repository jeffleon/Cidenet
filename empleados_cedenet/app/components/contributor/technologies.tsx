import React from "react";
import Image from 'next/image';
import Home from "../../../styles/Home.module.css"

const Technologies = () => {
    return (
        <div className={Home.container_images}>
            <Image className={Home.container_image}
                src="/assets/golangFIber.jpg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
            <Image className={Home.container_image}
                src="/assets/nextjs-logo.png"
                alt="Picture of the author"
                width={300}
                height={300}
            />
        </div>
    )
}

export default Technologies;