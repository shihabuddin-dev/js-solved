/* 
১. ডুপ্লিকেট রিমুভ করার পুরা কোড নিজে বুঝে বুঝে লিখে এই অ্যারে [1, 5, 61, 5, 87, 7, 5, 81, 61]; দিয়ে চেক করবি 
*/
function removeDuplicate(array) {
    let noDuplicate = []
    for (let number of array) {
        if (noDuplicate.includes(number) === false) {
            noDuplicate.push(number)
        }
    }
    return noDuplicate
}
const result = removeDuplicate([1, 5, 61, 5, 87, 7, 5, 81, 61])
console.log(result);