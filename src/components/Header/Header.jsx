import React from "react";
import heart from './heart.svg';
import cart from './cart.svg';
import './header.css';
import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="header" id="header">
            <NavLink className="header__text" to="/">
                QPICK
            </NavLink>
            <div className="header__panel">
                <NavLink className="header__panel__img" to="/likes">
                    <img src={heart} alt="heart" />
                    <div className="header__panel__img__count">{props.likeCount}</div>
                </NavLink>
                <NavLink className="header__panel__img" to="/cart">
                <img src={cart} alt="cart" />
                <div className="header__panel__img__count">{props.buyCount}</div>
                </NavLink>
            </div>
        </header>
    )
}