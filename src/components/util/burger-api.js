import axios from "axios";

const NORMA_API = 'https://norma.nomoreparties.space/api'


export function getIngredients(setData, setIsError) {
  axios.get(`${NORMA_API}/ingredients`)
    .then(res => {
      setData(res.data.data)
    }).catch(error => setIsError(true))
}