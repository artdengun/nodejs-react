import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const NavigationFooter = () => {
    return (
        <div>
            <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Deni Gunawan</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
            </p>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Links
            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Links
            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        <MDBCol md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Links
            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Mau Belajar Programming? </h5>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="btn btn-danger btn-rounded active">
                                <i className="fab fa-youtube"> Tonton Disini </i> </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a className=" btn-floating btn-primary btn-sm btn-rounded  btn-fb mx-1 active">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-danger btn-rounded btn-sm btn-tw mx-1 active">
                                <i className="fab fa-instagram"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-primary btn-rounded btn-sm mx-1 active">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-dark btn-rounded btn-sm btn-floating  btn-github mx-1 active">
                                <i className="fab fa-github"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/artdengun"> Deni Gunawan </a>
                    </MDBContainer>
                </div>
            </MDBFooter>

        </div>
    );
}
export default NavigationFooter;
