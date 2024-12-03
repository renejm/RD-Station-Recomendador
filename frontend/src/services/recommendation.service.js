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
   *        funcional "Consumir API do json-server para dados de
   *        produtos", porém, a lista completa de produtos, obtida
   *        em "product.service.js" para exibição de preferências
   *        e funcionalidades, já é passada como parâmetro para
   *        getRecommendations().

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

  // Rene: "selectedFeatures" é recebido como "undefined" se
  //       nenhuma opção é selecionada.
  const allPreferences = [...formData.selectedPreferences];
  if (formData.selectedFeatures)
    allPreferences.push(...formData.selectedFeatures);

    // Rene: Se não houver preferências ou funcionalidades selecionadas,
  //       retorna lista vazia.
  if (allPreferences.length === 0) return [];

  /** Rene: Se for selecionado "Produto Único", calcula a pontuação
   *       baseado no número de ocorrências das preferências e
   *       funcionalidades selecionadas.
   */
  if (formData.selectedRecommendationType === 'SingleProduct') {
    const productScores = products.map((product) => {
      const prefScore = allPreferences.reduce(
        (count, preference) =>
          count +
          (product.preferences.includes(preference) ? 1 : 0) +
          (product.features.includes(preference) ? 1 : 0),
        0
      );
      return {
        product,
        score: prefScore,
      };
    });

    const bestProduct = productScores.reduce(
      (best, current) => {
        // Rene: Esta lógica garante que, em caso de empate,
        //       o último produto válido será recomendado.
        return current.score < best.score ? best : current;
      },
      { score: -1 }
    );
    return (bestProduct.score > 0) ? [bestProduct.product] : [];
  }

  /** Rene: Se for selecionado "Múltiplos Produtos", todos
   *        os produtos que tiveram alguma de suas preferências
   *        ou funcionalidades selecionadas serão recomendados.
   */
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
