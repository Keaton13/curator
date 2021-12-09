import React, { useEffect } from 'react';
import Logo from '../images/images.png'
import { Link } from "react-router-dom";


const Header = props => {
    const [dropDownStatus, setDropDownStatus] = React.useState('dropdown-menu mt-5');

    function handleDropdownClick() {
        if (dropDownStatus === 'dropdown-menu mt-5') {
            setDropDownStatus('dropdown-menu show mt-5')
        } else {
            setDropDownStatus('dropdown-menu mt-5')
        }
    }

    return (
        <div className="row HeaderMaxHeight background-color-header">
            <div className="col-8">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle float-left" onClick={() => { handleDropdownClick() }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </button>
                    <div className={dropDownStatus} aria-labelledby="dropdownMenuButton">
                        <Link className="no-underline" to="/" onClick={() => { handleDropdownClick() }}><a className="dropdown-item">Balance</a></Link>
                        <Link className="no-underline" to="ticker" onClick={() => { handleDropdownClick() }}><a className="dropdown-item">Ticker</a></Link>
                    </div>
                </div>
                <h1 className="mt-3 float-right-custom">Curator</h1>
            </div>
            <div className="col-4">
                <img src={Logo} className="h-25 ml-3" />
            </div>
        </div>
    )
}

export default Header
