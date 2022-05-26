import React from 'react';
import './header.css';
import { Link }  from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }] = useStateValue();

  return (
    <nav className="header">
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </Link>

    <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <AiOutlineSearch className="header__searchIcon"/>
    </div>

        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello User</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>

            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping basket icon */}
                    <BsCart4 className="basket"/>
                    {/* Number of items in basket */}
                    <span className="header__optionLineTwo header__basketCount">
                        {basket.length}
                    </span>
                </div>
            </Link>
        </div>
    </nav>
  );
}

export default Header