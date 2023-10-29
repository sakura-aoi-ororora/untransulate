const translateLink = "https://script.google.com/macros/s/AKfycbwy0DX4Rlms3M_y3EOo5ZBtSDdUoOT2556ToxRwBYEkdlAV_aqALhUfFqCdrVJEgRBSFA/exec" + "?"

// place files you want to import through the `$lib` alias in this folder.
export async function transulateResponse(input: string, langList: string[]): Promise<string> {
    const params = {
        text: input,
        languages: JSON.stringify(langList)
    }
    const urlParam = new URLSearchParams(params)
    console.log(translateLink + urlParam)
    const rest = await fetch(translateLink + urlParam, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    const data = (await rest.json()).message
    console.log(data)
    return data
}