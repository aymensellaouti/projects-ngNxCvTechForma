export function getRandomColor(): string {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16) ;
    return newColor;
}
