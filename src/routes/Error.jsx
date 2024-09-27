
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Error = () => {
    return (
        <>
            <Nav></Nav>
            <div className="body">
                <div className="error-content">
                    <div>
                        {/* <h1><img className="img" src={iconeSkate}></img></h1> */}
                        <h1 className="text">- 404 - Page Not Found</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Error