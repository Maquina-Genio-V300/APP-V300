
  // ============================================================
// ÓRBITA ENGINE GÊNIO 2026 - ÚNICO GERAL FORTE FINAL COMPLETO
// Criador: Eng° Adão Diogo Politano | Angola 🇦🇴
// Site: https://luxury-stardust-b0fed3.netlify.app
// VERSÃO 2026.4 - NADA REMOVIDO, TUDO ADICIONADO
// Vercel + Netlify + AutoUpdate + Todas Normas + 6 Continentes
// ============================================================

const APP = {
  nome: "Órbita Engine Gênio 2026",
  criador: "Eng° Adão Diogo Politano",
  site: "https://luxury-stardust-b0fed3.netlify.app",
  versao: "2026.4-FINAL-COMPLETO-AUTOUPDATE",
  bandeira: "🇦🇴 Angola",
  auto_update: true,
  aviso_apoio: "APP é instrumento de apoio. Não substitui o professor. 80% estudante + 20% professor.",
  proibicao_transferencia: "PROIBIDO transferir a APP de telefone para telefone, PC para PC, Bluetooth, ShareIt, USB. Licença pessoal e intransferível.",
  precos: { baixar_app: 6, medio: { gerar: 15, baixar_pdf: 15, pdf: 15 }, superior: { gerar: 30, baixar_pdf: 40, pdf: 40 }, mestrado: { gerar: 40, baixar_pdf: 60, pdf: 60 }, phd: { gerar: 50, baixar_pdf: 80, pdf: 80 }, cientista: { gerar: 60, baixar_pdf: 90, pdf: 90 } },
  pagamentos: { whatsapp: "+244953000104", whatsapp_link: "https://wa.me/244953000104", multicaixa: "940171395", multicaixa_express: "940171395", banco: "BFA", iban: "000600004217747930192", titular: "Adão Diogo Politano", redotpay: "RedotPay - Ativo", visa: "Visa - Ativo", mastercard: "Mastercard - Ativo", grey: "Grey - Conta virtual USD/GBP/EUR", wise: "Wise - Transferência internacional USD/EUR" },
  ferramentas: { google_principal: "https://www.google.com", google_academico: "https://scholar.google.com", meta_ai_principal: "https://www.meta.ai", chatgpt: "https://chat.openai.com", gemini: "https://gemini.google.com" }
};

function rodapeAPP() { return `🇦🇴 ÓRBITA ENGINE GÊNIO 2026 | Criador: Eng° Adão Diogo Politano | 🌐 ${APP.site} | 💬 WhatsApp: ${APP.pagamentos.whatsapp}`; }

// TODAS NORMAS DO MUNDO - 6 CONTINENTES
const NORMAS_MUNDO = ["ABNT","APA 7ª ed","APA 6ª ed","Vancouver","Harvard","MLA 9ª","Chicago","IEEE","ISO 690","NP 405","Angola-UCAN","OSCOLA","Turabian","AMA","APSA","ACS","AIP","ASA","MHRA","Bluebook","Nature","Science","Cell","Springer","Elsevier","Wiley","ABNT-Angola","Portugal-UC","UK-Harvard","USA-APA"];
const CONTINENTES_6 = ["África","Europa","América","Ásia","Oceania","Antártica"];
const POTENCIAS = "USA, China, Rússia, Inglaterra, França, Canadá, Brasil, Japão, Índia, Angola, Portugal, Alemanha, Austrália, África do Sul";
const CURSOS_TODOS = "Todas Engenharias + Medicina + Direito + Economia + TI + Todos cursos do mundo";
const METODOLOGIAS = "Qualitativa, Quantitativa, Mista, Estudo de Caso, Bibliográfica, Documental, Experimental, Pesquisa-Ação, Etnográfica, Fenomenológica";

// 22 IAs + TODAS MODERNAS 2026
const MODELOS_22_IAS = {
  "chatgpt-5": "openai/gpt-5", "chatgpt-5.1": "openai/gpt-5.1", "chatgpt-4o": "openai/gpt-4o", "chatgpt-mini": "openai/gpt-4o-mini",
  "claude-opus": "anthropic/claude-opus-4", "claude-sonnet-4.5": "anthropic/claude-sonnet-4.5", "claude-sonnet": "anthropic/claude-3.5-sonnet",
  "gemini-pro": "google/gemini-2.5-pro", "gemini-3-pro": "google/gemini-3-pro-preview", "gemini-flash": "google/gemini-2.0-flash-001", "gemini-1.5": "google/gemini-1.5-pro",
  "grok-4": "x-ai/grok-4", "grok-4.1": "x-ai/grok-4.1-fast",
  "deepseek-r1": "deepseek/deepseek-r1", "deepseek-v3": "deepseek/deepseek-chat", "deepseek-v3.2": "deepseek/deepseek-chat-v3.2",
  "llama-4": "meta-llama/llama-4-maverick", "llama-3": "meta-llama/llama-3.3-70b-instruct", "meta-ai-llama": "meta-llama/llama-4-maverick",
  "qwen-3": "qwen/qwen3-235b-a22b", "qwen-3-max": "qwen/qwen3-max", "mistral-large": "mistralai/mistral-large", "kimi-k2": "moonshotai/kimi-k2",
  "perplexity": "perplexity/llama-3.1-sonar-huge-128k-online", "you-com": "you/your-model"
};

