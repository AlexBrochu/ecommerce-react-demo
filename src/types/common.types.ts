
export interface ItemType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CartItemType extends ItemType{
  quantity: number
}

export interface SectionType {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
  size?: string | any 
}