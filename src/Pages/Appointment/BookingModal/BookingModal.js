import { format } from 'date-fns';
import { setDefaultOptions } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    //treatment is just another name of appointment Options with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        console.log(date, name, email, slot, phone);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="name" placeholder='Your name' className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder='Email Address' className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder='Phone Number' className="input w-full input-bordered" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;