import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './SignUp.scss';
import SignupImage from '../../assets/img/SignUp.png';
import BackgroundImageSignUp from '../../assets/img/Background.png';
import Checkvalidate from '../../components/Checkvalidate/Checkvalidate';

const SignUp = () => {
    const { setIsAuth } = useAuthContext();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        setIsAuth(true);
        navigate('/dashboard');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                        <Checkvalidate />
                    </div>

                    <div className="form-confirm-password">
                        <Form.Item
                            className="label-confiem-password"
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
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
