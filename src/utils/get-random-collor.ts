const colorsArray = [
    "#AFA2FF",
    "#00C49A",
    "#FF499E",
    "#3F89C5",
    "#FFBA08",
    "#D00000",
]

export function getRandomColor(lengthArray: number): string{
    const index = lengthArray % colorsArray.length;

    return colorsArray[index];
}