import React from "react";
import './menuitem.css';

export default function Menuitem(props) {
    const id = `prod-id${props.id}`;
    const count = Number(sessionStorage.getItem(id));
    sessionStorage.setItem(id, count);
    function handleClick() {
        const count = Number(sessionStorage.getItem(id));
        sessionStorage.setItem(id, count > 0 ? count : count + 1);
    }
    return (
        <div className="menuitem">
            <div className="menu__image">
                <img src={`/imgs/${props.img}.jpg`} alt="img"/>
            </div>
            <div className="menu__info">
                <div className="menu__info__line">
                    <div className="menu__info__title">
                        {props.title}
                    </div>
                    <div className="prices">
                        <div className="prices__price">
                            {props.price} ₽
                        </div>
                        <div className="prices__oldprice">
                            {props.old_price} {props.old_price === undefined ? '' : '₽'}
                        </div>
                    </div>
                </div>
                <div className="menu__info__line">
                    <div className="menu__info__rate">
                        {props.rate}
                    </div>
                    <div onClick={handleClick} className="menu__info__buy">
                        Купить
                    </div>
                </div>
            </div>
        </div>
    )
}