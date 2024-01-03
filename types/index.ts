export type Callback = (...args: any[]) => void

export type Icons = 'Category' | 'Order'  | 'Shopcart' | 'Login';

export interface IHeaderButton {
    iconName: Icons
    isShowCount?: boolean | false
    iconClasses?: string
    isShowText?: boolean | true
    url: string
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
    limitedCount: number | 0
    percentDiscount: number
}

export interface IProductPriceProps {
    item: IProductPrice
}

export interface IAppCounterProps {
    modelValue: number
    maxCount: number
}

export interface IAppToggleButton {
    id: string
    title: string
    icon: string
    name: string
}

export interface IAppToogleButtonProps {
    items: IAppToggleButton[]
}

export interface ICheckboxProps {
    modelValue: boolean
    checked?: false
    disabled?: false
    readonly?: false
    color: 'gray' | 'dark-red'
    checkedColor: 'gray' | 'dark-red'
}

export interface IBasketItem {
    id: string
    title: string
    subtitle: string
    link: string
    store: string
    tags: string[]
    imgUrl: string
    itemUrl: string
    oldPrice: PriceParams
    discountPercent: string
    shippingPrice: string
    price: PriceParams
    delivery: number
    quantity: {
        currentCount: number
        maxCount: number
    }
    checked: boolean

}

type PriceParams = {
    currency: string,
    formattedPrice: string
    value: string
}

export interface IBacketDetailProps {
    checkoutGroup: {
        items: Array<{imgUrl: string, itemId: string}>
        itemNum: number
        itemsQuantitySum: number
        shippingPrice: PriceParams 
        displayPrice: PriceParams
    }
}

