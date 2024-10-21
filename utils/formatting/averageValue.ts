export const getAverageValue = (data: { [key: string]: number }): number => {
    // Get all the values from the object
    const values = Object.values(data);
    
    // Calculate the sum and the count of the values
    const totalSum = values.reduce((sum, value) => sum + value, 0);
    const count = values.length;
    
    // Calculate the average and round to one decimal place
    const average = Math.round(totalSum / count);
    
    return average;
}