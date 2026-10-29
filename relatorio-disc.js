// Relatório comportamental gerado a partir do resultado DISC (textos próprios da plataforma).
// D = Executor, I = Comunicador, S = Planejador, C = Analista
const PERFIS_REL = {
  D: { nome: "Executor", tipo: "Realizador",
    resumo: "{n} é movido(a) por desafios e resultados. Gosta de decidir, assumir o comando e ver as coisas andando rápido. Prefere objetividade a rodeios.",
    sub: ["Iniciativa", "Determinação", "Competitividade", "Independência"],
    habilidades: "Tem facilidade para tomar decisões, destravar situações paradas e assumir responsabilidades. Rende bem quando há metas claras e autonomia para agir.",
    comuns: "Costuma ir direto ao ponto e encarar problemas de frente. Não se intimida com pressão ou com situações novas. Gosta de ter controle sobre o próprio trabalho e de ser avaliado(a) pelo que entrega. Assume riscos calculados e tende a puxar o grupo para a ação quando percebe lentidão.",
    vantagens: "Traz velocidade, foco em resultado e coragem para mudar o que não está funcionando. Em momentos de crise, costuma ser quem organiza a resposta e toma a frente.",
    desvantagens: "Pode soar impaciente ou impositivo(a) e passar por cima da opinião dos outros quando está com pressa. Às vezes decide antes de ouvir todos os envolvidos e dá pouca atenção a detalhes e a sentimentos.",
    gestao: "Funciona melhor com uma liderança que dê metas claras, autonomia e espaço para propor soluções. Conversas curtas e objetivas, com foco em resultado, funcionam mais do que controle de cada passo. Vale combinar limites e prazos com antecedência.",
    lideranca: "Lidera pelo exemplo e pela cobrança de resultados. Define direção com rapidez e espera que a equipe acompanhe o ritmo. Precisa cuidar para ouvir mais, reconhecer o esforço das pessoas e delegar sem atropelar.",
    comunicacao: "Comunicação direta, curta e assertiva. Prefere fatos e conclusões a longas explicações. Pode parecer ríspido(a) sem intenção, principalmente sob pressão.",
    ambiente: "Ambiente dinâmico, com desafios, metas e liberdade para agir.",
    tarefas: "Executa várias frentes ao mesmo tempo e prioriza o que traz resultado mais rápido. Pode deixar de lado tarefas rotineiras ou muito detalhadas.",
    motivacao: "Desafios, metas ambiciosas, autonomia e reconhecimento pelos resultados.",
    valoriza: "Competência, agilidade e comprometimento com o resultado.",
    necessidades: "Controle sobre o próprio trabalho, poder de decisão e novos desafios.",
    afastamento: "Rotina sem desafio, lentidão, falta de autonomia e excesso de regras.",
    resultados: "Assume a frente, define prioridades e cobra a entrega. Busca o caminho mais rápido até o objetivo.",
    organizacao: "Organiza o trabalho em torno das prioridades e dos prazos. Planeja o suficiente para agir e ajusta no caminho.",
    pressao: "Costuma reagir bem e até render mais sob pressão, mas pode ficar impaciente e autoritário(a).",
    mudancas: "Aceita bem e muitas vezes provoca mudanças, principalmente quando enxerga ganho de resultado.",
    relacionamentos: "Relaciona-se de forma prática e direta. Valoriza quem entrega e é objetivo(a). Pode ser visto(a) como pouco paciente com quem tem outro ritmo.",
    decisoes: "Decide rápido, com base em resultados esperados. Prefere errar agindo a perder a oportunidade esperando." },
  I: { nome: "Comunicador", tipo: "Influenciador",
    resumo: "{n} é voltado(a) para pessoas. Comunica-se com facilidade, transmite entusiasmo e gosta de ambientes leves, com troca e reconhecimento.",
    sub: ["Sociabilidade", "Entusiasmo", "Persuasão", "Otimismo"],
    habilidades: "Tem facilidade para criar relacionamentos, convencer, motivar o grupo e representar a equipe. Rende bem em atividades com contato com clientes e colegas.",
    comuns: "Costuma ser uma presença animada no grupo, que aproxima as pessoas e melhora o clima. Expressa ideias com facilidade, pensa em possibilidades e gosta de novidades. Valoriza ser bem aceito(a) e reconhecido(a). Prefere conversar a escrever e aprende melhor fazendo junto com outras pessoas.",
    vantagens: "Traz energia, criatividade e boa comunicação. Ajuda a engajar pessoas, a resolver conflitos com leveza e a criar um ambiente de colaboração.",
    desvantagens: "Pode se dispersar, prometer mais do que consegue cumprir e deixar detalhes e prazos de lado. Tende a evitar conversas difíceis para não se indispor e pode decidir pela emoção.",
    gestao: "Funciona melhor com uma liderança próxima, que reconheça as conquistas e acompanhe prazos com combinados claros. Dividir projetos grandes em entregas menores ajuda a manter o foco. Feedbacks devem ser cuidadosos e frequentes.",
    lideranca: "Lidera inspirando e envolvendo as pessoas. Cria um clima positivo e dá abertura para a equipe. Precisa cuidar para cobrar resultados com firmeza e não deixar problemas sem tratar.",
    comunicacao: "Comunicação aberta, expressiva e calorosa. Usa humor e histórias. Pode falar mais do que ouvir e perder a objetividade.",
    ambiente: "Ambiente descontraído, com pessoas, conversa e reconhecimento.",
    tarefas: "Prefere tarefas variadas e em grupo. Rende menos em atividades isoladas, repetitivas ou muito detalhadas.",
    motivacao: "Reconhecimento, aceitação do grupo, novidades e oportunidades de se expressar.",
    valoriza: "Simpatia, entusiasmo e abertura para ideias.",
    necessidades: "Contato com pessoas, prestígio e um ambiente favorável.",
    afastamento: "Rejeição, isolamento, críticas em público e ambientes frios ou hostis.",
    resultados: "Busca resultados envolvendo e motivando as pessoas ao redor. Usa a persuasão para abrir caminhos.",
    organizacao: "Organização e planejamento não são o ponto mais forte. Funciona melhor com listas simples, lembretes e alguém que ajude a acompanhar prazos.",
    pressao: "Reage bem a uma pressão moderada, mas sob pressão forte e prolongada pode se desmotivar e perder o ritmo.",
    mudancas: "Lida bem com mudanças e costuma gostar de novidades, desde que o grupo esteja junto.",
    relacionamentos: "Relaciona-se com facilidade e faz amizades no trabalho. Costuma ser querido(a) pelo grupo. Pode ter dificuldade em dizer não.",
    decisoes: "Decide pela intuição e pela opinião das pessoas de confiança. Pode decidir rápido demais quando está empolgado(a)." },
  S: { nome: "Planejador", tipo: "Colaborador",
    resumo: "{n} é calmo(a), paciente e constante. Valoriza estabilidade, cooperação e um ritmo de trabalho previsível. É alguém em quem a equipe confia.",
    sub: ["Paciência", "Persistência", "Cooperação", "Lealdade"],
    habilidades: "Tem facilidade para dar continuidade ao trabalho, apoiar colegas, ouvir com atenção e manter a qualidade no dia a dia. Rende bem em rotinas bem definidas e no atendimento.",
    comuns: "Costuma ser uma presença estável, que mantém a calma e ajuda a equipe a seguir em frente. Prefere saber com antecedência o que vai acontecer e gosta de concluir o que começa. Coloca o bem do grupo à frente do interesse pessoal e evita conflitos.",
    vantagens: "Traz confiabilidade, constância e harmonia. É alguém que escuta, cumpre combinados e sustenta o trabalho no longo prazo.",
    desvantagens: "Pode resistir a mudanças rápidas, ter dificuldade em dizer não e guardar insatisfações para não gerar conflito. Às vezes demora para tomar decisões e evita se expor.",
    gestao: "Funciona melhor com uma liderança que explique o porquê das mudanças, avise com antecedência e ofereça segurança e apoio. Reconhecimento pela dedicação e uma rotina clara ajudam a render mais.",
    lideranca: "Lidera pelo apoio e pela constância. Cuida das pessoas e mantém um ambiente estável. Precisa cuidar para ser mais firme nas cobranças e tomar decisões difíceis no tempo certo.",
    comunicacao: "Comunicação calma, gentil e atenciosa. Ouve mais do que fala. Pode não expressar discordâncias e preocupações.",
    ambiente: "Ambiente tranquilo, estável e cooperativo, com rotina e pessoas de confiança.",
    tarefas: "Prefere fazer uma tarefa de cada vez, do começo ao fim, com método. Rende menos com interrupções e mudanças de prioridade constantes.",
    motivacao: "Segurança, estabilidade, reconhecimento pela dedicação e um bom clima de equipe.",
    valoriza: "Lealdade, companheirismo e respeito.",
    necessidades: "Segurança, previsibilidade, harmonia e tempo para se adaptar.",
    afastamento: "Conflitos, mudanças bruscas, insegurança e pressão constante.",
    resultados: "Busca resultados com persistência e cooperação. Não desiste até concluir.",
    organizacao: "Organiza o trabalho em rotinas e etapas. Planeja com antecedência e prefere seguir o plano combinado.",
    pressao: "Aguenta bem a pressão no curto prazo, mas em longo prazo pode se desgastar em silêncio.",
    mudancas: "Tende a resistir a mudanças, principalmente as inesperadas. Precisa de tempo e explicação para se adaptar.",
    relacionamentos: "Relaciona-se com profundidade e lealdade. Mantém vínculos por muito tempo e é procurado(a) para conversar.",
    decisoes: "Decide com calma, ouvindo as pessoas envolvidas e buscando consenso. Pode adiar decisões difíceis." },
  C: { nome: "Analista", tipo: "Especialista",
    resumo: "{n} é analítico(a), cuidadoso(a) e preciso(a). Valoriza qualidade, regras claras e informações bem fundamentadas antes de agir.",
    sub: ["Exatidão", "Disciplina", "Senso crítico", "Organização"],
    habilidades: "Tem facilidade com análise, detalhes, números, processos e controle de qualidade. Rende bem em atividades técnicas e que exigem precisão.",
    comuns: "Costuma pensar antes de agir, checar informações e seguir procedimentos. Tem padrões altos para si e para os outros. Prefere trabalhar com dados e critérios objetivos e evita improvisos. É reservado(a) até ganhar confiança.",
    vantagens: "Traz qualidade, organização e segurança técnica. Identifica erros e riscos antes que virem problema e ajuda a criar processos confiáveis.",
    desvantagens: "Pode ser perfeccionista, crítico(a) demais e demorar para decidir por medo de errar. Às vezes parece distante e tem dificuldade com ambiguidade e mudanças sem justificativa.",
    gestao: "Funciona melhor com uma liderança que dê instruções claras, critérios de qualidade definidos e tempo para fazer bem feito. Mudanças devem vir com justificativa. Feedbacks devem ser objetivos e baseados em fatos.",
    lideranca: "Lidera pela organização, pelo método e pelo exemplo técnico. Oferece clareza e coerência à equipe. Precisa cuidar para não microgerenciar e para reconhecer mais as pessoas.",
    comunicacao: "Comunicação objetiva, precisa e baseada em fatos. Prefere a escrita e a preparação prévia. Pode soar fria ou excessivamente crítica.",
    ambiente: "Ambiente organizado, silencioso, com regras claras e poucas interrupções.",
    tarefas: "Executa com precisão, uma tarefa de cada vez, conferindo cada etapa. Prefere trabalhar com autonomia técnica.",
    motivacao: "Qualidade, clareza de regras, reconhecimento técnico e tempo para fazer bem feito.",
    valoriza: "Competência técnica, coerência e responsabilidade.",
    necessidades: "Informações completas, padrões definidos, segurança e previsibilidade.",
    afastamento: "Desorganização, improviso, erros evitáveis, críticas ao trabalho e mudanças sem explicação.",
    resultados: "Busca resultados com método, disciplina e atenção à qualidade. Prefere fazer certo a fazer rápido.",
    organizacao: "É uma das forças do perfil: planeja, documenta e mantém tudo em ordem. Pode demorar ao buscar o plano perfeito.",
    pressao: "Sob pressão pode ficar tenso(a) e mais crítico(a). Prazos curtos que comprometem a qualidade geram desgaste.",
    mudancas: "Aceita mudanças quando entende os motivos e tem tempo para analisar. Mudanças repentinas geram desconforto.",
    relacionamentos: "Relaciona-se de forma reservada e seletiva. Leva tempo para criar intimidade, mas é leal e confiável.",
    decisoes: "Decide com base em análise, dados e critérios. Pode adiar decisões quando faltam informações." },
};
// Frase extra quando há um segundo fator forte
const TRACO_REL = {
  D: "Os traços de Executor somam iniciativa e foco em resultado, deixando o perfil mais firme e rápido nas decisões.",
  I: "Os traços de Comunicador somam facilidade de relacionamento e entusiasmo, deixando o perfil mais expressivo e persuasivo.",
  S: "Os traços de Planejador somam calma, paciência e constância, deixando o perfil mais cooperativo e estável.",
  C: "Os traços de Analista somam cuidado, método e atenção aos detalhes, deixando o perfil mais criterioso e organizado.",
};
// Competências: peso de cada fator (D, I, S, C)
const COMPET_REL = [
  ["Tolerância", "Aceitar formas diferentes de pensar e agir.", [0, .3, .6, .1]],
  ["Planejamento", "Planejar ações, processos e atividades.", [0, 0, .4, .6]],
  ["Empatia", "Compreender o que o outro sente e precisa.", [0, .5, .5, 0]],
  ["Capacidade de ouvir", "Ouvir com atenção antes de responder.", [0, 0, .7, .3]],
  ["Concentração", "Manter atenção e constância em tarefas longas.", [0, 0, .4, .6]],
  ["Condescendência", "Considerar a opinião e o desejo dos outros.", [0, .2, .8, 0]],
  ["Persistência", "Seguir até concluir, mesmo com obstáculos.", [.2, 0, .5, .3]],
  ["Perfil técnico", "Aprender e aplicar recursos técnicos ao trabalho.", [0, 0, .2, .8]],
  ["Organização", "Manter ideias, tarefas e ambiente em ordem.", [0, 0, .4, .6]],
  ["Detalhismo", "Atenção minuciosa a fatos e detalhes.", [0, 0, .1, .9]],
  ["Rigorosidade", "Exigência com precisão e qualidade.", [.4, 0, 0, .6]],
  ["Orientação a resultado", "Foco em entregar e atingir metas.", [.8, 0, 0, .2]],
  ["Multitarefas", "Lidar com várias tarefas ao mesmo tempo.", [.5, .5, 0, 0]],
  ["Proatividade", "Agir antes de ser solicitado(a).", [.7, .3, 0, 0]],
  ["Dinamismo", "Energia e agilidade em ambientes que mudam.", [.5, .5, 0, 0]],
  ["Dominância", "Postura firme, de comando e decisão rápida.", [1, 0, 0, 0]],
  ["Extroversão", "Ser expansivo(a) e comunicativo(a).", [.1, .9, 0, 0]],
  ["Relacionamento interpessoal", "Criar vínculos e boas relações.", [0, .6, .4, 0]],
  ["Sociabilidade", "Buscar contato e convívio com as pessoas.", [0, 1, 0, 0]],
];
// Palavras do teste que indicam características negativas (usadas no indicador de autoimagem)
const NEGATIVAS_REL = new Set(["Anti-Social", "Arrogante", "Barulhento", "Depressivo", "Desconfiado", "Desmotivado", "Desorganizado",
  "Egocêntrico", "Egoísta", "Espalhafatoso", "Exagerado", "Frio", "Impaciente", "Indeciso", "Indisciplinado", "Inflexível", "Ingênuo",
  "Inseguro", "Insensível", "Intolerante", "Medroso", "Orgulhoso", "Pessimista", "Pretensioso", "Procrastinador", "Sarcástico",
  "Temeroso", "Vaidoso", "Vingativo"]);

