export const FindValueArrayOfObject = (data:any, objectKey:string, keyValue:string, objectKeySearch:string, emptyValue:string) => {
    const filteredData = data.filter((datum:any) => datum[objectKey] === keyValue)
    const flag = filteredData.length > 0

    return flag ? filteredData[0][objectKeySearch] : emptyValue
}