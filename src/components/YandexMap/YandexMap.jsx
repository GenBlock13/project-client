import { YMaps, Map } from '@pbe/react-yandex-maps'
import cls from './YandexMap.module.scss'

export const YandexMap = () => {
    const defaultState = {
        center: [55.5669, 38.2303],
        zoom: 13,
    }
    return (
        <div className={cls.ymaps}>
            <YMaps query ={{ apikey: '94c57f59-609b-4a17-83d2-77009367e455'}}>
                <Map style={{width: '100%', height: '70vh'}}
                defaultState={defaultState} />
            </YMaps>
        </div>
    )
}