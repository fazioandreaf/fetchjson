export const dateStringToDate = (dateString: string): Date => {
    // 10/08/2018
    const datePart = dateString.split('/').map((value)=> parseInt(value))

    //gen == 0 and not 1
    return new Date(datePart[2], datePart[1] - 1, datePart[0])
}

