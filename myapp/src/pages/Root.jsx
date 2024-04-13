import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Header"

const Root = () => {

    useEffect(() => {

        document.title = "SAFQ"

    }, [])

    return (
        <>
            <Header />

            <div className="section">

                <Outlet />

            </div>
            
            <Footer />
        </>
    )
}

export default Root