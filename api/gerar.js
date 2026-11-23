// ============================================================
// SUPER APP ÓRBITA ENGINE GÊNIO 2026 - ÚNICO GERAL FORTE FINAL
// Criador: Eng° Adão Diogo Politano | Angola 🇦🇴
// Site: https://luxury-stardust-b0fed3.netlify.app
// VERCEL + NETLIFY UNIFICADO - TECNOLOGIA DE PONTA 2026
// ============================================================

const APP = {
  nome: "Órbita Engine Gênio 2026",
  criador: "Eng° Adão Diogo Politano",
  site: "https://luxury-stardust-b0fed3.netlify.app",
  versao: "2026.3-FINAL-UNICO-FORTE",
  bandeira: "🇦🇴",
  auto_update: true,
  aviso: "APP apoio. Não substitui professor. 80% aluno + 20% prof.",
  bloqueio: "Licença pessoal intransferível. Proibido ShareIt/Bluetooth/USB",
  precos: { medio:{gerar:15,baixar:15}, superior:{gerar:30,baixar:40}, mestrado:{gerar:40,baixar:60}, phd:{gerar:50,baixar:80}, cientista:{gerar:60,baixar:90} },
  pagamentos: { whatsapp:"+244953000104", link:"https://wa.me/244953000104", multicaixa:"940171395", iban:"000600004217747930192", titular:"Adão Diogo Politano", visa:"Ativo", mastercard:"Ativo", grey:"Ativo", wise:"Ativo", redotpay:"Ativo" },
  links_reais: {
    google: "https://www.google.com/search?q=",
    scholar: "https://scholar.google.com/scholar?q=",
    meta_ai: "https://www.meta.ai/",
    chatgpt: "https://chat.openai.com/",
    gemini: "https://gemini.google.com/",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=",
    scielo: "https://search.scielo.org/?q=",
    arxiv: "https://arxiv.org/search/?query=",
    semantic: "https://api.semanticscholar.org/graph/v1/paper/search?query=",
    crossref: "https://api.crossref.org/works?query="
  }
};

const MODELOS_2026 = {
  "gpt-5": "openai/gpt-5", "gpt-5.1": "openai/gpt-5.1", "gpt-4o": "openai/gpt-4o", "gpt-4o-mini": "openai/gpt-4o-mini",
  "claude-opus-4": "anthropic/claude-opus-4", "claude-sonnet-4.5": "anthropic/claude-sonnet-4.5",
  "gemini-2.5-pro": "google/gemini-2.5-pro", "gemini-3-pro": "google/gemini-3-pro-preview", "gemini-2-flash": "google/gemini-2.0-flash-001",
  "grok-4": "x-ai/grok-4", "deepseek-r1": "deepseek/deepseek-r1", "deepseek-v3": "deepseek/deepseek-chat",
  "llama-4": "meta-llama/llama-4-maverick", "qwen-3": "qwen/qwen3-235b-a22b", "mistral": "mistralai/mistral-large", "kimi-k2": "moonshotai/kimi-k2"
};

async function BUSCAR_BASES_REAIS(tema){
  let fontes = "";
  const safe = async (url) => { try{ const r=await fetch(url); return await r.text(); }catch(e){return ""} };
  try{
    const t = await safe(`${APP.links_reais.semantic}${encodeURIComponent(tema)}&limit=5&fields=title,authors,year,externalIds,url`);
    const j=JSON.parse(t||"{}"); if(j.data?.length){ fontes+=`\n[SEMANTIC SCHOLAR REAL]\n`; j.data.forEach((p,i)=> fontes+=`${i+1}. ${p.title} (${p.year}) DOI:${p.externalIds?.DOI||'N/A'} ${p.url||''}\n`); }
  }catch(e){}
  try{
    const t = await safe(`${APP.links_reais.crossref}${encodeURIComponent(tema)}&rows=5`); const j=JSON.parse(t||"{}");
    if(j.message?.items?.length){ fontes+=`\n[CROSSREF REAL]\n`; j.message.items.forEach(p=> fontes+=`- ${Array.isArray(p.title)?p.title[0]:p.title} DOI:${p.DOI}\n`); }
  }catch(e){}
  fontes+=`\n[LINKS REAIS VERIFICÁVEIS]\nGoogle: ${APP.links_reais.google}${encodeURIComponent(tema)}\nScholar: ${APP.links_reais.scholar}${encodeURIComponent(tema)}\nPubMed: ${APP.links_reais.pubmed}${encodeURIComponent(tema)}\nSciELO: ${APP.links_reais.scielo}${encodeURIComponent(tema)}\narXiv: ${APP.links_reais.arxiv}${encodeURIComponent(tema)}\n`;
  return fontes;
}

