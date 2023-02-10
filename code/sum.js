const sum = (matriz) => {
  let totalSum = 0
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
      totalSum += matriz[i][j]
    }
  }
  return totalSum
}
export default sum