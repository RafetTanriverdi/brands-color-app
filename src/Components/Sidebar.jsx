import React, { useState } from 'react'
import Modal from "react-modal"
import { AiOutlineClose } from "react-icons/ai"




function Sidebar() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    const toggleModal = () => {
        setmodalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <aside className='sidebar'>
                <div className="logo">
                    <a>Brand<b>Colors</b></a>
                </div>
                <div className="description">
                    The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    className="about-modal"
                    overlayClassName="about-modal-overlay"
                >
                    <button className='modal-close-btn' onClick={toggleModal}><AiOutlineClose /></button>
                    <h3>About BrandColors</h3>
                    <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                    <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
                </Modal>
            </div>
        </>
    )
}

export default Sidebar