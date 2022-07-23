import React from "react";
import CartItem from "../CartItem/CartItem";
import Menuitem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart(props) {
    const data = props.data;
    const data2 = props.data2;
    return (
        <div className="cart" id="main_data">
            <div className="cart__title">
                Корзина
            </div>
            <div className="cart__all">
                <div className="cart__all__buy">
                    {data
                    .filter(prod=>Number(sessionStorage.getItem(`prod-id${prod.id}`)) > 0)
                    .map(prod => <CartItem data={prod} key={prod.id} 
                        count={Number(sessionStorage.getItem(`prod-id${prod.id}`))}/>)}
                </div>
                <div className="cart__all__check">
                    <div className="cart__all__check__money">
                        <div className="cart__all__check__money__total">
                            Итого
                        </div>
                        <div className="cart__all__check__money__count">
                            ₽ {data.reduce((prev, cur) => prev += 
                                cur.price * Number(sessionStorage.getItem(`prod-id${cur.id}`)), 0)}
                        </div>
                    </div>
                    <div className="cart__all__check__move">
                        Перейти к оформлению.
                    </div>
                </div>
            </div>
        </div>
    )
}