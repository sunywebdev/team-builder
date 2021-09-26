import React from 'react';
import './Students.css'

const Students = (props) => {
    const { name, semester, department, roll, budget, img, facebook, mobile, email } = props.student
    return (
        <div className="col">
            <div className="card h-100 text-start p-2">
                <img src={img} className="img img-fluid rounded-circle mx-auto mb-3 mt-1" alt="..." style={{ width: '100px' }} />
                <div className="card-body p-0">
                    <table className="table m-0" >
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>{department}</td>
                            </tr>
                            <tr>
                                <td>Semester</td>
                                <td>{semester}</td>
                            </tr>
                            <tr>
                                <td>Roll No</td>
                                <td>{roll}</td>
                            </tr>
                            <tr>
                                <td>Fee</td>
                                <td>{budget}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center my-1">
                        <a href={facebook} type="button" className="btn rounded-circle m-2"> <i className="fab fa-facebook"></i> </a>
                        <a href={mobile} type="button" className="btn rounded-circle m-2"> <i className="fas fa-phone-alt"></i> </a>
                        <a href={email} type="button" className="btn rounded-circle m-2"> <i className="fas fa-at"></i> </a>
                    </div>
                </div>
                <button onClick={() => props.addToList(props.student)} className='btn w-75 mx-auto'><i class="fas fa-user-plus me-2"></i>Add To Team</button>
            </div>
        </div>
    );
};

export default Students;