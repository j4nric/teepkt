import React from "react";

const Header = () => {
  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info">Home</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Menu</a>
      </p>
      <p className="level-item has-text-centered">
        <img
          src="https://static.wixstatic.com/media/0568de_49c434c8aff340a58883e76ba8704b66~mv2.png/v1/fill/w_224,h_152,al_c,q_85,usm_0.66_1.00_0.01/logo-ttp-weiss.webp"
          alt=""
        />
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Reservations</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Contact</a>
      </p>
    </nav>
  );
};

export default Header;
