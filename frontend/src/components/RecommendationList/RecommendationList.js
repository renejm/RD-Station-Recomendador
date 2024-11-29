import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md border-2 border-cyan-300'>
      {recommendations.length === 0 && <p className="font-semibold italic my-4 text-teal-900">Nenhuma preferência ou funcionalidade foi selecionada.</p>}
      {recommendations.length === 1 && <h2 className="text-lg font-bold mb-4">Recomendação:</h2>}
      {recommendations.length > 1 && <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
