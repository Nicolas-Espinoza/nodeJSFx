const axios = require('axios');

const convertPair = async (base = 'EUR', cotizacion = 'USD') => {

    base = base.toUpperCase();
    cotizacion = cotizacion.toUpperCase();

    const response = await axios.get(process.env.API_URL, {
        params: {
            access_key: process.env.API_KEY
        }
    });

    if (response.data.rates[base] == undefined || response.data.rates[cotizacion] == undefined) {
        return ('Verifique el par solicitado!');
    }

    const baseConversion = (1 / response.data.rates[base]);
    const cotizacionConversion = (baseConversion * response.data.rates[cotizacion]);
    return (
        `${base}/${cotizacion} = ${cotizacionConversion.toFixed(4)}`
    )
}



module.exports = { convertPair };