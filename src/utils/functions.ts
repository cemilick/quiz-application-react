export const randomColorNumber = (number: number) => {
    const letters = '0123456789ABCDEF';
    
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(((number*i)^number) % 16)];
    }
    
    return color;
}