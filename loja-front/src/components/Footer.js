import React, { useEffect, useState } from "react";

const Footer = () => {


  return (
    <footer class="footer">
      <div class="footer-content">
        <nav>
          <ul class="site-map">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
        <p>&copy; <span id="year">2025</span>Loja teste</p>
      </div>
    </footer>
  );
};

export default Footer;
