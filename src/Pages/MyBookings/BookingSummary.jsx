import React from 'react';
import { HiXCircle } from "react-icons/hi";
import Swal from 'sweetalert2';
const BookingSummary = ({ oldOrder, setOrder, order }) => {
    // console.log(oldOrder);
    const { _id, serviceTitle, serviceDate, serviceImg, totalPrice, advanceAmount, status } = oldOrder;

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
    const handleConfirm = id => {
        console.log(id);
        fetch(`https://cars-doctors-server-saifulislam1431.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = order.filter(or => or._id !== id)
                    const updated = order.find(or => or._id === id)
                    updated.status = "confirm";
                    const newOrder = [updated, ...remaining]
                    setOrder(newOrder);
                    Swal.fire({
                        title: 'success!',
                        text: 'Order Confirmed',
                        icon: 'success',
                        confirmButtonText: 'Cool'
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
                {
                    status === "confirm" ? <button className='border border-success px-3 py-1 rounded-lg text-green-600 font-semibold'>Confirmed</button> :
                        <button className='bg-primary px-3 py-1 rounded-lg text-white' onClick={() => handleConfirm(_id)}>Tap to confirm</button>
                }
            </td>
        </tr>

    );
};

export default BookingSummary;