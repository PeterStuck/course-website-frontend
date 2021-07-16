import React from 'react';

import '../../styles/navbar/NavbarLoginRegister.scss';

const NavbarLoginRegister = () => {
    return (
        <div className="navbar__login_register">
            {/* Show modals here */}
            <div className="navbar__login">
                Log in
            </div>
            <div className="navbar__register">
                Sign up
            </div>
        </div>
    );
};

export default NavbarLoginRegister;
