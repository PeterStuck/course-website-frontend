import React from 'react';
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const NavbarSearchbar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <div className="navbar__searchbar">
            <Form onSubmit={handleSearch}>
                <div className="searchbar__input__wrapper">
                    <Form.Control type="text" placeholder="Search by title..." />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default NavbarSearchbar;
