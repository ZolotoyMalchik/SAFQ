import Button from "../Button/Button";
import logo from "../../../public/icons/logo.svg"
import "./Header.css"
import { NavLink } from "react-router-dom";

import Modal from 'react-modal'
import { useState } from 'react'
import ModelContent from "../ModalContent/ModelContent";

export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setModalIsOpen(false)
        document.body.style.overflow = 'auto'
    }

   

    return (
        <>
            <div className="header">
                <div className="header-block section">
                    <img src={logo} alt="" className="header-block__logo" />
                    <div className="header-block__left">

                        <div onClick={openModal} className="header-block__left-link">Корзина</div>

                        <NavLink to="/">
                            <div href="#" className="header-block__left-link">Главная</div>
                        </NavLink>

                        <NavLink to="/">
                            <div href="#" className="header-block__left-link">Контакты</div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
                <ModelContent closeModal={closeModal} />
            </Modal>

        </>
    )
}