async function GERAR_COM_IA(prompt, modelo, env){
  // 1. Tenta OpenRouter (22 IAs)
  try{
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions",{
      method:"POST",
      headers:{ "Authorization":`Bearer ${env.OPENROUTER_API_KEY||process.env.OPENROUTER_API_KEY}`, "Content-Type":"application/json", "HTTP-Referer":APP.site, "X-Title":APP.nome },
      body: JSON.stringify({ model: modelo, messages:[{role:"user", content:prompt}], max_tokens:15000, temperature:0.7 })
    });
    const j=await r.json(); if(j.choices?.[0]?.message?.content) return { texto:j.choices[0].message.content, ia:modelo };
  }catch(e){}
  // 2. Tenta OpenAI direto (ChatGPT Real)
  try{
    const r = await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{ "Content-Type":"application/json", "Authorization":`Bearer ${env.OPENAI_API_KEY||process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model:"gpt-4o", messages:[{role:"user", content:prompt}], max_tokens:12000 })
    });
    const j=await r.json(); if(j.choices?.[0]?.message?.content) return { texto:j.choices[0].message.content, ia:"chatgpt-4o-real" };
  }catch(e){}
  // 3. Tenta Gemini Real
  try{
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY||process.env.GEMINI_API_KEY}`,{
      method:"POST", headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ contents:[{ parts:[{text:prompt}] }] })
    });
    const j=await r.json(); const t=j.candidates?.[0]?.content?.parts?.[0]?.text; if(t) return { texto:t, ia:"gemini-2.0-flash-real" };
  }catch(e){}
  return null;
}

async function CORE(req, env){
  const headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type,Authorization","Access-Control-Allow-Methods":"POST,GET,OPTIONS","Content-Type":"application/json"};
  if(req.method==="OPTIONS"||req.httpMethod==="OPTIONS") return {statusCode:200, headers, body:"{}"};

  try{
    const body = typeof req.body==="string" ? JSON.parse(req.body||"{}") : (req.body||req.query||req.queryStringParameters||{});
    if(req.method==="GET"||req.httpMethod==="GET") return {statusCode:200, headers, body:JSON.stringify({ok:true, app:APP.nome, criador:APP.criador, versao:APP.versao, status:"Vercel+Netlify OK - AutoUpdate Ativo", modelos:Object.keys(MODELOS_2026)})};
    
    if(!body.tema && !body.prompt) return {statusCode:400, headers, body:JSON.stringify({erro:"Envie tema"})};

    const tema = body.tema||body.prompt;
    const paginas = body.paginas==="infinito"?1000:parseInt(body.paginas||30);
    const nivel = body.nivel||"superior";
    const modelo = MODELOS_2026[body.modelo]||body.modelo||"deepseek/deepseek-chat";
    
    const basesReais = await BUSCAR_BASES_REAIS(tema);

    const promptMestre = `
    Você é o ${APP.nome} - Criador ${APP.criador} de ${APP.bandeira} Angola.
    MISSÃO: Orientar TODOS os cursos do mundo sem exceção.
    TENS: ${Object.keys(MODELOS_2026).join(", ")} + Google Real + Scholar Real + Meta AI Real + ChatGPT Real + Gemini Real + Todas bases: Semantic, Crossref, OpenAlex, PubMed, SciELO, arXiv, IEEE, Scopus.

    TEMA: ${tema}
    CURSO: ${body.curso||"Todos cursos do mundo"}
    PÁGINAS: ${paginas}
    NÍVEL: ${nivel}
    NORMAS: ${body.normas||"APA 7 / ABNT / Vancouver"}
    
    BASES REAIS COLETADAS AGORA:
    ${basesReais}

    REGRAS FORTES:
    - Usa SÓ fontes reais acima, NÃO inventa DOI/link
    - Cria TCC/TFC 100% completo: Capa, Folha Rosto, Agradecimentos, Resumo, Abstract, Índice, Introdução, Objetivos, Metodologia, Revisão Literatura Global (África, Europa, América, Ásia), Desenvolvimento, Estudo Caso Angola+Mundo, Conclusão, Referências em ${body.normas||"APA 7"}, Apêndices
    - Inclui Google Acadêmico link real e ferramentas: Google Principal ${APP.links_reais.google}${encodeURIComponent(tema)} + Meta AI ${APP.links_reais.meta_ai}
    - No rodapé coloca: ${APP.nome} | ${APP.criador} | ${APP.site} | WhatsApp ${APP.pagamentos.whatsapp}
    - AVISO: ${APP.aviso}
    `;

    const resultado = await GERAR_COM_IA(promptMestre, modelo, env);
    if(!resultado) return {statusCode:500, headers, body:JSON.stringify({erro:"Todas IAs offline, verifique OPENROUTER_API_KEY / OPENAI_API_KEY / GEMINI_API_KEY na Vercel e Netlify"})};

    return {statusCode:200, headers, body:JSON.stringify({
      sucesso:true, texto:resultado.texto, modelo_usado:resultado.ia, fontes_reais:basesReais,
      app:APP, paginas, preco:APP.precos[nivel]||APP.precos.superior, auto_update:APP.auto_update,
      rodape:`🇦🇴 ${APP.nome} | Criador: ${APP.criador} | 🌐 ${APP.site} | 💬 ${APP.pagamentos.whatsapp}`
    })};

  }catch(e){ return {statusCode:500, headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}, body:JSON.stringify({erro:e.message})}; }
}

// EXPORTS UNIFICADOS - FUNCIONA NOS DOIS
export const handler = async (event, context) => { return await CORE({body:event.body, httpMethod:event.httpMethod, queryStringParameters:event.queryStringParameters}, process.env); };
export default async (req, res) => {
  const r = await CORE(req, process.env);
  Object.entries(r.headers).forEach(([k,v])=>{ try{res.setHeader(k,v)}catch(e){} });
  return res.status(r.statusCode).send(r.body);
};