// Participação de cada fator no total (soma 100%)
function partesDisc(v) {
  const t = v.D + v.I + v.S + v.C || 1;
  return Object.fromEntries("DISC".split("").map(f => [f, v[f] / t * 100]));
}
// Fator principal e, se tiver 25% ou mais do total, o segundo
function perfilPorPartes(v) {
  const p = partesDisc(v), ord = "DISC".split("").sort((a, b) => p[b] - p[a]);
  return ord[0] + (p[ord[1]] >= 25 ? ord[1] : "");
}
const nivelParte = p => p < 12 ? "Extremamente baixo" : p < 17 ? "Muito baixo" : p < 21 ? "Baixo" : p < 25 ? "Normal" : p < 29 ? "Alto" : p < 34 ? "Muito alto" : "Extremamente alto";
const nivel5 = (x, lim, nomes) => nomes[lim.findIndex(l => x < l) < 0 ? nomes.length - 1 : lim.findIndex(l => x < l)];
const NIVEIS = ["Baixo", "Normal baixo", "Normal alto", "Alto", "Muito alto"];

// Para cada fator: quanto das palavras positivas e das negativas daquele fator a pessoa marcou sobre si
// fatorDe: { palavra: "D" | "I" | "S" | "C" } vindo da tabela disc_adjetivos
function fatoresPosNeg(sou, fatorDe) {
  const r = {};
  for (const f of "DISC") {
    const doFator = Object.keys(fatorDe).filter(w => fatorDe[w] === f);
    const pos = doFator.filter(w => !NEGATIVAS_REL.has(w)), neg = doFator.filter(w => NEGATIVAS_REL.has(w));
    const pct = (lista) => lista.length ? lista.filter(w => sou.includes(w)).length / lista.length * 100 : 0;
    r[f] = { pos: pct(pos), neg: pct(neg) };
  }
  return r;
}

