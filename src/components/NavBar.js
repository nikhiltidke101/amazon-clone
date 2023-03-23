import React, { useState } from "react";
import "./NavBar.css"

const NavBar = () => {
  const [flags, setFlags] = useState([
    {
      name: "India",
      code: "IN",
      emoji: "IN",
      unicode: "U+1F1E6 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    },
    {
      name: "Ascension Island",
      code: "AC",
      emoji: "🇦🇨",
      unicode: "U+1F1E6 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
    },
    {
      name: "Andorra",
      code: "AD",
      emoji: "🇦🇩",
      unicode: "U+1F1E6 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    },
    {
      name: "United Arab Emirates",
      code: "AE",
      emoji: "🇦🇪",
      unicode: "U+1F1E6 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    },
    {
      name: "Afghanistan",
      code: "AF",
      emoji: "🇦🇫",
      unicode: "U+1F1E6 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
    },
    {
      name: "Antigua & Barbuda",
      code: "AG",
      emoji: "🇦🇬",
      unicode: "U+1F1E6 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
    },
    {
      name: "Anguilla",
      code: "AI",
      emoji: "🇦🇮",
      unicode: "U+1F1E6 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    }
  ]);
  const [selectedFlag, setSelectedFlag] = useState({
    name: "Ascension Island",
    code: "AC",
    emoji: "🇦🇨",
    unicode: "U+1F1E6 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
  });
  const [flagOpen, setFlagOpen] = useState(false);

  return (
    <>
    <div className="header-container">
      {/* Image Wrapper */}
      <div>
        <img className="main-logo" src="./pngwing.com.png" alt="" />
      </div>

      {/* Location Wrapper */}
      <div className="location-wrapper">
        <span class="material-symbols-outlined">
          pin_drop
        </span>
        <div className="div-wrapper">
          <div>Deliver, Nikhil</div>
          <div className="strong-heading">Chennai 60041</div>
        </div>
      </div>

      {/* Input Field */}
      <div className="input-wrapper">
        <span className="all">All</span>
        <input type="text" />
        <span class="material-symbols-outlined">
          search
        </span>
      </div>

      {/* Flag */}
      <div className="flag-wrapper">
        <div onClick={() => setFlagOpen(!flagOpen)} className="selected-flag-wrapper">
          <img className="small-image" src={selectedFlag.image} alt="" />
          <span className="strong-heading">{selectedFlag.code}</span>
        </div>

        {flagOpen && (
          <div className="flag-class-wrapper">
            {
              flags.map((flag) => {
                return (
                  <div className="flags" onClick={() => {
                      setSelectedFlag({ ...flag });
                      setFlagOpen(!flagOpen);
                  }}>
                      <div>
                        <img className="small-image" src={flag.image} alt="" srcset="" />
                      </div>
                      <span>
                      {flag.name} - {flag.code}
                      </span>
                  </div>
                );
              })
            }
          </div>
        )}
      </div>

      {/* Account */}
      <div className="div-wrapper">
        <div>Hello, Nikhil</div>
        <div className="strong-heading">Account & Lists</div>
      </div>

      {/* Orders */}
      <div className="div-wrapper">
        <div>Returns</div>
        <div className="strong-heading">& Orders</div>
      </div>

      {/* Cart */}
      <div className="cart-wrapper">
        <span class="material-symbols-outlined">
          shopping_cart
        </span>
        <span className="cart-heading strong-heading">Cart</span>
      </div>
    </div>

    <div className="secondary-navbar">
      <div className="all-menu">
          <span class="material-symbols-outlined">
            menu
          </span>
          <div className="all">All</div>
      </div>
      <div className="other-items">
        <div>Fashion</div>
        <div>Entertainment</div>
        <div>Electronics</div>
        <div>Groceries</div>
        <div>Fresh</div>
        <div>Sell</div>
        <div>Gift Card</div>
        <div>Baby</div>
        <div>Fashion</div>
        <div>Entertainment</div>
        <div>Electronics</div>
        <div>Groceries</div>
        <div>Fresh</div>
        <div>Sell</div>
        <div>Gift Card</div>
        <div>Baby</div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
