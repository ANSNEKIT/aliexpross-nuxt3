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

interface IBreadcrumb {
    id: string
    title: string
    link: string
}

export interface IBreadcrumbsProps {
    items: IBreadcrumb[]
}

export interface IElementImage {
    id: string
    title: string
    imgUrl?: string
}

export interface IProductGalleryPreviewProps {
    items: IElementImage[]
}
export interface IRating {
    rating: number
    size: number | 16
    reviews: number
    color?: string
}
interface IProductDescription {
    id: string
    title: string
    rating: IRating
    buyCount: number
}
export interface IProductDescriptionProps {
    desc: IProductDescription
}

// interface IElementDefault {

// }
export type ISkuElement = Omit<IElementImage, "imgUrl">
interface ISkuItem {
    id: string
    groupName: string
    type: 'images' | 'buttons'
    elements: IElementImage[] | ISkuElement[]
}
export interface ISkuItemProps {
    item: ISkuItem
}

export interface IProductPrice {
    id: string
    price: number
    oldPrice: number
    isCoupon: boolean
    count: number
    percentDiscount: number
}

export interface IProductPriceProps {
    item: IProductPrice
}

