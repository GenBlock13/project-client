import { useState } from 'react'
import { Input, Button, buttonType, Text } from '../'
import { ReactComponent as MailSvg } from '../../assets/mail.svg'
import { ReactComponent as PassSvg } from '../../assets/pass.svg'
import { ReactComponent as UserSvg } from '../../assets/user.svg'
import cls from './Auth.module.scss'

export const AuthForm = ({ formType }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onUsernameChange = (value) => {
        setUsername(value)
    }
    const onEmailChange = (value) => {
        setEmail(value)
    }
    const onPasswordChange = (value) => {
        setPassword(value)
    }

    return (<form className={cls.form}>
        {formType === 'register' &&
            <>
                <Text title='Форма регистрации' size='m' align='center' />
                <Input
                    onChange={onUsernameChange}
                    value={username}
                    addonLeft={<UserSvg />}
                    type='text'
                    placeholder='Введите имя'
                />
                <Input
                    onChange={onEmailChange}
                    value={email}
                    addonLeft={<MailSvg />}
                    type='email'
                    placeholder='Введите email'
                />
                <Input
                    onChange={onPasswordChange}
                    value={password}
                    addonLeft={<PassSvg />}
                    type='password'
                    placeholder='Введите пароль'
                />
                <Button
                    fullWidth
                    variant={buttonType.GRADIENT}
                >Зарегистрироваться</Button>
            </>
        }
        {formType === 'login' &&
            <>
                <Text title='Форма авторизации' size='m' align='center' />
                <Input
                    onChange={onEmailChange}
                    value={email}
                    addonLeft={<MailSvg />}
                    type='text'
                    placeholder='Введите email'
                />
                <Input
                    onChange={onPasswordChange}
                    value={password}
                    addonLeft={<PassSvg />}
                    type='password'
                    placeholder='Введите пароль'
                />
                <Button
                    fullWidth
                    variant={buttonType.GRADIENT}
                >Войти</Button>
            </>
        }
    </form>
    )
}