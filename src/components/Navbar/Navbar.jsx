import { useState } from "react"
import { Container, Menu, Button, AuthModal } from "../"
import cls from './Navbar.module.scss'

export const Navbar = () => {

    const [isAuthModal, setIsAuthModal] = useState(false)
    const [formType, setFormType] = useState('')

    const onCloseModal = () => {
        setIsAuthModal(false)
    }

    const onShowModal = () => {
        setIsAuthModal(true)
    }

    const onShowModalLogin = () => {
        setIsAuthModal(true)
        setFormType('login')
    }

    const onShowModalRegister = () => {
        setIsAuthModal(true)
        setFormType('register')
    }

    return (
        <header className={cls.navbar}>
            <Container>
                <div className={cls.navbar}>
                    <Menu />
                    <div className={cls.btns}>
                        <Button onClick={onShowModalLogin}>Войти</Button>
                        <Button onClick={onShowModalRegister}>Зарегистрироваться</Button>
                    </div>
                </div>
            </Container>

            { isAuthModal && (
                <AuthModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    formType={formType}
                    />
            )}
        </header >
    )
}