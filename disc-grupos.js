// Questionário DISC no formato clássico de William Marston: 24 grupos de 4 palavras,
// a pessoa marca a que MAIS e a que MENOS a descreve. Usado pela plataforma
// (index.html) e pela página do link enviado à pessoa (teste-disc.html).
// Cada grupo traz uma palavra por fator, na ordem D, I, S, C
const DISC_GRUPOS = [
  ["Decidido", "Comunicativo", "Paciente", "Preciso"],
  ["Competitivo", "Entusiasmado", "Leal", "Cuidadoso"],
  ["Direto", "Sociável", "Calmo", "Analítico"],
  ["Ousado", "Persuasivo", "Prestativo", "Organizado"],
  ["Determinado", "Otimista", "Estável", "Detalhista"],
  ["Assertivo", "Inspirador", "Tolerante", "Criterioso"],
  ["Exigente", "Expressivo", "Conciliador", "Metódico"],
  ["Independente", "Animado", "Bom ouvinte", "Disciplinado"],
  ["Objetivo", "Carismático", "Constante", "Lógico"],
  ["Corajoso", "Espontâneo", "Cooperativo", "Perfeccionista"],
  ["Pioneiro", "Popular", "Previsível", "Sistemático"],
  ["Firme", "Falante", "Gentil", "Reservado"],
  ["Focado em resultados", "Influente", "Confiável", "Cauteloso"],
  ["Ambicioso", "Bem-humorado", "Tranquilo", "Rigoroso"],
  ["Dominante", "Extrovertido", "Harmonioso", "Ponderado"],
  ["Rápido nas decisões", "Convincente", "Persistente", "Exato"],
  ["Desafiador", "Amigável", "Compreensivo", "Correto"],
  ["Autoconfiante", "Alegre", "Sereno", "Formal"],
  ["Enérgico", "Contagiante", "Atencioso", "Planejador"],
  ["Audacioso", "Envolvente", "Dedicado", "Questionador"],
  ["Líder nato", "Divertido", "Amável", "Minucioso"],
  ["Arrojado", "Cativante", "Sensível", "Prudente"],
  ["Resoluto", "Empolgado", "Moderado", "Convencional"],
  ["Incisivo", "Descontraído", "Acolhedor", "Racional"],
];
// Ordem de exibição das 4 palavras, fixa por grupo, para o fator não ficar sempre na mesma posição
const discOrdem = gi => [0, 1, 2, 3].sort((x, y) => ((x * 7 + gi * 3) % 4) - ((y * 7 + gi * 3) % 4));
