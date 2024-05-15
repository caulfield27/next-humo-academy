
export function getFromStorage(data: string) {
    const getItem  = localStorage.getItem(data)
    if (getItem) {
        const parsedData = JSON.parse(getItem)
        return parsedData
    }
}