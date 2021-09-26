import React from 'react';
import "./MovieDetails.css";

const MovieDetails = (props) => {
    const { details } = props;
    console.log(props)

    let total = 0;
    for (const detail of details) {
        total = total + detail.price;
    }
    return (
        <div>
            <div className="details-head">
                <h3>Movie Selected: {details.length}</h3>
                <h3>Total Price: {total}$</h3>
                <h4 className="mb-4">You have Bought: </h4>
                <ul>
                    {
                        details.map(detail => {
                            return (
                                <div className="card h-100 " id="detail-card">
                                    <img src={detail.image} className="card-img-top w-75 mx-auto p-2" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title p-2">Name: {detail.name}</h5>
                                        <h6 className="card-title p-2">Price: {detail.price}</h6>
                                        <button className="btn btn-warning button"> <a href={detail.trailer}>Watch Trailer</a></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default MovieDetails;