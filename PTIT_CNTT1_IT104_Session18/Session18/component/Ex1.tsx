// @ts-ignore
import React,{ useState } from 'react';


const Ex1 = () => {
    const [name] =useState("Trần Quang Hiệp");
    return (
        <div style={{textAlign:"center",marginTop:20}}>
            <b><h2>Họ và tên: {name}</h2></b>
        </div>
    );
};

export default Ex1;