export interface IPaginationResult<T> {
    total: number
    totalPages: number
    currentPage: number
    data: T[]
}
