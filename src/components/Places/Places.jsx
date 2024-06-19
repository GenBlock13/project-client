import { Section, Text, LinkButton, buttonType } from '../'
import cls from './Places.module.scss'
import { useStore } from '../../store/StoreProvider'

export const Places = () => {
    const { authStore } = useStore()
    return (
        <Section className={cls.places} id={'places'}>
            <div className={cls.header}>
                <Text bold color='black' className={cls.title}
                    title='Интересные места' size='s' align='left' />
                {
                    authStore.user.role === 'ADMIN' &&
                    <LinkButton
                        to={'/add-place'}
                        variant={buttonType.FILLED}
                    >
                        Добавить +
                    </LinkButton>
                }
            </div>
        </Section>
    )
}