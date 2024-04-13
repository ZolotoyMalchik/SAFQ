import "./ModelContent.css"
import Product from "../Product/Product"
import { useEffect, useState } from "react";

export default function ModelContent({ closeModal }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    function removeFromCart(title) {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            let productsArray = JSON.parse(storedProducts);

            // Удаляем товар из массива
            const updatedProducts = productsArray.filter(p => p.title !== title);

            // Обновляем localStorage
            localStorage.setItem('products', JSON.stringify(updatedProducts));

            // Обновляем состояние products
            setProducts(updatedProducts);
        }
    }

    return (
        <>
            <div className="modal">
                <div className="modal-head">
                    <div className="modal-head-left">
                        <h1>Корзина</h1>
                    </div>
                </div>
                <div className="modal-container">
                    {products.map((product, index) => (
                        <div key={index}>
                            <Product {...product} />
                            <button className="main-btn" onClick={() => removeFromCart(product.title)}>Убрать из корзины</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}