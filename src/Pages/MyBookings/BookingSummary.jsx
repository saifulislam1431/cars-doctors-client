import React from 'react';
import { HiXCircle } from "react-icons/hi";
const BookingSummary = ({order}) => {
    console.log(order);
    const{serviceTitle,serviceDate,serviceImg,totalPrice,advanceAmount} = order;
    const remainingPrice = parseFloat(totalPrice) - parseFloat(advanceAmount);
    return (
        <tr>
            <td>
                <HiXCircle className='h-6 w-6'/>
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