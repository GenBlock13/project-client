import { Container } from "../../components"
import cls from './AddPlacePage.module.scss'

export const AddPlacePage = () => {
    return (
        <Container>
            <div className={cls.addPlaceInner}>
                Добавление достопримечательности
            </div>
        </Container>
    )
}