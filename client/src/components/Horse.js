import React from 'react';
import gif from './horse.gif';
import stylesFor from './Horse.module.css';
// import { motion } from "framer-motion";
//import { useSpring, animated } from 'react-spring';

const Horse = ({info}) => {
    console.log(info);
    //I have never use socket.io before it was my first time, also tried to use redux toolkit
    //tried to use react spring library for animation but has not enough time.
    return (
        <>
            <div className={stylesFor.mainBlock}>
                {
                    info.map((item, key) => {
                        // const styles = useSpring({
                        //     from: { x: item.distance}
                        // });
                        //return
                        // <animated.div
                        //     style={{
                        //         ...styles,
                        //     }}
                        // >
                        return <div key={key} className={stylesFor.block}>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.distance}
                            </div>
                            <img src={gif} alt="my-gif" className={stylesFor.img}/>
                        </div>
                        //</animated.div>

                    })
                }


            </div>
        </>
    );
};

export default Horse;