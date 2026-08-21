export const WHATSAPP_URL = "https://wa.me/5511921556211?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20ser%20atendido(a)!";
export const OFFICE_ADDRESS = "Edifício Santa Maria - R. Quintino Bocaiúva, n° 240 - Sala 61, 6° andar - Centro, Itatiba - SP, 13250-320";
export const OFFICE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=R.+Quintino+Bocai%C3%BAva,+240+-+Centro,+Itatiba+-+SP,+13250-320";
export const OFFICE_PHONE = "(11) 92155-6211";
export const OFFICE_EMAIL = "contato@jeronimobicharelli.adv.br";

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlight: string;
  scope: string[];
}

export interface Differential {
  title: string;
  desc: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  desc: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface OfficePhoto {
  id: string;
  url: string;
  title: string;
  category: "advogados" | "estrutura" | "atendimento";
  caption: string;
  alt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  oab?: string;
  specialty: string;
  bio: string;
  photoUrl: string;
}

export const OFFICE_GALLERY_PHOTOS: OfficePhoto[] = [
  {
    id: "reuniao-estrategica",
    url: "/IMG_8216.jpg",
    title: "Análise Estratégica & Planejamento",
    category: "advogados",
    caption: "Corpo jurídico alinhando teses e estratégias preventivas e contenciosas.",
    alt: "Advogados do escritório Jerônimo Bicharelli em reunião de alinhamento estratégico"
  },
  {
    id: "socio-advogado",
    url: "/IMG_8243.jpg",
    title: "Atendimento Consultivo Personalizado",
    category: "advogados",
    caption: "Advogado responsável pela condução técnica e consultiva dos casos.",
    alt: "Advogado do escritório Jerônimo Bicharelli em consultoria jurídica"
  },
  {
    id: "advogados-equipe",
    url: "/IMG_8235.jpg",
    title: "Corpo Jurídico Especializado",
    category: "advogados",
    caption: "Equipe com atuação focada em Direito Empresarial, Tributário, Famílias e Cível.",
    alt: "Corpo jurídico do escritório Jerônimo Bicharelli Advogados"
  },
  {
    id: "consultoria-individual",
    url: "/IMG_8245.jpg",
    title: "Foco na Solução do Cliente",
    category: "atendimento",
    caption: "Dedicação integral à análise minuciosa de cada documento e demanda.",
    alt: "Advogado em consultoria com cliente no escritório"
  },
  {
    id: "alinhamento-casos",
    url: "/IMG_8250.jpg",
    title: "Defesa Técnica Rigorosa",
    category: "advogados",
    caption: "Estruturação de defesas e pareceres jurídicos com elevado rigor técnico.",
    alt: "Advogados reunidos analisando processos jurídicos"
  },
  {
    id: "instalacoes-sala",
    url: "/unnamed.webp",
    title: "Sala de Atendimento Executivo",
    category: "estrutura",
    caption: "Ambiente moderno, reservado e acolhedor para reuniões confidenciais.",
    alt: "Sala de reuniões executiva do escritório Jerônimo Bicharelli em Itatiba"
  },
  {
    id: "sala-reuniao-moderna",
    url: "/unnamed (1).webp",
    title: "Infraestrutura de Reuniões & Videoconferências",
    category: "estrutura",
    caption: "Tecnologia e conforto para reuniões presenciais e comarcas de todo o país.",
    alt: "Sala de reunião com vista e equipamentos de videoconferência"
  },
  {
    id: "ambiente-escritorio",
    url: "/unnamed (2).webp",
    title: "Espaço de Trabalho & Conforto",
    category: "estrutura",
    caption: "Instalações planejadas para privacidade, produtividade e recepção de excelência.",
    alt: "Ambiente do escritório Jerônimo Bicharelli Advogados em Itatiba"
  },
  {
    id: "recepcao-design",
    url: "/unnamed (3).webp",
    title: "Recepção & Edifício Santa Maria",
    category: "estrutura",
    caption: "Localizado no Edifício Santa Maria, no Centro de Itatiba - SP.",
    alt: "Estrutura do escritório Jerônimo Bicharelli"
  },
  {
    id: "biblioteca-juridica",
    url: "/IMG_8312.jpg",
    title: "Pesquisa Doutrinária & Biblioteca",
    category: "estrutura",
    caption: "Acervo de doutrinas, jurisprudências e periódicos jurídicos atualizados.",
    alt: "Biblioteca jurídica e espaço de estudos do escritório"
  },
  {
    id: "estrutura-corporativa",
    url: "/IMG_8304.jpg",
    title: "Ambiente Corporativo",
    category: "estrutura",
    caption: "Estrutura completa para atender empresas, famílias e pessoas com excelência.",
    alt: "Detalhes do espaço corporativo do escritório"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "dr-marcos-jeronimo",
    name: "Dr. Marcos Jerônimo",
    role: "Advogado Especialista",
    badge: "Atendimento a Pessoas e Famílias",
    specialties: [
      "Direito de Família",
      "Pensão Alimentícia",
      "Direito Trabalhista",
      "Direito Criminal"
    ],
    bio: "Sua atuação é pautada pela análise cuidadosa de cada situação, comunicação próxima e definição da estratégia jurídica adequada às circunstâncias apresentadas, com dedicação a pessoas e famílias.",
    photoUrl: "/unnamed (1).webp",
    photoAlt: "Dr. Marcos Jerônimo - Advogado Especialista Jerônimo Bicharelli Advogados",
    whatsappMessage: "Olá, Dr. Marcos Jerônimo! Vim pelo site e gostaria de orientação jurídica."
  },
  {
    id: "dr-jerody-bicharelli",
    name: "Dr. Jerody Bicharelli",
    role: "Advogado Estrategista",
    badge: "Empresarial, Imobiliário & Patrimônio",
    specialties: [
      "Direito Empresarial & Contratos",
      "Direito Imobiliário",
      "Ações de Indenização",
      "Inventário & Sucessões",
      "Gestão de Riscos & Prevenção"
    ],
    bio: "Sua atuação combina análise preventiva, estruturação jurídica e condução estratégica de questões empresariais e patrimoniais para empresas, empresários e famílias.",
    photoUrl: "/unnamed (2).webp",
    photoAlt: "Dr. Jerody Bicharelli - Advogado Estrategista Jerônimo Bicharelli Advogados",
    whatsappMessage: "Olá, Dr. Jerody Bicharelli! Vim pelo site e gostaria de uma consultoria jurídica."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-empresarial",
    title: "Direito Empresarial",
    shortDesc: "Assessoria jurídica para empresários e empresas que buscam mais segurança para tomar decisões, estruturar operações e reduzir riscos.",
    fullDesc: "Atuação em contratos, relações empresariais, prevenção de conflitos, organização societária, compliance e suporte jurídico estratégico contínuo.",
    highlight: "Sua empresa precisa de decisões juridicamente seguras, não apenas de soluções quando o problema já aconteceu.",
    scope: [
      "Contratos empresariais e comerciais",
      "Estruturação societária e acordos de sócios",
      "Compliance e adequação regulatória",
      "Prevenção e mediação de conflitos societários",
      "Suporte consultivo contínuo e gestão de riscos"
    ]
  },
  {
    id: "direito-tributario",
    title: "Direito Tributário",
    shortDesc: "Questões tributárias podem impactar diretamente o caixa e a estratégia de uma empresa.",
    fullDesc: "Atuação na análise de autuações, multas, cobranças administrativas, planejamento tributário e questões relacionadas às mudanças no sistema tributário brasileiro. Também realizamos análises tributárias para pessoas físicas.",
    highlight: "Antes de simplesmente pagar ou aceitar uma cobrança, é importante entender se ela está correta.",
    scope: [
      "Defesas em autuações fiscais e execuções",
      "Planejamento tributário estratégico",
      "Revisão e recuperação de créditos tributários",
      "Consultoria sobre a reforma tributária",
      "Análise e regularização fiscal para pessoas físicas"
    ]
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista",
    shortDesc: "Atuação preventiva e contenciosa em relações profissionais, contratos e políticas corporativas.",
    fullDesc: "Atuação preventiva e contenciosa em questões relacionadas a contratos, passivos trabalhistas, políticas internas, relações profissionais, jornadas, procedimentos empresariais e gestão de riscos.",
    highlight: "Prevenção jurídica reduz riscos antes que eles se transformem em processos.",
    scope: [
      "Auditoria trabalhista e prevenção de passivos",
      "Elaboração e revisão de contratos de trabalho",
      "Implementação de políticas e regulamentos internos",
      "Negociações coletivas e acordos sindicais",
      "Defesa estratégica em reclamações trabalhistas"
    ]
  },
  {
    id: "familias-e-sucessoes",
    title: "Direito das Famílias e Sucessões",
    shortDesc: "Organização e proteção do patrimônio familiar com discrição e sensibilidade técnica.",
    fullDesc: "Atuação em inventários, partilhas, planejamento sucessório, divórcios e demais situações relacionadas à organização e proteção do patrimônio familiar.",
    highlight: "Organizar o patrimônio também é uma forma de cuidar de quem importa.",
    scope: [
      "Inventários judiciais e extrajudiciais em cartório",
      "Planejamento sucessório e holdings familiares",
      "Divórcios consensuais e litigiosos",
      "Partilhas e dissolução de união estável",
      "Pactos antenupciais e proteção patrimonial"
    ]
  },
  {
    id: "consumidor-e-bancario",
    title: "Direito do Consumidor e Bancário",
    shortDesc: "Atuação em fraudes financeiras, golpes bancários e reparação de danos patrimoniais.",
    fullDesc: "Atuação em questões envolvendo golpes bancários, fraudes via PIX, cobranças indevidas, falhas na prestação de serviços e pedidos de reparação.",
    highlight: "Nem todo prejuízo precisa ser suportado por quem foi vítima.",
    scope: [
      "Recuperação de valores em fraudes e golpes via PIX",
      "Ações indenizatórias por falhas de segurança bancária",
      "Revisão de contratos bancários e juros abusivos",
      "Defesa contra cobranças indevidas e negativações",
      "Responsabilização de instituições financeiras"
    ]
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDesc: "Segurança jurídica em transações, contratos e regularização do patrimônio imobiliário.",
    fullDesc: "Atuação em contratos imobiliários, aquisição de imóveis, leilões, ITBI, regularizações e conflitos relacionados ao patrimônio imobiliário.",
    highlight: "Um imóvel representa patrimônio. A decisão jurídica também precisa acompanhar esse valor.",
    scope: [
      "Due diligence e assessoria em compra e venda de imóveis",
      "Análise e arrematação segura em leilões judiciais/extrajudiciais",
      "Regularização fundiária, usucapião e averbações",
      "Discussão de ITBI e tributos imobiliários",
      "Contratos de locação comercial e residencial de alto padrão"
    ]
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDesc: "Análise de benefícios e planejamento para aposentadorias seguras e vantajosas.",
    fullDesc: "Análise de aposentadorias, benefícios previdenciários, revisões e demais situações que envolvam direitos perante a Previdência Social.",
    highlight: "Conhecer seus direitos é o primeiro passo para tomar uma decisão mais segura.",
    scope: [
      "Planejamento previdenciário personalizado",
      "Revisão da vida toda e cálculo de melhores regras",
      "Requerimento e concessão de aposentadorias especiais",
      "Benefícios por incapacidade e auxílios",
      "Recursos administrativos e ações contra o INSS"
    ]
  }
];

export const INDIVIDUAL_QUESTIONS = [
  "“Tenho direito nessa situação?”",
  "“Preciso realmente entrar na Justiça?”",
  "“Esse prejuízo é somente meu?”",
  "“Esse contrato está correto?”",
  "“Meu inventário precisa ser judicial?”",
  "“Existe uma forma mais simples de resolver isso?”"
];

export const COMPANY_SERVICES = [
  "Contratos empresariais",
  "Relações trabalhistas",
  "Prevenção de passivos",
  "Planejamento tributário",
  "Revisão de autuações",
  "Compliance",
  "Estrutura societária",
  "Gestão de riscos jurídicos"
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Atendimento individualizado",
    desc: "Cada caso possui características próprias. Por isso, toda atuação começa pela compreensão detalhada da situação."
  },
  {
    title: "Comunicação clara",
    desc: "O cliente deve compreender o cenário, os riscos existentes e os caminhos jurídicos disponíveis."
  },
  {
    title: "Atuação estratégica",
    desc: "Cada decisão é avaliada considerando aspectos jurídicos, impactos, riscos e objetivos."
  },
  {
    title: "Prevenção",
    desc: "Antecipar riscos jurídicos pode evitar conflitos, prejuízos e decisões tomadas sem a orientação necessária."
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: "01",
    title: "Conte o que aconteceu",
    desc: "Entre em contato e apresente brevemente sua situação."
  },
  {
    number: "02",
    title: "Análise do caso",
    desc: "As informações e documentos disponíveis são analisados para identificar os principais aspectos jurídicos envolvidos."
  },
  {
    number: "03",
    title: "Orientação",
    desc: "Você recebe uma explicação clara sobre o cenário e os caminhos juridicamente possíveis."
  },
  {
    number: "04",
    title: "Estratégia jurídica",
    desc: "Quando houver necessidade de atuação, é definida a estratégia mais adequada às particularidades do caso."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "golpe-pix-responsabilidade-bancaria",
    title: "Golpe via PIX: quando pode existir responsabilidade da instituição financeira?",
    category: "Direito Bancário & Consumidor",
    readTime: "4 min de leitura",
    date: "Atualizado recentemente",
    summary: "Entenda os critérios jurídicos que definem o dever de segurança dos bancos e a possibilidade de restituição de valores transferidos sob fraude ou coação.",
    content: [
      "A facilidade e a instantaneidade das transferências via PIX transformaram o sistema financeiro nacional, mas também abriram espaço para novas modalidades de golpes e fraudes eletrônicas.",
      "Muitas vítimas acreditam equivocadamente que, por terem digitado a senha ou realizado a transferência sob coação/engano, não possuem direito a qualquer tipo de ressarcimento perante a instituição financeira.",
      "No entanto, a jurisprudência consolidada do Superior Tribunal de Justiça (STJ), sumulada sob o nº 479, estabelece que as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias.",
      "Quando há movimentações atípicas, fora do perfil habitual do correntista, quebras de limites noturnos sem validação biométrica rigorosa ou falha no Mecanismo Especial de Devolução (MED), a instituição pode ser responsabilizada civilmente pela reparação integral dos prejuízos."
    ]
  },
  {
    id: "inventario-em-cartorio-quando-e-possivel",
    title: "Inventário em cartório: quando é possível?",
    category: "Famílias e Sucessões",
    readTime: "3 min de leitura",
    date: "Atualizado recentemente",
    summary: "Conheça as vantagens da via extrajudicial para partilha de bens, requisitos legais e como economizar tempo e custos na sucessão patrimonial.",
    content: [
      "O inventário extrajudicial, realizado diretamente em Cartório de Notas por meio de escritura pública, representa uma evolução fundamental para desburocratizar a transmissão patrimonial.",
      "Para que o inventário possa ser realizado em cartório, é necessário que todos os herdeiros sejam maiores e capazes, haja consenso absoluto quanto à partilha de bens e a assistência obrigatória de um advogado.",
      "Mesmo em casos onde existe testamento válido, decisões recentes e provimentos das corregedorias de justiça vêm admitindo a realização extrajudicial, desde que haja prévia homologação judicial do testamento ou expressa autorização.",
      "A economia de tempo é expressiva: enquanto um processo judicial pode se arrastar por anos, o inventário em cartório costuma ser concluído em poucas semanas, preservando a liquidez dos bens e a harmonia familiar."
    ]
  },
  {
    id: "como-prevenir-riscos-juridicos-empresa",
    title: "Como prevenir riscos jurídicos dentro de uma empresa?",
    category: "Direito Empresarial",
    readTime: "5 min de leitura",
    date: "Atualizado recentemente",
    summary: "Práticas essenciais de governança, auditoria de contratos e compliance para resguardar a solidez financeira e operacional do negócio.",
    content: [
      "No ambiente corporativo contemporâneo, o departamento jurídico deixou de ser um centro de custos reativo para se tornar um pilar estratégico de geração de valor e contenção de perdas.",
      "A esmagadora maioria das contingências trabalhistas, autuações fiscais e disputas societárias decorre de instrumentos contratuais genéricos, falta de padronização em rotinas operacionais ou ausência de assessoria preventiva.",
      "A implementação de uma matriz de riscos jurídicos permite identificar vulnerabilidades antes que se convertam em litígios formais. Isso inclui revisão periódica de contratos de prestação de serviços, adequação à LGPD, políticas trabalhistas claras e planejamento tributário contínuo.",
      "Investir em advocacia preventiva não significa gastar mais, mas sim evitar indenizações desnecessárias e proteger o patrimônio dos sócios e a continuidade das operações."
    ]
  }
];
