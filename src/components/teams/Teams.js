import React from 'react';

const Teams = (props) => {
    console.log(props);
    const { list } = props
    let total = 0
    for (const student of list) {
        total = student.price + total
    }
    return (
        <div>
            <h1>{list.length}</h1>
            <h2>{total}</h2>
            <ul>
                {
                    list.map(student =>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={student.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{student.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default Teams;