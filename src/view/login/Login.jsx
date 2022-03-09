import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './Login.scss';
import LoginImage from '../../assets/img/Login.png';
import BackgroundImage from '../../assets/img/Background.png';

const Login = () => {
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
        <div className="login-page">
            <img className="imageBackground" src={BackgroundImage} alt="backgournd" />
            <div className="login--component">
                <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <img className="LoginImage" src={LoginImage} alt="login" />
                    <div className="formMail">
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
                            <Input className="inputEmail" placeholder="Your email/ user" />
                        </Form.Item>
                    </div>

                    <div className="formPassword">
                        <Form.Item
                            className="labelPassword"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password className="inputPassword" placeholder="Enter your password" />
                        </Form.Item>
                    </div>

                    <Form.Item className="btn-submit">
                        <Button className="btn-login" type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="button-createAcc" type="link" htmlType="button">
                            Create account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
