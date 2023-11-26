export type TSortValue = 'date' | 'views'
export type TSortOrder = 'ASC' | 'DESC'

export interface ISort {
  property?: TSortValue
  order?: TSortOrder
}
