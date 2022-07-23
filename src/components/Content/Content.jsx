import React from "react";
import Menuitem from "../MenuItem/MenuItem";
import './content.css';

export default function Cart(props) {
    const data = props.data;
    const data2 = props.data2;
    return (
        <div className="content" id="main_data">
            <div className="headphones">
                <div className="title">
                    Наушники
                </div> 
                <div className="headphones__list">
                    {data.map((item) => <Menuitem className="headphone" img={item.img} 
                    title={item.title} price={item.price} rate={item.rate} 
                    old_price={item.old_price} id={item.id} key={item.id.toString()}/>)}
                </div>
            </div>
            <div className="wireless">
                <div className="title">
                Беспроводные наушники
                </div>
                <div className="headphones__list">
                    {data2.map((item) => <Menuitem className="headphone" img={item.img} title={item.title} 
                    price={item.price} rate={item.rate} 
                    old_price={item.old_price} id={item.id} key={item.id.toString()}/>)}
                </div>
            </div>
        </div>
    )
}