import axios from 'axios';

/** Rene: Fiz esta alteração para que a URL da API seja
 *        dinâmica, seguindo a URL base da aplicação.
*/
//const baseURL = 'http://localhost:3001';
const baseURL = document.location.origin.replace(':3000', ':3001');

const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
