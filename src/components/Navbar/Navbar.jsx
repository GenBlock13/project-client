import { Container, Menu } from "../"
import cls from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <header className={cls.navbar}>
            <Container>
                <Menu/>
            </Container>
        </header>
    )
}