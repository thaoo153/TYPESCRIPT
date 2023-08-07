
import React, { useState } from 'react';
import { signIn } from './account';

const LogIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form fields ...

        try {
            const user = await signIn(email, password);
            console.log('Logged in user:', user);
            setErrorMessage(''); // Xóa thông báo lỗi (nếu có)
            setErrors({}); // Xóa thông báo lỗi (nếu có)

            // Chuyển hướng người dùng sang trang admin khi đăng nhập thành công
            window.location.href = '/admin';
        } catch (error) {
            console.error('Error signing in:', error);
            setErrorMessage('Error signing in. Please check your credentials.');
            setErrors({});
        }
    };

    return (
        <div className='container mt-5' style={{ width: '600px' }}>
            <h2>Log In</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleLogIn}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LogIn;
