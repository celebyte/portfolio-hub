export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* HERO */}
      <section className="px-8 py-24 text-center border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-zinc-400 text-sm mb-4">
            PortfolioHUB
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ana
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas apaixonada por
            tecnologia, criatividade e soluções digitais.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contato"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Contato
            </a>

            <a
              href="#projetos"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-8 py-20 max-w-6xl mx-auto" id="sobre">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

            <p className="text-zinc-300 leading-8 mb-4">
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou
              construindo minha trajetória na área de tecnologia.
            </p>

            <p className="text-zinc-300 leading-8 mb-4">
              Tenho interesse em desenvolvimento web, banco de dados,
              experiência do usuário, design digital e marketing.
            </p>

            <p className="text-zinc-300 leading-8">
              Busco constantemente aprender novas ferramentas e desenvolver
              projetos que unam criatividade e tecnologia.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Informações</h3>

            <div className="space-y-4 text-zinc-300">
              <p>
                <span className="font-semibold text-white">Curso:</span>{" "}
                Análise e Desenvolvimento de Sistemas
              </p>

              <p>
                <span className="font-semibold text-white">Área de Interesse:</span>{" "}
                Desenvolvimento Web, Banco de Dados e Tecnologia
              </p>

              <p>
                <span className="font-semibold text-white">Localização:</span>{" "}
                Brasília - DF
              </p>

              <p>
                <span className="font-semibold text-white">Objetivo:</span>{" "}
                Estágio na área de tecnologia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section className="px-8 py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Habilidades & Competências
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HTML",
              "CSS",
              "Git & GitHub",
              "Banco de Dados",
              "Python",
              "Canva",
              "Marketing Digital",
              "Atendimento ao Cliente",
              "Organização",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="px-8 py-20 max-w-6xl mx-auto" id="projetos">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Streamaí - Banco de Dados
            </h3>

            <p className="text-zinc-300 leading-7">
              Projeto acadêmico de modelagem de banco de dados para uma
              plataforma de streaming, envolvendo criação de tabelas,
              relacionamentos e estruturação de informações.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Projetos em Python
            </h3>

            <p className="text-zinc-300 leading-7">
              Desenvolvimento de exercícios e aplicações simples utilizando
              lógica de programação e fundamentos da linguagem Python.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Design e Social Media
            </h3>

            <p className="text-zinc-300 leading-7">
              Criação de artes digitais, identidade visual, postagens e peças
              gráficas utilizando Canva e estratégias de comunicação visual.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Marketing Digital
            </h3>

            <p className="text-zinc-300 leading-7">
              Estudos em tráfego pago, marketing digital e estruturação de
              estratégias para divulgação online.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="px-8 py-20 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experiência & Formação
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Formação Acadêmica
              </h3>

              <p className="text-zinc-300 leading-7">
                Curso Superior em Análise e Desenvolvimento de Sistemas.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Experiência Profissional
              </h3>

              <p className="text-zinc-300 leading-7">
                Experiência com atendimento ao cliente, vendas e organização,
                desenvolvendo habilidades de comunicação, resolução de
                problemas e relacionamento interpessoal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMENDAÇÕES */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Recomendações
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-300 leading-8 italic">
              “Profissional dedicada, organizada e com grande facilidade de
              aprendizado.”
            </p>

            <p className="mt-6 font-semibold">Professor(a)</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-300 leading-8 italic">
              “Demonstra criatividade, responsabilidade e excelente comunicação
              em equipe.”
            </p>

            <p className="mt-6 font-semibold">Colega de Projeto</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        className="px-8 py-24 border-t border-zinc-800 text-center"
        id="contato"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contato</h2>

          <p className="text-zinc-300 mb-10 leading-8">
            Estou aberta a oportunidades de estágio, networking e novos
            projetos.
          </p>

          <div className="space-y-4 text-lg text-zinc-300">
            <p>📧 avilinosilveira@gmail.com</p>
            <p>💼 LinkedIn href="https://www.linkedin.com/in/ana-cele-871bb73b2/"</p>
            <p>💻 GitHub href="https://github.com/celebyte"</p>
          </div>
        </div>
      </section>
    </div>
  );
}
