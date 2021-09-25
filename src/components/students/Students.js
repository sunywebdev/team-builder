import React from 'react';

const Students = (props) => {
    const { name, img, seller, price } = props.student
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{seller}</p>
                    <p className="card-text">{price}</p>
                </div>
                <button onClick={() => props.addToList(props.student)} className='btn btn-success w-75 my-3 mx-auto'>Add To List</button>
            </div>
        </div>
    );
};

export default Students;