const gretins = () => {
    console.log('Hola Node JS')

}
const fetchapi = async (url) => {
    try {
        const api = (await fetch(url)).json();
        console.log(api)
    } catch(error) {
        console.log(error)


        module.exports = {
            gretins,
            fetchapi
    }

 } }