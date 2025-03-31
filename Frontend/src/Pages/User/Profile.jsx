import React, { useState } from 'react';


const Profile = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        MobileNo: '',
        Password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const slides = [
        {
            image: '/guest/child.png',
            text: 'We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for rehabilitation.',
        },
        {
            image: '/guest/bird.png',
            text: 'Providing food and shelter to homeless children through our support programs.',
        },
        {
            image: '/guest/child2.png',
            text: 'Collaborating with NGOs to ensure child education and a better future.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="bg-[#fde9d5] min-h-screen p-5 flex flex-col items-center">
            <div className="bg-[#fcd8b0] p-8 rounded-lg shadow-md w-full max-w-md text-center mb-8">
                <h3 className="text-2xl font-semibold mb-6">User Profile</h3>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
                        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="User Icon" className="w-5 mr-2" />
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                            className="w-full border-none outline-none text-base"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
                        <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email Icon" className="w-5 mr-2" />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                            className="w-full border-none outline-none text-base"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone Icon" className="w-5 mr-2" />
                        <input
                            type="text"
                            name="MobileNo"
                            placeholder="Mobile No"
                            value={formData.MobileNo}
                            onChange={handleChange}
                            required
                            className="w-full border-none outline-none text-base"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 bg-white">
                        <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Lock Icon" className="w-5 mr-2" />
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            required
                            className="w-full border-none outline-none text-base"
                        />
                    </div>
                    <button type="submit" className="bg-[#f5a25d] text-white py-2 px-4 rounded-md w-full mt-2 hover:bg-[#e0894c]">
                        Edit Profile
                    </button>
                </form>
            </div>

            <section className="mt-8 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Posts</h2>
                <div className="relative overflow-hidden flex justify-center items-center">
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#f5a25d] text-white p-2 rounded-full w-10 h-10 z-10 hover:bg-[#e0894c] flex items-center justify-center">
                        {"<"}
                    </button>
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full p-5 bg-[#fcd8b0] rounded-lg shadow-md text-center">
                                <img src={slide.image} alt={`Slide ${index}`} className="w-full max-w-xs mx-auto rounded-lg mb-4" />
                                <p>{slide.text}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f5a25d] text-white p-2 rounded-full w-10 h-10 z-10 hover:bg-[#e0894c] flex items-center justify-center">
                        {">"}
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#f5a25d]' : 'bg-gray-400'}`}
                        ></span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Profile;
