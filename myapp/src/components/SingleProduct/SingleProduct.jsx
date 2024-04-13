import { NavLink } from "react-router-dom"
import "./SingleProduct.css"
import Button from "../Button/Button"

export default function SingleProduct({ id, title, price, preview }) {
    


    return (
        <>


                <div className="product">
                    <img src={preview} alt="" className="product-img" />
                    <div className="product-title">{title}</div>
                    <div className="product-price">{price} $</div>

                </div>


        </>
    )
}