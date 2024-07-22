import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'contacts'), formData);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                number: ''
            });
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Failed to send message. Please try again.');
        }
    };
   
    return (
        <div className="flex flex-col items-center text-base">
            <div className="flex justify-center items-center self-stretch lg:px-16 py-16 w-full bg-black  max-md:max-w-full">
                <div className="flex flex-col items-center mt-3.5 max-w-full w-[1026px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/cropped-Untitled-design-2024-05-28T193342.521.png"
                        className="aspect-[0.99] w-[79px]"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/The-Rahul-Awasthi_AK-04.png"
                        className="mt-5 max-w-full aspect-[7.69] w-[342px]"
                    />
                    <div className="mt-8 text-4xl font-extrabold text-center text-green-500 uppercase leading-[55px] max-md:max-w-full">
                        Fill the Form to{" "}
                        <span className="text-green-500">Register now</span>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center px-11 pt-11 pb-16 mt-8 max-w-full font-medium text-black border-2 border-yellow-400 border-dashed rounded-[50px] w-[450px] max-md:px-5">
                        <input type='text'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required placeholder='Name' className="justify-center items-start p-4 whitespace-nowrap bg-white rounded-xl border border-solid border-stone-500 max-md:pr-5" />
                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required placeholder='Email' className="justify-center items-start p-4 whitespace-nowrap bg-white rounded-xl border border-solid border-stone-500 max-md:pr-5" />
                        <input type='text'
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required placeholder='WhatsApp Number' className="justify-center items-start p-4 whitespace-nowrap bg-white rounded-xl border border-solid border-stone-500 max-md:pr-5" />

                        <button type='submit' className="cursor-pointer justify-center items-center px-16 py-4 text-center text-pink-600 bg-yellow-400 rounded-xl leading-[150%] max-md:px-5">
                            Submit Now
                        </button>
                    </form>
                    <div className="self-stretch mt-7 font-light text-center text-white leading-[219%] max-md:max-w-full">
                        🔐 Your Data Is Safe With Us. We Follow Strict Privacy Policy. We
                        Hate Spamming And Your Email And Contact Will Not Be Shared.
                    </div>
                </div>
            </div>
            <div className="mt-16 font-light text-center text-white leading-[219%] max-md:mt-10 max-md:max-w-full">
                By Registering You Are Agreeing To Our Privacy Policy
            </div>
            <div className="mt-16 font-light text-center text-white leading-[219%] max-md:mt-10">
                ® 2024 The Rahul Awasthi | Designed by TISWAM
            </div>
        </div>
    )
}

export default Register