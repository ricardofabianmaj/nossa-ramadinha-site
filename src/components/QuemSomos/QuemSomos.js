import RamadinhaMainPicture from '../midia/image-ramadinha-melhor.png'

function QuemSomos() {
  return (
    <div>
      
      <section>
        <h1>Quem Somos</h1>

        <p>A história inspiradora da ONG Nossa Ramadinha Melhor teve início em 14 de dezembro de 2014, quando um grupo visionário de indivíduos decidiu unir esforços para enfrentar os desafios sociais que assolavam o bairro da Ramadinha II, na cidade de Campina Grande, Paraíba. Diante do alto índice de criminalidade, tráficos e perigos que permeavam a comunidade, nasceu a iniciativa que se tornaria um farol de esperança para crianças, adolescentes e suas famílias.</p>
        <img src={RamadinhaMainPicture} alt='Imagem Cartaz da ONG Nossa Ramadinha Melhor' />

        <h2>Causa</h2>
        <p>
          O propósito fundamental da ONG é aprimorar a qualidade de vida local, implementando ferramentas de inclusão social por meio de apoio solidário entre membros e parceiros. Desde o início, a organização adotou princípios sólidos, visando proporcionar uma nova perspectiva de vida, fundamentada nos pilares da cidadania, saúde, educação e na defesa pela melhoria do meio ambiente.
        </p>
        <br />
        <p>
          A Ramadinha II, reconhecida por suas dificuldades, viu na criação da ONG Nossa Ramadinha Melhor uma resposta à necessidade urgente de transformação. Ao longo de quase nove anos de existência, a organização tem desempenhado um papel crucial na comunidade, envolvendo crianças e adolescentes em projetos esportivos e atividades educacionais.
        </p>
        <br />
        <div className='video'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/53jaRNqHLso?si=MPuxKSxQr-UsJuTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <h2>Funcionamento</h2>
        <p>
          A conquista do título de Utilidade Pública Municipal, juntamente com registros nos Conselhos Municipal da Assistência Social e Municipal dos Direitos da Criança e Adolescente, evidencia o reconhecimento pela relevância das ações promovidas pela ONG.
        </p>
        <br/>
        <p>
          Dentre os projetos emblemáticos, a "Escolinha de Futebol Educando Sonhos" destaca-se ao oferecer a mais de 60 alunos a oportunidade de praticar esportes, combinada com aulas de reforço escolar. Em 2023, o reconhecimento pela comunidade e a conquista do prêmio "Melhores do Ano" refletiram o impacto positivo do projeto.
        </p>
        <br/>
        <p>
          Embora a ONG Nossa Ramadinha Melhor não tenha sede própria, suas atividades são realizadas em um prédio alugado. Mesmo enfrentando desafios financeiros, a organização destaca-se na imprensa local e busca apoio através de doações e parcerias para manter seus projetos em funcionamento.
        </p>
        <br/>
        <p>
          A mensagem final da ONG é um apelo emocionado: "Junte-se a nós! Ajude-nos a manter e fortalecer esta ONG, e assim, dar esperança para essas crianças e adolescentes que se encontram em vulnerabilidade social. Pratique a solidariedade! Seja mais um parceiro do nosso projeto e faça parte destas transformações."
        </p>
        <br/>
        <h2>Legado</h2>
        <p>
          Assim, a história da ONG Nossa Ramadinha Melhor é um testemunho de perseverança, comprometimento e amor ao próximo, evidenciando como uma pequena iniciativa pode gerar um impacto significativo na vida de tantas famílias.
        </p>
      </section>

    </div>
  )
}

export default QuemSomos;