import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './SignUp.scss';
import SignupImage from '../../assets/img/SignUp.png';
import BackgroundImageSignUp from '../../assets/img/Background.png';
import InputPassword from '../../components/InputPassword/InputPassword';

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
                    <img className="signup-img" src={SignupImage} alt="login" />
                    <div className="form-name">
                        <Form.Item
                            className="label-name"
                            label="Name"
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Fullname!',
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
                                    required: true,
                                    message: 'Please input valid username/email address',
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
                                    required: true,
                                    message: 'Please input your phone number',
                                },
                                {
                                    pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                    message: 'Please input valid phone number',
                                },
                            ]}
                        >
                            <Input className="input-phone" placeholder="Enter your phone" />
                        </Form.Item>
                    </div>

                    <div className="form-password">
                        <InputPassword />
                    </div>

                    <div className="form-confirm-password">
                        <Form.Item
                            className="label-confiem-password"
                            label="Confirm Password"
                            name="confirmPassword"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        console.log(getFieldValue('password'));
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
