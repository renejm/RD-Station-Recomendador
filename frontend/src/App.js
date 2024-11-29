import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import headerimg from './assets/header.png';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Dadas atualizações no formulário, necessário atualizar a lista de recomendações
   */

  const handleFormUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className='h-32 w-screen flex mb-4'>
        <div className='h-32 min-w-56 max-w-56'>
          <img src={headerimg} className='h-32'/>
        </div>
        <div className='h-32 flex items-center'>
          <h1 className="text-base sm:text-3xl md:text-4xl font-bold">
            Recomendador de Produtos <span className='text-nowrap'>RD Station</span>
          </h1>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 mb-4 text-justify">
          <p className="text-sm sm:text-base md:text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div>
          <Form onFormUpdate={handleFormUpdate} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
