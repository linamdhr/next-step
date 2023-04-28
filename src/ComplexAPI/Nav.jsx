import {AiFillShopping} from "react-icons/ai";
import {Link} from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";
function Nav(){
return(
    <nav>
        <Link to={"/"}>
            <h1>Wear</h1>

        </Link>
        <Link to={"/checkout"}>
            <div className="cart">
                <AiFillShopping>
                    <span>0</span>
                </AiFillShopping>
            </div>
        </Link>
    </nav>
);
}
export default Nav;