function graficoPosNeg(sou, fatorDe) {
  if (!fatorDe || !Object.keys(fatorDe).length) return "";
  const g = fatoresPosNeg(sou, fatorDe), fmt = x => x.toFixed(1).replace(".", ",") + "%";
  return `<section class="rel-sec"><h3>Gráfico de fatores positivos e negativos</h3>
    <p class="rel-muted">Para cada perfil, a parte das qualidades (+) e dos pontos de atenção (−) daquele perfil que a pessoa reconheceu em si mesma.</p>
    <div class="rel-pn">${"DISC".split("").map(f => `<div class="rel-pn-col">
      <div class="rel-pn-nums"><span class="t-${f}">+${fmt(g[f].pos)}</span><span class="t-${f}">−${fmt(g[f].neg)}</span></div>
      <div class="rel-pn-bar"><div class="rel-pn-pos f-${f}" style="width:${g[f].pos / 2}%"></div><div class="rel-pn-neg f-${f}" style="width:${g[f].neg / 2}%"></div></div>
      <b>${PERFIS_REL[f].nome}</b></div>`).join("")}</div>
  </section>`;
}

function relatorioDisc(d, c, esc, fatorDe) {
  const v = { D: d.D, I: d.I, S: d.S, C: d.C }, p = partesDisc(v), perfil = perfilPorPartes(v);
  const P = PERFIS_REL[perfil[0]], n = (c?.nome || "A pessoa").split(" ")[0];
  const t = s => esc(s).replaceAll("{n}", esc(n));
  const r = d.respostas?.formato === "adjetivos" ? d.respostas : null;
  const titulo = perfil.split("").map(f => PERFIS_REL[f].nome).join(" ");
  const sec = (nome, txt) => `<section class="rel-sec"><h3>${nome}</h3><p>${txt}</p></section>`;
  const comSec = k => t(P[k]) + (perfil[1] && k === "comuns" ? " " + esc(TRACO_REL[perfil[1]]) : "");

  // indicadores (só para o teste por adjetivos)
  let indicadores = "";
  if (r) {
    const a = r.adaptado || {}, sou = r.sou || [];
    const exig = "DISC".split("").reduce((s, f) => s + Math.abs((a[f] ?? v[f]) - v[f]), 0) / 2;
    const neg = sou.filter(w => NEGATIVAS_REL.has(w)).length, posPct = sou.length ? (sou.length - neg) / sou.length * 100 : 0;
    const ind = [
      ["Exigência do meio", nivel5(exig, [10, 20, 30, 45], ["Baixa", "Normal baixa", "Normal alta", "Alta", "Muito alta"]), Math.min(100, exig * 2),
        "Diferença entre como a pessoa é (passo 2) e como sente que os outros esperam que ela seja (passo 3). Quanto maior, mais ela sente que precisa mudar o próprio jeito no trabalho."],
      ["Autoimagem", nivel5(posPct, [60, 75, 88, 97], ["Baixa", "Normal baixa", "Normal alta", "Alta", "Muito alta"]), posPct,
        "Proporção de características positivas entre as que a pessoa marcou sobre si mesma. Indica o quanto ela se vê de forma positiva."],
      ["Intensidade das respostas", nivel5(sou.length, [8, 14, 22, 32], ["Baixa", "Normal baixa", "Normal alta", "Alta", "Muito alta"]), Math.min(100, sou.length / 40 * 100),
        "Quantidade de palavras marcadas sobre si mesma. Poucas palavras podem indicar respostas mais contidas ou pouca energia no momento."],
    ];
    const alerta = neg === 0 ? "A pessoa não marcou nenhuma característica negativa sobre si mesma. Isso pode indicar respostas mais cautelosas; vale confirmar o resultado na conversa de devolutiva."
      : "As respostas trazem características positivas e negativas, o que indica um teste respondido com sinceridade.";
    indicadores = `<section class="rel-bloco"><h2>Indicadores</h2><p class="rel-alerta">${alerta}</p>
      ${ind.map(([nome, nv, pct, txt]) => `<div class="rel-ind"><div class="rel-ind-top"><b>${nome}</b><span>${nv.toUpperCase()}</span></div><div class="rel-track"><div style="width:${Math.max(4, pct)}%"></div></div><p>${txt}</p></div>`).join("")}
    </section>
    <section class="rel-bloco"><h2>Perfil natural x exigência do meio</h2>
      <p class="rel-muted">Comparação entre como a pessoa é (perfil natural) e como sente que os outros esperam que ela seja.</p>
      <div class="rel-comp">${"DISC".split("").map(f => `<div class="rel-comp-col"><div class="rel-comp-bars"><div class="f-${f}" style="height:${v[f]}%" title="Natural: ${v[f]}"></div><div class="f-${f} rel-adapt" style="height:${a[f] ?? 0}%" title="Exigência: ${a[f] ?? 0}"></div></div><b>${PERFIS_REL[f].nome}</b><small>${v[f]} · ${a[f] ?? "—"}</small></div>`).join("")}</div>
      <p class="rel-muted"><span class="rel-leg"></span> Perfil natural <span class="rel-leg rel-adapt"></span> Exigência do meio</p>
    </section>`;
  }

  const comp = COMPET_REL.map(([nome, def, w]) => { const x = w[0] * v.D + w[1] * v.I + w[2] * v.S + w[3] * v.C;
    return `<div class="rel-ind"><div class="rel-ind-top"><b>${nome}</b><span>${nivel5(x, [30, 45, 60, 75], NIVEIS).toUpperCase()}</span></div><div class="rel-track"><div style="width:${Math.max(4, Math.min(100, x))}%"></div></div><p>${def}</p></div>`; }).join("");

  return `<article class="relatorio">
    <header class="rel-capa">
      <img src="logo.png" alt="AFLUX Estratégia Financeira Contábil" class="rel-logo">
      <div><p class="rel-muted">Relatório Comportamental</p><h1>${esc(c?.nome || "Colaborador")}</h1>
      <p class="rel-muted">${esc(c?.cargo || "")}${c?.cargo ? " · " : ""}Teste realizado em ${esc(d.data.split("-").reverse().join("/"))}</p></div>
    </header>
    <section class="rel-bloco rel-centro">
      <p class="rel-muted">Neste momento, ${esc(n)} está:</p>
      <h2 class="rel-titulo">${titulo}</h2>
      <div class="rel-barra">${"DISC".split("").map(f => `<div class="f-${f}" style="width:${p[f]}%">${perfil.includes(f) ? "<i></i>" : ""}</div>`).join("")}</div>
      <div class="rel-fatores">${"DISC".split("").map(f => `<div><b>${p[f].toFixed(2).replace(".", ",")}%</b><span class="t-${f}">${PERFIS_REL[f].nome}</span><small>${nivelParte(p[f]).toUpperCase()}</small></div>`).join("")}</div>
      <p>${t(P.resumo)}</p>
    </section>
    <section class="rel-bloco">
      ${sec("Subcaracterísticas", "As subcaracterísticas deste perfil são: <b>" + [...P.sub, ...(perfil[1] ? PERFIS_REL[perfil[1]].sub.slice(0, 2) : [])].filter((x, i, l) => l.indexOf(x) === i).join(", ") + "</b>.")}
      ${sec("Habilidades básicas", t(P.habilidades))}
      ${sec("Habilidades comuns", comSec("comuns"))}
      ${r ? graficoPosNeg(r.sou || [], fatorDe) : ""}
      ${sec("Vantagens", t(P.vantagens))}
      ${sec("Desvantagens", t(P.desvantagens))}
    </section>
    ${indicadores}
    <section class="rel-bloco">
      ${sec("Estilo de gestão requerido", t(P.gestao))}
      ${sec("Estilo de liderança", t(P.lideranca))}
      ${sec("Estilo de comunicação", t(P.comunicacao))}
      ${sec("Ambiente de trabalho", t(P.ambiente))}
      ${sec("Desempenho de tarefas", t(P.tarefas))}
    </section>
    <section class="rel-bloco">
      ${sec("Fatores motivacionais", t(P.motivacao))}
      ${sec("Valoriza os outros por", t(P.valoriza))}
      ${sec("Necessidades básicas", t(P.necessidades))}
      ${sec("Fatores de afastamento", t(P.afastamento))}
      ${sec("Forma como busca resultados", t(P.resultados))}
      ${sec("Organização e planejamento", t(P.organizacao))}
    </section>
    <section class="rel-bloco">
      ${sec("Reação sob pressão", t(P.pressao))}
      ${sec("Relação com mudanças", t(P.mudancas))}
      ${sec("Relacionamentos", t(P.relacionamentos))}
      ${sec("Tomando decisões", t(P.decisoes))}
    </section>
    <section class="rel-bloco"><h2>Competências</h2><p class="rel-muted">Tendências estimadas a partir da combinação dos quatro fatores.</p><div class="rel-grade">${comp}</div></section>
    <p class="rel-muted rel-rodape">Relatório gerado pela plataforma Gente &amp; Gestão · AFLUX. O perfil comportamental descreve tendências e deve ser usado como apoio à conversa, nunca como única base para decisões sobre a pessoa.</p>
  </article>`;
}
