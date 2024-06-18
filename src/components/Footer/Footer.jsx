import cls from './Footer.module.scss'
import { Container } from '../'

export const Footer = () => {
    return (
        <footer className={cls.footer}>
            <Container>
            © Раменское, 2024.
            </Container>
        </footer>
    )
}