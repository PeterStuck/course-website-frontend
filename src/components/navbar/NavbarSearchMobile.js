import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Drawer, TextField} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const NavbarSearchMobile = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('searching...');
    }

    return (
        <div className={"navbar__search--mobile"}>
            <FontAwesomeIcon icon={faSearch} onClick={handleShow} />
            <Drawer className={'search__panel'} anchor={'bottom'} open={show} onClose={handleShow}>
                <div className="search__panel__content">
                    <div className="panel__content__wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="panel__content__close">
                                <CloseIcon onClick={handleShow} />
                            </div>

                            <div className="panel__content__searchbar">
                                <TextField id="outlined-search" type="search" placeholder={'Search courses by keyword...'} />
                            </div>
                            <div className="panel__content__search_icon">
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default NavbarSearchMobile;
