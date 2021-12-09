import "./../component/css/Dashboard.css"
import Header from "../component/layout/header";
import Navigation from "../component/layout/navigation"

const Dashboard = () => {
    return (
        <>
            <Header />
            <Navigation />
            {/* Body */}
            <div className="page_content">
                <div className="Dashboard">
                    <div className="cards">
                        <div className="card mt-4">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Products</h3>
                            <i className='bx bx-desktop'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Customers</h3>
                            <i className='bx bx-user'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Views</h3>
                            <i className='bx bx-show'></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard