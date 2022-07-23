import React from "react";
import './cartitem.css';
import delImg from './del.svg';
import minusImg from './minus.svg';
import plusImg from './plus.svg';

export default function CartItem(props) {
    const id = `prod-id${props.data.id}`;
    const count = Number(sessionStorage.getItem(id));
    sessionStorage.setItem(id, count);
    function handleDel() {
        sessionStorage.setItem(id, 0);
    }
    function handleMinus() {
        const count = Number(sessionStorage.getItem(id));
        sessionStorage.setItem(id, count > 0 ? count - 1 : count);
    }
    function handlePlus() {
        const count = Number(sessionStorage.getItem(id));
        sessionStorage.setItem(id, count + 1);
    }
    return (
        <div className="cartitem">
            <div className="cart__line">
                <div className="cart__image">
                    <img src={`/headphones-store/imgs/${props.data.img}.jpg`} alt="img"/>
                </div>
                <div className="cart__info">
                        <div className="cart__title">
                            {props.data.title}
                        </div>
                        <div className="cart__price">
                            {props.data.price} ₽
                        </div>
                    </div>
                <div className="cart__del">
                    <img src={delImg} alt="delBtn" onClick={handleDel}/>
                </div>
            </div>
            <div className="cart__line">
                <div className="cart__counter">
                    <div className="cart__counter__minus">
                        <img src={minusImg} alt="-" onClick={handleMinus}/>
                    </div>
                    <div className="cart__counter__count">
                        {Number(sessionStorage.getItem(id))}
                    </div>
                    <div className="cart__counter__plus">
                        <img src={plusImg} alt="+" onClick={handlePlus}/>
                    </div>
                </div>
                <div className="cart__total__price">
                    {Number(sessionStorage.getItem(id)) * props.data.price} ₽
                </div>
            </div>
        </div>
    )
}