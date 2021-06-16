import React from 'react'
import { Carousel } from 'react-bootstrap';
import './CarouselText.css';
export default function CarouselText() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="main-text">
                        <p style={{textAlign: "start", fontSize: "40px", fontWeight: "700"}}>
                            "
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, nihil dignissimos cum repellendus quae ut placeat numquam odio ad maiores itaque voluptatum, nesciunt vel quia inventore eos ab? Doloremque!</p> 

                    </div>

                    <Carousel.Caption>
                    <h3>John Doe</h3>
                    <p>CEO of Colorlib</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                         <p style={{textAlign: "start", fontSize: "40px", fontWeight: "700"}}>
                            "
                        </p>

                        <div className="main-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, nihil dignissimos cum repellendus quae ut placeat numquam odio ad maiores itaque voluptatum, nesciunt vel quia inventore eos ab? Doloremque!</p> 

                        </div>

                    <Carousel.Caption>
                    <h3>James Woodland</h3>
                    <p>Product Designer, Twitter</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <p style={{textAlign: "start", fontSize: "40px", fontWeight: "700"}}>
                            "
                        </p>

                 <div className="main-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, nihil dignissimos cum repellendus quae ut placeat numquam odio ad maiores itaque voluptatum, nesciunt vel quia inventore eos ab? Doloremque!</p> 
  
                 </div>

                    <Carousel.Caption>
                    <h3>Rob Smith</h3>
                    <p>Driver</p>
                    </Carousel.Caption>
                 </Carousel.Item>
            </Carousel>
        </div>
    )
}
