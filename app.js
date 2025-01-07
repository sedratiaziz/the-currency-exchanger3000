const baseSelectEl = document.querySelector("#baseSelect")
const targetSelectEl = document.querySelector("#targetSelect")
const convertBtn = document.querySelector("#convert-btn")
const amountInput = document.querySelector("input")
const resultH1 = document.querySelector("#resultH1")

baseSelectEl.innerHTML = "<option>Loading...</option>"
targetSelectEl.innerHTML = "<option>Loading...</option>"



async function populate() {
    try {
        const result = await axios.get(`https://v6.exchangerate-api.com/v6/90f90b5e3f18631c41ba8166/latest/usd`)
        const currObj = result.data.conversion_rates;
        
        baseSelectEl.innerHTML = ''
        targetSelectEl.innerHTML = ''

        for (const key in currObj) {
            // console.log(`${key}`)
            const optionEl = document.createElement('option')
            optionEl.textContent = key;
            optionEl.value = key
            baseSelectEl.append(optionEl)
            
            
            const optionSecondEl = document.createElement('option')
            optionSecondEl.textContent = key;
            optionSecondEl.value = key
            targetSelectEl.append(optionSecondEl)
          
        }

    } catch (error) {
        console.log(error)
    }
}

populate();


async function convert(baseValue, targetValue, amount) {
    try {

        const conversion_rate_obj = await axios.get(`https://v6.exchangerate-api.com/v6/90f90b5e3f18631c41ba8166/pair/${baseValue}/${targetValue}`)
        const conversion_rate = conversion_rate_obj.data.conversion_rate;
        const result = (amount * conversion_rate).toFixed(3);
        const base_code = conversion_rate_obj.data.base_code;
        const target_code = conversion_rate_obj.data.target_code;

        resultH1.textContent = `${amount} ${base_code} is equal to ${result} ${target_code}`;

    } catch (error) {
        console.log(error)
    }
}

amountInput.addEventListener("keydown", async(event)=>{
    if (event.key === 'Enter') {
        const baseValue = baseSelectEl.value;
        const targetValue = targetSelectEl.value;
        const amount = amountInput.value;
    
        await convert(baseValue, targetValue, amount);
    }
})

convertBtn.addEventListener("click", async () => {
    const baseValue = baseSelectEl.value;
    const targetValue = targetSelectEl.value;
    const amount = amountInput.value;

    await convert(baseValue, targetValue, amount);
})