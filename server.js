const axios = require("axios")


async function convert(firstCurr, secondCurr, amount) {
    try {
        const result = await axios.get(`https://v6.exchangerate-api.com/v6/90f90b5e3f18631c41ba8166/pair/${firstCurr}/${secondCurr}/${amount}`)
        console.log(`${result.data.conversion_result} ${result.data.target_code}`)
    } catch (error) {
        console.log(error)
    }
}


convert("kwd", "lbp", 1)


