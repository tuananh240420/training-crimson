import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './Login.scss';
import LoginImage from './images/Login.png';
import BackgroundImage from './images/Background.png';
// import Button from '../../components/Button/Button';

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
        <div className="background">
            <img className="imageBackground" src={BackgroundImage} alt="backgournd" />
            <div>
                <Form
                    color="background: rgba(255,255,255,1)"
                    layout="vertical"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
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
                            <Input className="inputEmail" />
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
                            <Input.Password className="inputPassword" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="ButtonLogin" type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="ButtonCreateAcc" type="link" htmlType="button">
                            Create account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
