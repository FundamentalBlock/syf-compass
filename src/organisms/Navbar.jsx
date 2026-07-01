import { USER } from "../data.js";
//import amazonLogo from "../assets/amazon-logo.png";

export default function Navbar({ cartCount, onNav }) {
  return (
    <div>
      <div className="navbar">
        <a className="logo" onClick={() => onNav("home")}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvjbMrCKzZa6tSlaQY7JCgln5YitkWxDhkz_igTxwAg&s=10" alt="Amazon" className="logo-img" />
        </a>
        <a className="location">
          <b>Deliver to {USER.first}</b>
          {USER.city} {USER.zip}
        </a>
        <div className="search-bar">
          <select>
            <option>All</option>
          </select>
          <input placeholder="Search demo products" />
          <button>🔍</button>
        </div>
        <a className="lang">EN ▾</a>
        <a className="account" onClick={() => onNav("home")}>
          Hello, {USER.first}
          <b>Account & Lists</b>
        </a>
        <a className="account">
          Returns
          <b>& Orders</b>
        </a>
        <a className="cart-link" onClick={() => onNav("cart")}>
          <span className="cart-count">{cartCount}</span>
          🛒 Cart
        </a>
      </div>
      <div className="subnav">
        <a>
          <span style={{ fontSize: 16 }}>☰</span> All
        </a>
        <a className="pill">demo shopping</a>
        <a className="pill solid">Join Plus</a>
        <a onClick={() => onNav("home")}>Today&apos;s Deals</a>
        <a>Electronics</a>
        <a>Home</a>
        <a>Fashion</a>
        <a>Gift Cards</a>
        <a>SYF Compass sign-up</a>
      </div>
    </div>
  );
}
