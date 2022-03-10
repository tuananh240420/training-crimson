import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './Login.scss';
import LoginImage from '../../assets/img/Login.png';
import BackgroundImage from '../../assets/img/Background.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Login = () => {
    const { t } = useTranslation();
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
                            label="Email"
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    message: t('emailMessage'),
                                },
                            ]}
                        >
                            <Input className="inputEmail" placeholder={t('emailPlaceholder')} />
                        </Form.Item>
                    </div>

                    <div className="formPassword">
                        <Form.Item
                            className="labelPassword"
                            label={t('password')}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: t('passwordMessage'),
                                },
                            ]}
                        >
                            <Input.Password className="inputPassword" placeholder={t('passwordPlaceholder')} />
                        </Form.Item>
                    </div>

                    <Form.Item className="btn-submit">
                        <Button className="btn-login" type="primary" htmlType="submit">
                            {t('login')}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className="button-createAcc" to="/signup">
                            {t('createaccount')}
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
