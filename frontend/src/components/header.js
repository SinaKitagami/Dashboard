import React from 'react';
import Logo from '../img/sinalogo.png'
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} />
                <h1>ダッシュボード</h1>

            </div>
        );
    }
}
export default Header;