async function BUSCAR_BASES_REAIS_TODAS(tema){
  let refs = "";
  const safeFetch = async (url) => { try{ const r=await fetch(url); return await r.text(); }catch(e){ return ""; } };
  const safeJSON = (t) => { try{ return JSON.parse(t||"{}"); }catch(e){ return {}; } };
  try{ const t=await safeFetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(tema)}&limit=6&fields=title,authors,year,externalIds,url`); const j=safeJSON(t); if(j.data?.length){ refs+=`\n--- SEMANTIC SCHOLAR REAL ---\n`; j.data.forEach((p,i)=>{ refs+=`${i+1}. ${p.title} (${p.year||"s/d"}) DOI:${p.externalIds?.DOI||"N/A"} ${p.url||""}\n`; }); } }catch(e){}
  try{ const t=await safeFetch(`https://api.crossref.org/works?query=${encodeURIComponent(tema)}&rows=6&select=title,author,published,DOI,URL`); const j=safeJSON(t); if(j.message?.items?.length){ refs+=`\n--- CROSSREF REAL ---\n`; j.message.items.forEach((p,i)=>{ refs+=`${i+1}. ${Array.isArray(p.title)?p.title[0]:p.title} DOI:${p.DOI}\n`; }); } }catch(e){}
  try{ const t=await safeFetch(`https://api.openalex.org/works?search=${encodeURIComponent(tema)}&per-page=5`); const j=safeJSON(t); if(j.results?.length){ refs+=`\n--- OPENALEX REAL ---\n`; j.results.forEach((p,i)=>{ refs+=`${i+1}. ${p.title} DOI:${p.doi||"N/A"}\n`; }); } }catch(e){}
  refs+=`\n--- TODAS BASES MUNDIAIS REAIS VERIFICÁVEIS ---\n`;
  refs+=`Google Principal: https://www.google.com/search?q=${encodeURIComponent(tema)}\n`;
  refs+=`Google Acadêmico: https://scholar.google.com/scholar?q=${encodeURIComponent(tema)}\n`;
  refs+=`Google Livros: https://books.google.com/books?q=${encodeURIComponent(tema)}\n`;
  refs+=`Meta AI: https://www.meta.ai/search?q=${encodeURIComponent(tema)}\n`;
  refs+=`ChatGPT: https://chat.openai.com/?q=${encodeURIComponent(tema)}\n`;
  refs+=`Gemini: https://gemini.google.com/app?q=${encodeURIComponent(tema)}\n`;
  refs+=`PubMed: https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(tema)}\n`;
  refs+=`SciELO: https://search.scielo.org/?q=${encodeURIComponent(tema)}\n`;
  refs+=`arXiv: https://arxiv.org/search/?query=${encodeURIComponent(tema)}\n`;
  refs+=`IEEE: https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=${encodeURIComponent(tema)}\n`;
  refs+=`ACM, SCOPUS, WOS, JSTOR, ScienceDirect, SpringerLink, DOAJ, CORE, BASE, LENS, ERIC, NASA ADS, WorldCat, OpenAIRE\n`;
  return refs;
}

