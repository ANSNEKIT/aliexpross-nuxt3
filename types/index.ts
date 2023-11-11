export type Callback = (...args: any[]) => void

export type Icons = 'Category' | 'Order'  | 'Shopcart' | 'Login';

export interface IHeaderButton {
    iconName: Icons
    isShowCount?: boolean | false
    iconClasses?: string
    isShowText?: boolean | true
}

export interface ISliderCard {
    index: number
}
