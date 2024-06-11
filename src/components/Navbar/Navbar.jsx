import { Container, Menu, Button } from "../"
import cls from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <header className={cls.navbar}>
            <Container>
                <div className={cls.navbar}>
                    <Menu />
                    <div className={cls.btns}>
                <Button>Войти</Button>
                    <Button>Зарегистрироваться</Button>
                </div>
            </div>
        </Container>
        </header >
    )
}