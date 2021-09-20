import React from 'react';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="py-2 text-center text-white text-xs">
        <div className="flex justify-center gap-4 my-10">
          <a href="https://www.instagram.com/kahaircolorist/?utm_medium=copy_link"><FaInstagram size="30px" /></a>
          {/* <a href="https://www.instagram.com/kahaircolorist/?utm_medium=copy_link"> <FaFacebookSquare size="30px" /></a> */}
        </div>
        © {new Date().getFullYear()} 
        <br></br>
        created with <span role="img">☕</span>{" "}
        by
        <a href="kaitlynbreuil.com"> Katie Breuil</a>
      </footer>
    )
}
