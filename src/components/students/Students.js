import React from 'react';

const Students = (props) => {
    const { name, img, seller, price, key } = props.student
    return (
        <div className="col">
            <div className="card h-100 text-start">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Department : {seller}</p>
                    <p>Roll No: {key}</p>
                    <p>Budget: {price}</p>
                </div>
                <button onClick={() => props.addToList(props.student)} className='btn btn-success w-75 my-3 mx-auto'>Add To Team</button>
            </div>
        </div>
    );
};

export default Students;