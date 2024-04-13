import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";
import { popular } from "../data";
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";


export default function HomePage() {

    const productStorage = [];


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://646bafb47d3c1cae4ce42749.mockapi.io/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
    }, []);

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')


    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLocaleLowerCase())
    )
    const sortProducts = (sorting, products) => {

        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => a.price.localeCompare(b.price))
            case 'priceDescending':
                return [...products].sort((a, b) => b.price.localeCompare(a.price))
            case 'nameA':
                return [...products].sort((a, b) => a.title.localeCompare(b.title))
            case 'nameZ':
                return [...products].sort((a, b) => b.title.localeCompare(a.title))
            default:
                return products
        }

    }

    const fullSorting = sortProducts(sorting, filteredProducts)


    return (
        <>
            <div className="hello">
                <h1>Товары для дома</h1>
            </div>

            <div className="popular">
                <Slider></Slider>
            </div>

            <div className="hello">
                <h1>Все товары</h1>
            </div>

            <div className="settings">
                <Search query={query} onChangeQuery={onChangeQuery} />

                <Filters sorting={sorting} onSortingChange={onSortingChange} />
            </div>

            <div className="catalog">
                {
                    fullSorting.length ? (
                        fullSorting.map((product, index) => (
                            <Product key={index} {...product} />
                        ))
                    ) : (
                        <h2>По вашему запросу ничего не найдено!</h2>
                    )}
            </div>
        </>
    )
}