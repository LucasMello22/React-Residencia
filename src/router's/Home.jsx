import React from 'react'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import "../App.css"

const Home = () => {
  return (
    <div>
         <header>
    <Header />
    </header>
    <body>
        <div className='inf1'>
        <h2 >Sobre nós</h2>
           <p>
           O Onboard é um programa do Porto Digital que tem como principal objetivo reduzir a lacuna de profissionais formados no mercado de TI, formando recursos humanos capacitados e visão mercadológica para atuar nas principais empresas de tecnologia e potencializando o mercado, com principal foco das empresas do Porto Digital e do Recife.
            A Residência Onboard é um programa para formar capital humano na área de TI que aproxima os estudantes do mercado de trabalho por meio de uma imersão prática e desafios reais lançados pelas empresas e mentorados pelo Porto Digital. 
            A residência do Porto Digital acontece através das parcerias com instituições de Ensino Superior com cursos tecnólogos na área de TI. As matrizes curriculares são adaptadas às necessidades do mercado de trabalho de tecnologia. Além disso, os estudantes contam com atividades da Residência realizadas diretamente com empresas embarcadas no Porto Digital. Garantindo experiências baseadas no dia a dia do mercado e maior empregabilidade.
           </p>
          
        </div>
        <div className='inform'>
          <h2  >Quer participar da Residência Onboard?</h2>
          <h4>Para fazer parte do nosso grupo de estudantes existem duas maneiras de ingressar. </h4>
        </div>
        <div className='inf2'>
        <h4>Ingresse via Embarque Digital</h4>
            <p>
            O Embarque Digital é um programa educacional em parceria com a Prefeitura do Recife, que oferece bolsas de estudo em cursos superiores na área de tecnologia. Todos os semestres são abertos centenas de vagas para novos estudantes, acompanhe pelo nosso Insta ou Linkedin
            </p>
        </div>
        <div className='inf3'>
          <h4>Ingresse via Instituição de Ensino</h4>
          <p>
          Porto Digital contam com matriz curricular preparada especialmente para ampliar a empregabilidade e o acesso ao mercado de trabalho.
          Nessas instituições a Residência Onboard é uma disciplina obrigatória.
          As instituições são: UNIT, SENAC, FICR, UNINASSAU, Instituto Federal e Universidade Católica. 
          </p>
        </div>

    </body>
    
    <Footer />
      
    </div>
  )
}

export default Home