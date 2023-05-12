import React from 'react';
import { HiXCircle } from "react-icons/hi";
import Swal from 'sweetalert2';
const BookingSummary = ({ oldOrder,setOrder,order }) => {
    // console.log(oldOrder);
    const { _id, serviceTitle, serviceDate, serviceImg, totalPrice, advanceAmount } = oldOrder;

    const remainingPrice = parseFloat(totalPrice) - parseFloat(advanceAmount);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingOrder = order.filter(allOrder => allOrder._id !== id)
                            setOrder(remainingOrder) 
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <td>
                <span onClick={() => handleDelete(_id)}><HiXCircle className='h-6 w-6' /></span>
            </td>
            <td>
                <div className="w-24 h-14">
                    <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>
                <span className='font-semibold'>{serviceTitle}</span>
            </td>
            <td>
                <span className='font-semibold'>${remainingPrice}</span>
            </td>
            <td>
                <span className='font-semibold'>{serviceDate}</span>
            </td>
            <td>
                <button className='bg-primary px-3 py-1 rounded-lg text-white'>Pending</button>
            </td>
        </tr>

    );
};

export default BookingSummary;