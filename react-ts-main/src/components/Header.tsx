import "./css.css"

const Header = () => {
    return (
        <div className="container">
            <div style={{ textAlign: 'right' }} className="mt-3">
                <a className="btn btn-primary" href="/login">Login</a>
                <a className="btn btn-primary mx-3" href="/signup">Signup</a>
            </div>
            <div className="flex">
                <div>
                    <img className="logo" src="/logo2.png" alt="" />
                </div>
                <nav>
                    <ul className="ul">
                        <li><a href="">Home</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Detail</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>

            </div>

            <div className="banner"><img style={{ width: "100%", height: "400px" }} src="https://img.pikbest.com/backgrounds/20220119/office-desk-computer-blue-business-background_6235895.jpg!bw700" alt="" /></div>
        </div >
    )
}

export default Header;