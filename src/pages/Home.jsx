import React, { useState } from 'react';
import langs from "../base/lang.js";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home({ lang, placeOne, setPlaceOne, placeTwo, setPlaceTwo, status, setStatus }) {
    const [adultsNum, setAdultsNum] = useState(1);
    const [childrenNum, setChildrenNum] = useState(0);
    const [babiesNum, setBabiesNum] = useState(0);
    const [dateOne,setDateOne]=useState("");
    const [dateTwo,setDateTwo]=useState("");
    if (adultsNum < 0) {
        setAdultsNum(0);
    } if (childrenNum < 0) {
        setChildrenNum(0);
    } if (babiesNum < 0) {
        setBabiesNum(0);
    }
    const notify = () => toast.error('Fill all forms!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    console.log(dateOne);
    return (
        <div className='home'>
            <div className="banner">
                <div className="container">
                    <h3 className="text-light fw-normal text-uppercase">{langs[lang].sayHello}</h3>
                    <h1 className="text-light">{langs[lang].bannerText}</h1>
                    <div className='booking_area'>
                        <div className='d-flex my-3'>
                            <div className='d-flex align-items-center mx-3'>
                                <input
                                    className='tripTypeRadio me-1'
                                    type="radio" name="tripType"
                                    onChange={(e) => setStatus("Round")}
                                    checked={status == "Round" ? true : false}
                                />
                                <label className='tripTypeText text-light'>{langs[lang].flightType1}</label>
                            </div>
                            <div className='d-flex align-items-center mx-3'>
                                <input
                                    className='tripTypeRadio me-1'
                                    type="radio" name="tripType"
                                    onChange={() => setStatus("One")}
                                    checked={status == "One" ? true : false}
                                />
                                <label className='tripTypeText text-light'>{langs[lang].flightType2}</label>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-around w-100 my-3'>
                            <div className='booking_places'>
                                <input
                                    type="text"
                                    placeholder={langs[lang].place1}
                                    value={placeOne}
                                    onChange={(e) => setPlaceOne(e.target.value)}
                                    className="px-3 text-capitalize"
                                />
                                <div>
                                    <button onClick={() => { setPlaceOne(placeTwo), setPlaceTwo(placeOne) }}><i class="fa-solid fa-rotate"></i></button>
                                </div>
                                <input
                                    type="text"
                                    placeholder={langs[lang].place2}
                                    value={placeTwo}
                                    onChange={(e) => setPlaceTwo(e.target.value)}
                                    className="px-3 text-capitalize"
                                />
                            </div>
                            <div className='booking_dates'>
                                <input
                                    type="text"
                                    onFocus={(e) => e.target.type = "date"}
                                    placeholder={langs[lang].date1}
                                    className="px-3"
                                    value={dateOne}
                                    onChange={(e)=>setDateOne(e.target.value)}
                                />
                                <div>
                                    <button><i class="fa-solid fa-calendar-days"></i></button>
                                </div>
                                <input
                                    type="text"
                                    onFocus={(e) => e.target.type = "date"}
                                    placeholder={langs[lang].date2}
                                    style={status == "One" ? { cursor: "not-allowed" } : { cursor: "default" }}
                                    disabled={status == "One" ? true : false}
                                    className="px-3"
                                    value={dateTwo}
                                    onChange={(e)=>setDateTwo(e.target.value)}
                                />
                            </div>
                            <div className='further_information py-1 px-3 d-flex flex-column justify-content-center' data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">
                                <span className='d-block further_information-text1'>{adultsNum + childrenNum + babiesNum} {langs[lang].passenger}</span>
                            </div>

                            <Link
                                onClick={() => notify()}
                                to={placeOne.length && placeTwo.length && dateOne.length || dateTwo.length > 1 ? "/booking" : ""}
                                className='flight_search-btn'>{langs[lang].searchText}
                                <i class="fa-solid fa-arrow-right mx-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            {/* Same as */}
                            <ToastContainer />
            </div>
            <div
                class="modal fade"
                id="staticBackdrop"
                data-mdb-backdrop="static"
                data-mdb-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Numbers of passengers</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex align-items-center justify-content-between">
                                    <div class="text-inner d-flex flex-column"><strong>Adults</strong><small>&gt;12 y.o</small></div>
                                    <div class="counter d-flex w-25 justify-content-around align-items-center"><span class="min" onClick={() => setAdultsNum(adultsNum - 1)}><i class="fa-solid fa-circle-minus"></i></span><strong class="num">{adultsNum}</strong><span class="max" onClick={() => setAdultsNum(adultsNum + 1)}><i class="fa-solid fa-circle-plus"></i></span></div>
                                </li>
                                <li class="list-group-item d-flex align-items-center justify-content-between">
                                    <div class="text-inner d-flex flex-column"><strong>Children</strong><small>&lt;12 y.o</small></div>
                                    <div class="counter d-flex w-25 justify-content-around align-items-center"><span class="min" onClick={() => setChildrenNum(childrenNum - 1)}><i class="fa-solid fa-circle-minus"></i></span><strong class="num">{childrenNum}</strong><span class="max" onClick={() => setChildrenNum(childrenNum + 1)}><i class="fa-solid fa-circle-plus"></i></span></div>
                                </li>
                                <li class="list-group-item d-flex align-items-center justify-content-between">
                                    <div class="text-inner d-flex flex-column"><strong>Babies</strong><small>&lt;2 y.o</small></div>
                                    <div class="counter d-flex w-25 justify-content-around align-items-center"><span class="min" onClick={() => setBabiesNum(babiesNum - 1)}><i class="fa-solid fa-circle-minus"></i></span><strong class="num">{babiesNum}</strong><span class="max" onClick={() => setBabiesNum(babiesNum + 1)}><i class="fa-solid fa-circle-plus"></i></span></div>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
