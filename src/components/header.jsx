import React from 'react';
import Logo from '../images/images.png'
import { Link } from "react-router-dom";


const Header = () => {
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
            <div className="col-4">
                <div className="dropdown">
                    <button className="btn btn-secondary mt-3 dropdown-toggle float-left" onClick={() => { handleDropdownClick() }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </button>
                    <div className={dropDownStatus} aria-labelledby="dropdownMenuButton">
                        <Link className="no-underline dropdown-item" to="/" onClick={() => { handleDropdownClick() }}>Balance</Link>
                        <Link className="no-underline dropdown-item" to="ticker" onClick={() => { handleDropdownClick() }}>Ticker</Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <h1 className="mt-2 text-center">Curator</h1>
            </div>
            <div className="col-4">
                <img src={Logo} alt="" className="h-25 ml-3" />
            </div>
        </div>
    )
}

export default Header
