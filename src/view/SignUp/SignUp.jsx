import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import './SignUp.scss';
import SignupImage from '../../assets/img/SignUp.png';
import BackgroundImageSignUp from '../../assets/img/Background.png';
import InputPassword from '../../components/InputPassword/InputPassword';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
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
        <div className="signup-page">
            <img className="image-background" src={BackgroundImageSignUp} alt="backgournd-signup" />
            <div className="signup--component">
                <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <img className="signup-img" src={SignupImage} alt="login" />
                    <div className="form-name">
                        <Form.Item
                            className="label-name"
                            label={t('name')}
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: t('nameMessage'),
                                },
                            ]}
                        >
                            <Input className="input-name" placeholder={t('namePlaceholder')} />
                        </Form.Item>
                    </div>
                    <div className="form-mail">
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
                            <Input className="input-mmail" placeholder={t('emailPlaceholder')} />
                        </Form.Item>
                    </div>

                    <div className="form-phone">
                        <Form.Item
                            className="label-phone"
                            label={t('phone')}
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: t('phoneMessage'),
                                },
                                {
                                    pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                    message: t('phoneMessage'),
                                },
                            ]}
                        >
                            <Input className="input-phone" placeholder={t('phonePlaceholder')} />
                        </Form.Item>
                    </div>

                    <div className="form-password">
                        <InputPassword />
                    </div>

                    <div className="form-confirm-password">
                        <Form.Item
                            className="label-confiem-password"
                            label={t('confirmPassword')}
                            name="confirmPassword"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: t('confirmPasswordMessage'),
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        console.log(getFieldValue('password'));
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error(t('confirmPasswordMessage')));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password className="inputPassword" placeholder={t('confirmPasswordPlaceholder')} />
                        </Form.Item>
                    </div>

                    <Form.Item className="btn-submit-signup">
                        <Button className="btn-signup" type="primary" htmlType="submit">
                            {t('signup')}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
