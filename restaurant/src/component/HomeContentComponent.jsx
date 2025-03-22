import React from 'react'
import bistro_grow from '../images/restaurant/bistro_grow.jpg'
import bistro_grow2 from '../images/restaurant/bistro_grow2.jpg'
import eyecatch1 from '../images/紹介/eyecatch1.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function HomeContentComponent() {
    return (
        <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{position:'absolute',top:'80px',left:'50%',transform:'translateX(-50%)',height:'88%',width:'100%'}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner" style={{height:'100%'}}>
                <div className="carousel-item active" style={{height:'100%',width:'100%',boxSizing:'border-box'}}>
                    <img src={bistro_grow} className="d-block imgS" style={{width:'100%',height:'100%'}}/>
                </div>
                <div className="carousel-item" style={{height:'100%',width:'100%',boxSizing:'border-box'}}>
                    <img src={bistro_grow2} className="d-block imgS" style={{width:'100%',height:'100%'}}/>
                </div>
                <div className="carousel-item" style={{height:'100%',width:'100%',boxSizing:'border-box'}}>
                    <img src={eyecatch1} className="d-block imgS" style={{width:'100%',height:'100%'}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}

export default HomeContentComponent