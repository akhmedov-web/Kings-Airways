import React,{useEffect,useState} from 'react'
import langs from "../base/lang"
import Loader from '../images/loader.gif'
export default function Book({lang, placeOne, placeTwo, status}) {
  const [loading,setLoading]=useState("true");
  useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },5000)
  },[])
  console.log(loading);
  return (
    <>
    <div className='loader' style={loading?{display:"flex"}:{display:"none"}}>
      <img src={Loader} alt="loader"/>
    </div>
    <div className="booking_page d-flex flex-column justify-content-end">
      <div className='offers container flex-wrap justify-content-between flex-wrap' style={loading?{display:"none"}:{display:"flex"}}>
        <div className={status=="Round"?"offer_card py-2 px-4 d-flex flex-column justify-content-center":"offer_card py-2 px-4 d-flex flex-column justify-content-center w-100"}>
          <div className='d-flex my-2'>
            <li className='flight_name me-2'>HY 273</li>
            <li style={{listStyleType:"none"}} className="text-capitalize">{placeOne} → {placeTwo}</li>
          </div>
          <div className='d-flex align-items-center justify-content-between my-2'>
            <div>
              <h2>16:00</h2>
              <h6>19 {langs[lang].month}</h6>
            </div>
            <div className='planes_anime d-flex justify-content-between'>
            <i class="fa-solid fa-plane-departure"></i>
            <i class="fa-solid fa-plane-arrival"></i>
            </div>
            <div>
              <h2>18:30</h2>
              <h6>19 {langs[lang].month}</h6>
            </div>
          </div>
        </div>
        <div className={status=="Round"?'offer_card py-2 px-4 d-flex flex-column justify-content-center':'offer_card py-2 px-4 d-flex flex-column justify-content-center d-none'}>
          <div className='d-flex my-2'>
            <li className='flight_name me-2'>HY 274</li>
            <li style={{listStyleType:"none"}} className="text-capitalize">{placeTwo} → {placeOne}</li>
          </div>
          <div className='d-flex align-items-center justify-content-between my-2'>
            <div>
              <h2>21:00</h2>
              <h6>26 {langs[lang].month}</h6>
            </div>
            <div className='planes_anime d-flex justify-content-between'>
            <i class="fa-solid fa-plane-departure"></i>
            <i class="fa-solid fa-plane-arrival"></i>
            </div>
            <div>
              <h2>23:30</h2>
              <h6>26 {langs[lang].month}</h6>
            </div>
          </div>
        </div>
      </div>
        <div className='container flex-wrap justify-content-between' style={loading?{display:"none"}:{display:"flex"}}>
          <div className="fare_card d-flex flex-column justify-content-between">
            <div>
            <h6>{langs[lang].flightStatus1}</h6>
            <p>{langs[lang].seats} 3</p>
            </div>
            <div className='facility py-1'>
            <li>
              <i class="fa-solid fa-briefcase me-2"></i>
              <span>{langs[lang].offer1} 10kg</span>
            </li>
            <li>
            <i class="fa-solid fa-suitcase-rolling me-2"></i>
              <span>{langs[lang].offer2} 40kg.</span>
            </li>
            <li>
            <i class="fa-solid fa-arrows-rotate me-2"></i>
              <span>{langs[lang].offer3}</span>
            </li>
            <li>
            <i class="fa-solid fa-reply-all me-2"></i>
              <span>{langs[lang].offer4}</span>
            </li>
            <li>
              <i class="fa-solid fa-check me-2"></i>
              <span>KingPlus - 4373 {langs[lang].offer5}</span>
            </li>
            </div>
            <div className='fare_price d-flex flex-column align-items-end'>
              <h4>6 925 737</h4>
              <p>UZS</p>
            </div>
            <button className='fare_btn mx-auto d-block'>{langs[lang].offerBtn}</button>
          </div>
          <div className="fare_card d-flex flex-column justify-content-between">
            <div>
            <h6>{langs[lang].flightStatus2}</h6>
            <p>{langs[lang].seats} 7</p>
            </div>
            <div className='facility py-1'>
            <li>
              <i class="fa-solid fa-briefcase me-2"></i>
              <span>{langs[lang].offer1} 8kg</span>
            </li>
            <li>
            <i class="fa-solid fa-suitcase-rolling me-2"></i>
              <span>{langs[lang].offer2} 35kg.</span>
            </li>
            <li>
            <i class="fa-solid fa-arrows-rotate me-2"></i>
              <span>{langs[lang].offer3}</span>
            </li>
            <li>
            <i class="fa-solid fa-reply-all me-2"></i>
              <span>{langs[lang].offer4}</span>
            </li>
            <li>
              <i class="fa-solid fa-check me-2"></i>
              <span>KingPlus - 3364 {langs[lang].offer5}</span>
            </li>
            </div>
            <div className='fare_price d-flex flex-column align-items-end'>
              <h4>5 143 112</h4>
              <p>UZS</p>
            </div>
            <button className='fare_btn mx-auto d-block'>{langs[lang].offerBtn}</button>
          </div>
          <div className="fare_card d-flex flex-column justify-content-between">
            <div>
            <h6>{langs[lang].flightStatus2}</h6>
            <p>{langs[lang].seats} 5</p>
            </div>
            <div className='facility py-1'>
            <li>
              <i class="fa-solid fa-briefcase me-2"></i>
              <span>{langs[lang].offer1} 8kg</span>
            </li>
            <li>
            <i class="fa-solid fa-suitcase-rolling me-2"></i>
              <span>{langs[lang].offer2} 35kg.</span>
            </li>
            <li>
            <i class="fa-solid fa-arrows-rotate me-2"></i>
              <span>{langs[lang].offer3}</span>
            </li>
            <li>
            <i class="fa-solid fa-reply-all me-2"></i>
              <span>{langs[lang].offer4}</span>
            </li>
            <li>
              <i class="fa-solid fa-check me-2"></i>
              <span>KingCoin - 3028 {langs[lang].offer5}</span>
            </li>
            </div>
            <div className='fare_price d-flex flex-column align-items-end'>
              <h4>3 035 279</h4>
              <p>UZS</p>
            </div>
            <button className='fare_btn mx-auto d-block'>{langs[lang].offerBtn}</button>
          </div>
          <div className="fare_card d-flex flex-column justify-content-between">
            <div>
            <h6>{langs[lang].flightStatus2}</h6>
            <p>{langs[lang].seats} 5</p>
            </div>
            <div className='facility py-1'>
            <li>
              <i class="fa-solid fa-briefcase me-2"></i>
              <span>{langs[lang].offer1} 8kg</span>
            </li>
            <li>
            <i class="fa-solid fa-suitcase-rolling me-2"></i>
              <span>{langs[lang].offer2} 35kg.</span>
            </li>
            <li>
            <i class="fa-solid fa-arrows-rotate me-2"></i>
              <span>{langs[lang].offer3}</span>
            </li>
            <li style={{color:"#F23D5B"}}>
            <i class="fa-solid fa-reply-all me-2"></i>
              <span>{langs[lang].offer4}</span>
            </li>
            <li>
              <i class="fa-solid fa-check me-2"></i>
              <span>KingCoin - 3028 {langs[lang].offer5}</span>
            </li>
            </div>
            <div className='fare_price d-flex flex-column align-items-end'>
              <h4>2 685 981</h4>
              <p>UZS</p>
            </div>
            <button className='fare_btn mx-auto d-block'>{langs[lang].offerBtn}</button>
          </div>  
        </div>
    </div>
    </>
  )
}
