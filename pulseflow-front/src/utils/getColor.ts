export const getColor = (gravidade: number) => {
    if(gravidade >=9) return "#ff3b30"; // vermehlo
    if(gravidade >=6) return "#ff9500"; // laranha
    if(gravidade >=3) return "#ffcc00"; // amarelo
    return "#34c759"; // verde
}