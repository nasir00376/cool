import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  custom-nav" >
            <div>
                <img width="100%" src="/assets/images/icons/bread-crumbs.png" alt="Card image cap" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="color-white brand" href="#">My Stats</a>
                </li>

            </ul>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#">
                            <img className="rounded-circle " src="/assets/images/avatar/3.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;