import React from 'react';
import Logo from '../images/images.png'

const Header = props => {
    return (
            <div className="row HeaderMaxHeight background-color-header">
                <div className="col-8">
                    <h1 className="mt-3 float-right-custom">Curator</h1>
                </div>
                <div className="col-4">
                    <img src={Logo} className="h-25 ml-3"/>
                </div>
            </div>
    )
}

export default Header