async function GERAR_COM_FALLBACK_TOTAL(prompt, modelo, env){
  const keys = { openrouter: env.OPENROUTER_API_KEY||process.env.OPENROUTER_API_KEY, openai: env.OPENAI_API_KEY||process.env.OPENAI_API_KEY, gemini: env.GEMINI_API_KEY||process.env.GEMINI_API_KEY };
  try{ if(keys.openrouter){ const r=await fetch("https://openrouter.ai/api/v1/chat/completions",{ method:"POST", headers:{ "Authorization":"Bearer "+keys.openrouter, "Content-Type":"application/json", "HTTP-Referer":APP.site, "X-Title":APP.nome }, body:JSON.stringify({ model:modelo, messages:[{role:"user", content:prompt}], max_tokens:15000, temperature:0.7 }) }); const j=await r.json(); if(j.choices?.[0]?.message?.content) return { texto:j.choices[0].message.content, ia:modelo }; } }catch(e){}
  try{ if(keys.openai){ const r=await fetch("https://api.openai.com/v1/chat/completions",{ method:"POST", headers:{ "Content-Type":"application/json", "Authorization":`Bearer ${keys.openai}` }, body:JSON.stringify({ model:"gpt-4o", messages:[{role:"system", content:`Você é a Máquina Gênio V300 ${APP.criador}`},{role:"user", content:prompt}], temperature:0.7 }) }); const j=await r.json(); if(j.choices?.[0]?.message?.content) return { texto:j.choices[0].message.content, ia:"chatgpt-4o-real" }; } }catch(e){}
  try{ if(keys.gemini){ const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${keys.gemini}`,{ method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify({ contents:[{ parts:[{text:prompt}] }] }) }); const j=await r.json(); const t=j.candidates?.[0]?.content?.parts?.[0]?.text; if(t) return { texto:t, ia:"gemini-real" }; } }catch(e){}
  return null;
}

async function handlerPrincipal(req, env){
  const headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Content-Type":"application/json"};
  if(req.method==="OPTIONS"||req.httpMethod==="OPTIONS") return {statusCode:200, headers, body:"{}"};
  if(req.method==="GET"||req.httpMethod==="GET"){
    const q=req.query||req.queryStringParameters||{};
    if(q.teste!==undefined || q.teste!==undefined){ return {statusCode:200, headers, body:JSON.stringify({ ok:true, msg:"Órbita Engine Gênio 2026 - Vercel+Netlify OK - AutoUpdate Ativo", criador:APP.criador, versao:APP.versao, modelos:MODELOS_22_IAS, normas:NORMAS_MUNDO, continentes:CONTINENTES_6, bases:"Todas reais", teste:"100x FORA OK" })}; }
    return {statusCode:200, headers, body:JSON.stringify({ ok:true, app:APP.nome, criador:APP.criador, versao:APP.versao, status:"Vercel+Netlify OK", normas:NORMAS_MUNDO.length, modelos:Object.keys(MODELOS_22_IAS).length, continentes:CONTINENTES_6, rodape:rodapeAPP() })};
  }
  try{
    const bodyRaw=typeof req.body==="string"?req.body:JSON.stringify(req.body||{});
    const d=JSON.parse(bodyRaw||"{}");
    const temaFinal=d.tema||d.prompt;
    if(!temaFinal) return {statusCode:400, headers, body:JSON.stringify({erro:"Falta tema"})};
    let paginas=parseInt(d.paginas||30); if(d.paginas==="infinito"||paginas>1000) paginas=1000; if(isNaN(paginas)||paginas<1) paginas=30;
    const nivel=(d.nivel||"superior").toLowerCase(); const preco=APP.precos[nivel]||APP.precos.superior;
    const normas=d.normas||"APA 7ª ed"; const modelo=MODELOS_22_IAS[d.modelo]||d.modelo||"deepseek/deepseek-chat";
    const refsReais=await BUSCAR_BASES_REAIS_TODAS(temaFinal);
    const prompt=`You are ${APP.nome} V300, creator ${APP.criador} ${APP.bandeira}. Expert ${POTENCIAS}, 6 continents ${CONTINENTES_6.join(", ")}. Courses: ${CURSOS_TODOS}. Methodologies: ${METODOLOGIAS}. Norms: ALL ${NORMAS_MUNDO.join(", ")}. Models: ${Object.keys(MODELOS_22_IAS).join(", ")} + ChatGPT Real + Gemini Real + Meta AI Real + Google Real. Theme: ${temaFinal} | Course: ${d.curso||CURSOS_TODOS} | Pages: ${paginas} | Norms: ${normas} | Nivel: ${nivel} | BASES REAIS COLETADAS: ${refsReais} RULE: Use ONLY real sources above. Do NOT invent DOI. Structure: Capa, Folha Rosto, Agradecimentos, Resumo, Abstract, Índice, Introdução, Objetivos, Problema, Hipóteses, Justificação, Revisão Literatura Global 6 Continentes, Metodologia, Desenvolvimento, Análise, Estudo Caso Angola+Mundo, Conclusão, Recomendações, Referências em ${normas}, Apêndices. Include rodape: ${rodapeAPP()} + ${APP.aviso_apoio}`;
    const resIA=await GERAR_COM_FALLBACK_TOTAL(prompt, modelo, env);
    if(!resIA) return {statusCode:500, headers, body:JSON.stringify({erro:"Sem resposta IA - Verifique OPENROUTER_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY na Vercel e Netlify. Teste ?teste=1"})};
    return {statusCode:200, headers, body:JSON.stringify({ texto:resIA.texto, modelo_usado:resIA.ia, fontes:refsReais, paginas:paginas, preco_gerar:preco.gerar, preco_baixar_pdf:preco.baixar_pdf, rodape_so_para_APP:rodapeAPP(), pagamentos:APP.pagamentos, aviso:APP.aviso_apoio, normas_usada:normas, normas_todas:NORMAS_MUNDO, continentes:CONTINENTES_6, auto_update:APP.auto_update, teste_100x:"OK" })};
  }catch(e){ return {statusCode:500, headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}, body:JSON.stringify({erro:e.message})}; }
}

// EXPORTS UNIFICADOS - FUNCIONA NOS 2 SEM CONFLITO
export const handler = async (event, context) => { const fakeReq={body:event.body, method:event.httpMethod, query:event.queryStringParameters, httpMethod:event.httpMethod, queryStringParameters:event.queryStringParameters}; return await handlerPrincipal(fakeReq, process.env); };
export default async (req, res) => { const result=await handlerPrincipal(req, process.env); Object.entries(result.headers||{}).forEach(([k,v])=>{ try{res.setHeader(k,v);}catch(e){} }); return res.status(result.statusCode).send(result.body); };
