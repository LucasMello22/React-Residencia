import React from 'react';
//import "../App.css";
import './Home.css'; 
const Home = () => {
  return (
    <div className='container'>
      <div className='info-section'>
        <h2>Sobre nós</h2>
        <p>
          O Onboard é um programa do Porto Digital que tem como principal objetivo reduzir a lacuna de profissionais formados no mercado de TI, formando recursos humanos capacitados e visão mercadológica para atuar nas principais empresas de tecnologia e potencializando o mercado, com principal foco das empresas do Porto Digital e do Recife. A Residência Onboard é um programa para formar capital humano na área de TI que aproxima os estudantes do mercado de trabalho por meio de uma imersão prática e desafios reais lançados pelas empresas e mentorados pelo Porto Digital.
        </p>
      </div>
      <div className='info-section'>
        <h2>Quer participar da Residência Onboard?</h2>
        <h3>Para fazer parte do nosso grupo de estudantes existem duas maneiras de ingressar.</h3>
      </div>
      <div className='info-section2'>
          <div >
            <h4>Ingresse via Embarque Digital</h4>
            <p>
              O Embarque Digital é um programa educacional em parceria com a Prefeitura do Recife, que oferece bolsas de estudo em cursos superiores na área de tecnologia. Todos os semestres são abertos centenas de vagas para novos estudantes, acompanhe pelo nosso Insta ou Linkedin.
            </p>
          </div>
          <div >
            <h4>Ingresse via Instituição de Ensino</h4>
            <p>
              Porto Digital contam com matriz curricular preparada especialmente para ampliar a empregabilidade e o acesso ao mercado de trabalho. Nessas instituições a Residência Onboard é uma disciplina obrigatória. As instituições são: UNIT, SENAC, FICR, UNINASSAU, Instituto Federal e Universidade Católica.
            </p>
          </div>
      </div>
    </div>
  );
}

export default Home;
