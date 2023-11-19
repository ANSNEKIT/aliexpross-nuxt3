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

export interface ITabsProps {
    tabs: Array<{
        title: string
        value: string
    }>
    isFixed?: boolean
    position?: "left" | "right" | "top" | "bottom"
}

export interface IProductProps {
    product: IProduct
}
export interface IProduct {
    id: string
    title: string
    price: number
    urlImg: string
    rating: number
    buyCount: number
    isTop: boolean
    deliveryDays: string
    isInstant: boolean
    isRecomendation: boolean
}
