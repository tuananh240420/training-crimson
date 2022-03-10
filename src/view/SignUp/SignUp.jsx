import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './SignUp.scss';
import SignupImage from '../../assets/img/SignUp.png';
import BackgroundImageSignUp from '../../assets/img/Background.png';
import Checkvalidate from '../../components/Checkvalidate/Checkvalidate';
import { useState, useEffect } from 'react';

const SignUp = () => {
    const { setIsAuth } = useAuthContext();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        setIsAuth(true);
        navigate('/dashboard');
    };
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [length, setLength] = useState(false);
    const [lower, setLower] = useState(false);
    const [upper, setUpper] = useState(false);
    const [number, setNumber] = useState(false);
    const [special, setSpecial] = useState(false);

    const handleChangePassword = (e) => {
        const value = e.target.value;
        value.length >= 8 ? setLength(true) : setLength(false);
        const lowerRegex = new RegExp(/[a-z]/);
        lowerRegex.test(value) ? setLower(true) : setLower(false);
        const upperRegex = new RegExp(/[A-Z]/);
        upperRegex.test(value) ? setUpper(true) : setUpper(false);
        const numberRegex = new RegExp(/[0-9]/g);
        numberRegex.test(value) ? setNumber(true) : setNumber(false);
        const specialRegex = new RegExp(/[@$!%*#?&]/);
        specialRegex.test(value) ? setSpecial(true) : setSpecial(false);
    };

    useEffect(() => {
        length && number && lower && upper && special && setShowPasswordCheck(false);
    }, [length, number, lower, upper, special]);

    return (
        <div className="signup-page">
            <img className="image-background" src={BackgroundImageSignUp} alt="backgournd-signup" />
            <div className="signup--component">
                <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <img className="login-image" src={SignupImage} alt="login" />
                    <div className="form-name">
                        <Form.Item
                            className="label-name"
                            label="Name"
                            name="Name"
                            rules={[
                                {
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input className="input-name" placeholder="Enter your name" />
                        </Form.Item>
                    </div>
                    <div className="form-mail">
                        <Form.Item
                            className="labelEmail"
                            label="Email/User login"
                            name="Email"
                            rules={[
                                {
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input className="input-mmail" placeholder="Your email/ user" />
                        </Form.Item>
                    </div>

                    <div className="form-phone">
                        <Form.Item
                            className="label-phone"
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input.Password className="input-password" placeholder="Enter your phone" />
                        </Form.Item>
                    </div>

                    <div className="form-password">
                        <Form.Item
                            className="label-password"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                className="input-password"
                                placeholder="Enter your password"
                                onChange={handleChangePassword}
                                onFocus={() => setShowPasswordCheck(true)}
                            />
                            {showPasswordCheck && <Checkvalidate length={length} lower={lower} upper={upper} number={number} special={special} />}
                        </Form.Item>
                    </div>

                    <div className="form-confirm-password">
                        <Form.Item
                            className="label-confiem-password"
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    message: 'Please confirm your password!',
                                },
                            ]}
                        >
                            <Input.Password className="inputPassword" placeholder="Enter your password" />
                        </Form.Item>
                    </div>

                    <Form.Item className="btn-submit-signup">
                        <Button className="btn-signup" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
