import fetch from 'node-fetch'
const showQuote = async(ctx) => {
    const api = 'https://api.quotable.io/quotes/random'

    let res = await fetch(api, {
        method : "GET",
    });
    let response = await res.json()

    let author = response[0].author
    let quote = response[0].content

    ctx.reply(`${quote}\n\n-${author}`)

}

export default showQuote;