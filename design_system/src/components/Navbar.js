import { useHistory } from "react-router";

function Navbar() {
    let history=useHistory();
    function logout(){
        sessionStorage.removeItem("token");
        history.push("/");
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div class="container-fluid p-3 ">
                            <a href="#">
                                <img class="px-2" src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"
                                    height="40px" />
                            </a>
                            <span class="headerText"> Intranet Portal</span>
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ float: "right" }}>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav"  >
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Message Board</a>
                                <a class="nav-link" href="#">Tides</a>
                                <a class="nav-link" href="#">Appalauds</a>
                                <a class="nav-link" href="#">Gallery</a>
                                <a class="nav-link" href="#">Jobs</a>
                                <a class="nav-link" onClick={logout}>Logout</a>
                                <a class="nav-link" href="#"><img src="menu1.png"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;