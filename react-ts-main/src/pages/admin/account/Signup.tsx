import React, { useState } from 'react';
import { createUser } from './account';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn form gửi yêu cầu tự động

        // Validate form fields
        if (!email || !password) {
            setErrorMessage('Không được để trống.'); // Đặt thông báo lỗi
            setSuccessMessage(''); // Reset thông báo thành công (nếu có)
        } else {
            try {
                const newUser = { email, password };
                const response = await createUser(newUser);
                setSuccessMessage('Tạo tài khoản thành công'); // Đặt thông báo thành công
                setErrorMessage(''); // Reset thông báo lỗi (nếu có)
            } catch (error) {
                setErrorMessage('Tạo tài khoản không thành công. Vui lòng thử lại'); // Đặt thông báo lỗi
                setSuccessMessage(''); // Reset thông báo thành công (nếu có)
            }
        }
    };

    return (
        <div className='container mt-5' style={{ width: '600px' }}>
            <h2>Sign Up</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <a className="btn btn-primary mx-3" href="/login">Login</a>
            </form>
        </div>
    );
};

export default SignUp;
