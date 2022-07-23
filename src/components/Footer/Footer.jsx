import React from "react";
import './Footer.css';
import earth from './earth.svg';
import vk from './vk.svg';
import tg from './tg.svg';
import wa from './whatsapp.svg';
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__name">QPICK</div>
            <div className="footer__items">
                <NavLink className="footer__items__item" to="/headphones-store/likes">Избранное</NavLink>
                <NavLink className="footer__items__item" to="/headphones-store/cart">Корзина</NavLink>
                <NavLink className="footer__items__item" to="/headphones-store/contacts">Контакты</NavLink>
            </div>
            <div className="footer__items2">
                <NavLink className="footer__items2__terms" to="/headphones-store/terms">Условия сервиса</NavLink>
                <div className="footer__items2__langs">
                    <div className="footer__items2__langs__earth">
                        <img src={earth} alt="earth" />
                    </div>
                    <div className="footer__items2__langs__lang rus-lang">Рус</div>
                    <div className="footer__items2__langs__lang">Eng</div>
                </div>
            </div>
            <div className="footer__sn"> {/* Social Networks */}
                <div className="footer__sn__vk">
                    <img src={vk} alt="VK" />
                </div>
                <div className="footer__sn__tg">
                    <img src={tg} alt="Telegram" />
                </div>
                <div className="footer__sn__wa">
                    <img src={wa} alt="WhatsApp" />
                </div>
            </div>
        </footer>
    )
}