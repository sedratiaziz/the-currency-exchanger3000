const baseCurrencyEl = document.querySelector('#base-currency')
const targetCurrencyEl = document.querySelector('#target-currency')

// test whether it got the element
console.log(baseCurrencyEl)

// async function convert(firstCurr, secondCurr, amount) {
//     try {
//         const result = await axios.get(`https://v6.exchangerate-api.com/v6/90f90b5e3f18631c41ba8166/pair/${firstCurr}/${secondCurr}/${amount}`)
//         console.log(`${result.data.conversion_result} ${result.data.target_code}`)
//     } catch (error) {
//         console.log(error)
//     }
// }


// convert("kwd", "lbp", 1)


async function test() {
    try {
        const result = await axios.get(`https://v6.exchangerate-api.com/v6/90f90b5e3f18631c41ba8166/latest/usd`)
        const currObj = result.data.conversion_rates;

        for (const key in currObj) {
            console.log(`${key}`)
        }

    } catch (error) {
        console.log(error)
    }
}

test()
