import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiArrowRight } from 'react-icons/fi';

import HomeLayout from '../Layouts/HomeLayout';
import { login } from '../Redux/Slices/AuthSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        isChaked: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleUserInput(e) {
        const { name, value, type, checked } = e.target;
        setLoginData({
            ...loginData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    async function onLogin(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the details");
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await dispatch(login(loginData));
            
            if (response?.payload?.success) {
                setLoginData({
                    email: "",
                    password: "",
                    isChaked: false
                });
                toast.success("Login successful!");
                navigate('/');
            }
        } catch (error) {
            toast.error("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                            <FiUser className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                            Welcome back
                        </h2>
                        <p className="text-gray-600">
                            Sign in to your account to continue learning
                        </p>
                    </div>

                    {/* Login Form */}
                    <div className="form-modern">
                        <form onSubmit={onLogin} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="input-modern pl-10 w-full"
                                        placeholder="Enter your email"
                                        value={loginData.email}
                                        onChange={handleUserInput}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
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
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        className="input-modern pl-10 pr-10 w-full"
                                        placeholder="Enter your password"
                                        value={loginData.password}
                                        onChange={handleUserInput}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="rememberMe"
                                        name="isChaked"
                                        type="checkbox"
                                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                        checked={loginData.isChaked}
                                        onChange={handleUserInput}
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/forgot-password')}
                                        className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn-premium w-full flex items-center justify-center space-x-2 py-3 text-lg"
                                >
                                    {isLoading ? (
                                        <div className="spinner w-5 h-5"></div>
                                    ) : (
                                        <>
                                            <span>Sign in</span>
                                            <FiArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <Link
                                        to="/signup"
                                        className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            By signing in, you agree to our{' '}
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
        </HomeLayout>
    );
}

export default Login;