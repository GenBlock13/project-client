import { Section, Text } from '../'
import cls from './Intro.module.scss'
import { ReactComponent as RamaSvg } from '../../assets/emblem.svg'

export const Intro = () => {
  return (
    <Section className={cls.intro}>
      <div className={cls.introInner}>
        <div className={cls.title}>
          <RamaSvg />
          <Text color='white' title="Раменское" size='xl' align='center' />
        </div>
        <Text color='gray' className={cls.subtitle} title="Основан в 1628 году" size='l' align='center' />
      </div>
    </Section>
  )
}