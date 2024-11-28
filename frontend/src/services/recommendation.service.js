// getRecommendations.js

//import axios from 'axios';

//const baseURL = 'http://localhost:3001';
//const baseURL = document.location.origin.replace(':3000', ':3001');

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  /** Rene: O 3º bullet do item 5 do desafio coloca como requisito
   *  funcional "Consumir API do json-server para dados de produtos",
   *  porém, a lista completa de produtos, obtida em "product.service.js"
   *  para exibição de preferências e funcionalidades, já é passada como
   *  parâmetro para getRecommendations().

  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data.filter(
      (product) =>
        formData.selectedPreferences.some((preference) =>
          product.preferences.includes(preference)
        ) ||
        formData.selectedFeatures.some((feature) =>
          product.features.includes(feature)
        )
    );
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
  */

  if (
    formData.selectedPreferences.length === 0 &&
    formData.selectedFeatures.length === 0
  )
    return [];

  if (formData.selectedRecommendationType === 'SingleProduct') {
    const productScores = products.map((product) => {
      const preferenceScore = formData.selectedPreferences.reduce(
        (count, preference) =>
          count + (product.preferences.includes(preference) ? 1 : 0),
        0
      );
      const featureScore = formData.selectedFeatures.reduce(
        (count, feature) =>
          count + (product.features.includes(feature) ? 1 : 0),
        0
      );
      return {
        product,
        score: preferenceScore + featureScore,
      };
    });

    const bestProduct = productScores.reduce(
      (best, current) => {
        return current.score < best.score ? best : current;
      },
      { score: -1 }
    );

    console.log(productScores);

    return [bestProduct.product];
  }

  return products.filter(
    (product) =>
      formData.selectedPreferences.some((preference) =>
        product.preferences.includes(preference)
      ) ||
      formData.selectedFeatures.some((feature) =>
        product.features.includes(feature)
      )
  );
};

export default { getRecommendations };
