import React from 'react';

const Teams = (props) => {

    const { list } = props

    let total = 0
    for (const student of list) {
        total = student.budget + total
    }
    return (
        <div>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td><i className="fas fa-users me-1"></i> Total Students : </td>
                        <td className='fw-bold' style={{ color: '#FE676D' }}> {list.length}</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-dollar-sign me-1"></i> Total Money : </td>
                        <td className='fw-bold' style={{ color: '#FE676D' }}>{total}</td>
                    </tr>
                </tbody>
            </table>

            <ul>
                {
                    list.map(student =>
                        <div className="mb-1" style={{ border: '3px solid #FE676D' }} key={student.mobile}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={student.img} className="img-fluid" alt={student.name} style={{ width: '100px' }} />
                                </div>
                                <div className="col-md-8 d-md-flex align-items-center ps-2" style={{ color: '#FE676D' }}>
                                    <h6 className='d-md-block d-none'>{student.name}</h6>
                                    <h6 className='d-md-none display-6 fw-bold'>{student.name}</h6>
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