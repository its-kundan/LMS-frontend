import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowRight } from 'react-icons/fi';

import { isEmail, isValidPassword } from '../Helpers/regexMatcher';
import HomeLayout from '../Layouts/HomeLayout';
import { createAccount } from '../Redux/Slices/AuthSlice';

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
        previewImage: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        });
    }

    function getImage(event) {
        event.preventDefault();
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setSignupData({
                    ...signupData,
                    avatar: uploadedImage,
                    previewImage: this.result
                });
            });
        }
    }

    async function createNewAccount(event) {
        event.preventDefault();
        if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("Please fill all the details");
            return;
        }

        if (signupData.fullName.length < 5) {
            toast.error("Name should be at least 5 characters");
            return;
        }

        if (!isEmail(signupData.email)) {
            toast.error("Invalid email id");
            return;
        }

        if (!isValidPassword(signupData.password)) {
            toast.error("Password should be 6-16 characters long with at least a number and special character");
            return;
        }

        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("fullname", signupData.fullName);
            formData.append("email", signupData.email);
            formData.append("avatar", signupData.avatar);
            formData.append("password", signupData.password);

            const response = await dispatch(createAccount(formData));
            if (response?.payload?.success) {
                toast.success("Account created successfully!");
                navigate("/");
            }
        } catch (error) {
            toast.error("Failed to create account");
        } finally {
            setIsLoading(false);
        }

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: "",
            previewImage: ""
        });
    }

    return (
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - Image */}
                        <div className="hidden lg:block relative">
                            <div className="relative h-full">
                                <img
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                    src="https://images.pexels.com/photos/5647660/pexels-photo-5647660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Sign up"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h2 className="text-3xl font-display font-bold mb-2">
                                        Join SkillRise Today
                                    </h2>
                                    <p className="text-lg opacity-90">
                                        Start your learning journey with our premium courses
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                                        <FiUser className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                                        Create your account
                                    </h2>
                                    <p className="text-gray-600">
                                        Join thousands of learners worldwide
                                    </p>
                                </div>

                                {/* Signup Form */}
                                <div className="form-modern">
                                    <form onSubmit={createNewAccount} className="space-y-6">
                                        {/* Avatar Upload */}
                                        <div className="text-center">
                                            <label htmlFor="image_uploads" className="cursor-pointer group">
                                                <div className="relative w-24 h-24 mx-auto">
                                                    {signupData.previewImage ? (
                                                        <img
                                                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                                            src={signupData.previewImage}
                                                            alt="Profile"
                                                        />
                                                    ) : (
                                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                            <FiCamera className="w-8 h-8 text-primary-600" />
                                                        </div>
                                                    )}
                                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                                                        <FiCamera className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                            </label>
                                            <input
                                                onChange={getImage}
                                                className="hidden"
                                                type="file"
                                                name="image_uploads"
                                                id="image_uploads"
                                                accept=".jpg, .jpeg, .png, .svg"
                                            />
                                            <p className="text-sm text-gray-500 mt-2">Click to upload profile picture</p>
                                        </div>

                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiUser className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="fullName"
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="Enter your full name"
                                                    onChange={handleUserInput}
                                                    value={signupData.fullName}
                                                    className="input-modern pl-10 w-full"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiMail className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email address"
                                                    onChange={handleUserInput}
                                                    value={signupData.email}
                                                    className="input-modern pl-10 w-full"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiLock className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Create a strong password"
                                                    onChange={handleUserInput}
                                                    value={signupData.password}
                                                    className="input-modern pl-10 w-full"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="btn-premium w-full flex items-center justify-center space-x-2 py-4 text-lg"
                                        >
                                            {isLoading ? (
                                                <div className="spinner w-5 h-5"></div>
                                            ) : (
                                                <>
                                                    <span>Create Account</span>
                                                    <FiArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>

                                        {/* Login Link */}
                                        <div className="text-center">
                                            <p className="text-sm text-gray-600">
                                                Already have an account?{' '}
                                                <Link
                                                    to="/login"
                                                    className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300"
                                                >
                                                    Sign in
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                {/* Additional Info */}
                                <div className="text-center mt-6">
                                    <p className="text-xs text-gray-500">
                                        By creating an account, you agree to our{' '}
                                        <Link to="/TermsAndConditions" className="text-primary-600 hover:text-primary-500">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-500">
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Signup;