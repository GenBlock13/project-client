import cls from './Menu.module.scss'
import { MenuLink } from '../ui/MenuLink/MenuLink'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className={cls.nav}>
            <MenuLink to="#places">Достопримечательности</MenuLink>
            <MenuLink to="#facts">Факты</MenuLink>
            <MenuLink to="comments">Отзывы</MenuLink>
            <MenuLink to="#map">На карте</MenuLink>
        </nav>
    )
}