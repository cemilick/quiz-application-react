import { correctAnswers } from "./constant";

export const randomColorNumber = (number: number) => {
    const letters = '0123456789ABCDEF';
    
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(((number*i)^number) % 16)];
    }
    
    return color;
}

export const calculateFinalScore = (answer: string[]) => {
    let score = 0;
    answer.forEach((value, index) => {
        if (value === correctAnswers[index]) {
            score += 10;
        }
    });

    return score;
}