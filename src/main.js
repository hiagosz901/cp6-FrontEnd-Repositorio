/* ======================= EDITE AQUI =======================
   Tudo que aparece no site vem destas três estruturas.
   — CONFIG: textos e contatos (campos vazios são ocultados automaticamente).
   — PROJETOS: um objeto por projeto. Para publicar um projeto novo, preencha "url".
       image: caminho ou URL de uma captura real (ex.: "img/hikar.webp"). Vazio = capa tipográfica.
       Se a imagem não carregar, o site volta sozinho para a capa tipográfica.
       hue: não é mais usado (o tema agora é preto e branco). ano: opcional.
   — EXPERIENCIA: linhas da seção Experiência.
   ========================================================== */
const CONFIG = {
  nome: "Hiago Silva de Oliveira",
  intro: "Estudante de Engenharia de Software na FIAP e Jovem Aprendiz na XP Inc. Desenvolvo projetos web e soluções digitais.",
  sobre: "Sou Hiago Silva de Oliveira, estudante de Engenharia de Software na FIAP e Jovem Aprendiz na XP Inc., na área de Governança de Operações. Também desenvolvo projetos web e soluções digitais.",
  email: "",        // ex.: "voce@email.com"
  whatsapp: "",     // ex.: "5511999999999" (DDI + DDD + número)
  linkedin: "",     // ex.: "https://www.linkedin.com/in/seu-perfil"
  github: "",       // ex.: "https://github.com/seu-usuario"
  cidade: "São Paulo", fuso: "America/Sao_Paulo"
};
const PROJETOS = [
  { nome:"Hikar Locadora", tipo:"Site institucional", hue:42,
    desc:"Site da Hikar, locadora de veículos para motoristas de aplicativo em São Paulo: como funciona a locação, vantagens, depoimentos e formulário de contato com atendimento por WhatsApp.",
    tech:["Site institucional","Formulário","WhatsApp"], url:"https://hikar.com.br/", image:"img/hikar.png" },
  { nome:"ASTEC — Caça-Vazamento", tipo:"Site institucional", ano:2026, hue:205,
    desc:"Site da ASTEC, empresa de detecção de vazamentos sem quebra em São Paulo, com catálogo de serviços, diferenciais e contato direto por WhatsApp.",
    tech:["Site institucional","WhatsApp"], url:"https://asteccacavazamento.com.br/", image:"img/astec.png" },
  { nome:"Kortesia Desentupidora", tipo:"Redesign", ano:2026, hue:350,
    /* texto mantido do arquivo original: o site bloqueia leitura automática e não pude conferir */
    desc:"Reescrita completa da arquitetura de CSS com tokens semânticos, grade de 8 pontos, escala tipográfica modular e foco em acessibilidade.",
    tech:["CSS","Design tokens","Acessibilidade"], url:"https://www.kortesiadesentupidora.com.br/", image:"img/kortesia.png" },
  { nome:"HighFlowTech", tipo:"Site institucional", ano:2026, hue:260,
    desc:"Site institucional da HighFlowTech, com serviços de tecnologia, automação e soluções digitais.",
    tech:["Desenvolvimento web","Automação","Tecnologia"], url:"https://landpage-high-tech-flow-xdaz.vercel.app/", image:"img/HighFlow.png" },
  { nome:"Força zero", tipo:"Landing page", ano:2026, hue:145,
    desc:"Página de apresentação do ebook Força do Zero, um guia de 30 dias para começar a treinar.",
    tech:["Landing page","E-book","Fitness"], url:"https://ebook-forca-zero.vercel.app/", image:"img/PaginaVendasFZ.png" },
  { nome:"Projeto 90 dias", tipo:"Landing page", ano:2026, hue:135,
    desc:"Página do Projeto 90 Dias, um programa de evolução do iniciante ao intermediário em 12 semanas.",
    tech:["Landing page","Fitness"], url:"https://projeto90dias-rosy.vercel.app/", image:"img/Projeto90dias.png" },
  { nome:"Hikar — Bot de mensagens", tipo:"Interface de automação", ano:2026, hue:215,
    desc:"Interface de automação de mensagens para a Hikar Comércio e Locação, cobrindo WhatsApp, e-mail e SMS com diferentes gatilhos.",
    tech:["Interface web","Automação"], url:"", image:"" },
  { nome:"Correia Desentupidora", tipo:"Sistema de páginas de serviço", ano:2026, hue:2,
    desc:"Sistema de páginas de serviço em 10 seções para uma desentupidora de São Paulo, em vermelho, preto e branco, com voz de marca em português.",
    tech:["HTML","CSS","JavaScript"], url:"", image:"" }
];
const EXPERIENCIA = [
  { quando:"Atualmente", titulo:"Jovem Aprendiz — XP Inc.", texto:"Atuação na área de Governança de Operações." },
  { quando:"Atualmente", titulo:"Engenharia de Software — FIAP", texto:"Graduação em São Paulo." },
  { quando:"2026", titulo:"High Flow Tech", texto:"Serviços de desenvolvimento web e automação para pequenos negócios de São Paulo: cardápios, landing pages e sistemas de captação de leads." }
];
/* ========================================================== */

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>/^https?:\/\//i.test(String(u||"").trim())?String(u).trim():"";
const pad=n=>String(n).padStart(2,"0"), N=PROJETOS.length;
const RM=matchMedia("(prefers-reduced-motion:reduce)"), root=document.documentElement;

$("#intro").textContent=CONFIG.intro;
const noAr=PROJETOS.filter(p=>safeUrl(p.url)).length, tipos=[...new Set(PROJETOS.map(p=>p.tipo))];
$("#count-all").textContent=`${pad(noAr)} no ar · ${pad(N-noAr)} em breve`;
$("#foot").textContent=`© ${new Date().getFullYear()} ${CONFIG.nome}`;
$("#stats").innerHTML=[[N,"Projetos"],[noAr,"No ar"],[tipos.length,"Formatos"]].map(([n,l])=>`<div class="stat" data-r><b>${pad(n)}</b><span class="mono">${l}</span></div>`).join("");
const mq=tipos.concat(tipos).map(t=>`<span>${esc(t)}</span>`).join("");
$("#mq").innerHTML=`<div class="track"><div class="g">${mq}</div><div class="g">${mq}</div></div>`;

/* projetos */
function capa(p){
  const ini=p.nome.split(/[\s—-]+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("");
  let dom="";try{const u=safeUrl(p.url);if(u)dom=new URL(u).hostname.replace(/^www\./,"")}catch(e){}
  return `<div class="art cover"><span class="mono-mark" aria-hidden="true">${esc(ini)}</span><span class="tag">${esc(p.tipo)}</span>${dom?`<span class="dom">${esc(dom)}</span>`:""}</div>`;
}
$("#list").innerHTML=PROJETOS.map((p,i)=>{
  const url=safeUrl(p.url), img=safeUrl(p.image)||/^(\.{0,2}\/|[\w-]+\/|data:image\/)/.test(p.image||"")?p.image:"";
  const art=img?`<img class="art" src="${esc(img)}" alt="Captura de tela do site ${esc(p.nome)}" loading="lazy" decoding="async">`:capa(p);
  const link=url?`<a class="go live" href="${esc(url)}" target="_blank" rel="noopener" aria-label="Ver projeto ${esc(p.nome)} (abre em nova aba)"><span>Ver projeto</span><i class="arr" aria-hidden="true">↗</i></a>`:`<span class="go off"><span>Link em breve</span><i class="arr" aria-hidden="true">–</i></span>`;
  const tags=[p.ano,...(p.tech||[])].filter(Boolean);
  return `<article class="card" data-i="${i+1}" data-state="${url?"live":"soon"}"><div class="shot">${art}</div>
  <div class="body"><div class="top mono"><span>${pad(i+1)}</span><span>${esc(p.tipo)}</span></div><h3>${esc(p.nome)}</h3><p>${esc(p.desc)}</p>
  <div class="st">${tags.map(t=>`<em>${esc(t)}</em>`).join("")}</div>${link}</div></article>`}).join("");
/* se uma captura não carregar, volta para a capa tipográfica */
$$(".shot img").forEach(im=>{
  const p=PROJETOS[+im.closest(".card").dataset.i-1];
  const fb=()=>{im.outerHTML=capa(p)};
  im.addEventListener("error",fb,{once:true});
  if(im.complete&&im.naturalWidth===0&&im.currentSrc)fb();
});
const cards=$$(".card");
/* filtro */
$$(".flt").forEach(b=>b.addEventListener("click",()=>{
  const f=b.dataset.f;$$(".flt").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  cards.forEach(c=>c.hidden=!(f==="all"||c.dataset.state===f))}));

/* experiência e sobre */
$("#exp").innerHTML=EXPERIENCIA.map(e=>`<div class="row" data-r><span class="y mono">${esc(e.quando)}</span><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></div>`).join("");
$("#about-text").innerHTML=CONFIG.sobre.split(" ").map(w=>`<span>${esc(w)}</span>`).join(" ");
const words=$$("#about-text span");

/* contatos: só aparece o que estiver preenchido */
const mail=(CONFIG.email||"").trim(), wa=(CONFIG.whatsapp||"").replace(/\D/g,"");
const contatos=[];
if(mail)contatos.push(["E-mail",`<a href="mailto:${esc(mail)}">${esc(mail)}</a>`]);
if(wa)contatos.push(["WhatsApp",`<a href="https://wa.me/${wa}" target="_blank" rel="noopener">Abrir conversa ↗</a>`]);
if(safeUrl(CONFIG.linkedin))contatos.push(["LinkedIn",`<a href="${esc(safeUrl(CONFIG.linkedin))}" target="_blank" rel="noopener">Abrir ↗</a>`]);
if(safeUrl(CONFIG.github))contatos.push(["GitHub",`<a href="${esc(safeUrl(CONFIG.github))}" target="_blank" rel="noopener">Abrir ↗</a>`]);
$("#links").innerHTML=contatos.length?contatos.map(([n,h])=>`<div><span class="mono">${n}</span>${h}</div>`).join(""):`<div><span class="mono">Contato</span><span>Em breve</span></div>`;
if(!contatos.length)console.warn("Portfólio: preencha CONFIG.email, whatsapp, linkedin ou github para exibir contatos.");
$("#mail-big").textContent=mail;
$$(".js-mail").forEach(b=>{if(!mail)b.hidden=true;else b.addEventListener("click",copyMail)});
function copyMail(){(navigator.clipboard?navigator.clipboard.writeText(mail):Promise.reject()).then(()=>toast("E-mail copiado"),()=>{location.href="mailto:"+mail})}
function toast(t){const el=$("#toast");el.textContent=t;el.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("on"),1800)}

/* menu (mobile) */
const menu=$("#menu"),mb=$("#menubtn");
function setMenu(o){menu.classList.toggle("open",o);mb.setAttribute("aria-expanded",String(o));mb.firstElementChild.textContent=o?"Fechar":"Menu";root.style.overflow=o?"hidden":""}
mb.addEventListener("click",()=>setMenu(!menu.classList.contains("open")));
menu.addEventListener("click",e=>{if(e.target.closest("a,button"))setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
matchMedia("(min-width:821px)").addEventListener("change",e=>{if(e.matches)setMenu(false)});

/* relógio */
function tick(){try{$("#clock").textContent=`${CONFIG.cidade}, `+new Intl.DateTimeFormat("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:CONFIG.fuso}).format(new Date())}catch(e){}}
tick();setInterval(tick,30000);

/* entrada */
requestAnimationFrame(()=>requestAnimationFrame(()=>root.classList.add("ready")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$("[data-r],.card").forEach(el=>io.observe(el));

/* hero: o conteúdo sobe e some ao rolar, com altímetro; texto "sobre" acende ao rolar */
const hin=$(".hero-in"),alt=$("#alt"),ab=$("#about-text");let ticking=false;
function onScroll(){ticking=false;const vh=innerHeight,y=scrollY;
 if(y<vh*1.2&&!RM.matches){const p=Math.min(1,y/vh);hin.style.transform=`translateY(${(-p*18).toFixed(2)}vh)`;hin.style.opacity=(1-p*1.1).toFixed(2);alt.textContent=String(Math.round(p*8848)).padStart(4,"0")}
 const r=ab.getBoundingClientRect(),pr=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.3)));
 const n=Math.round(pr*words.length);words.forEach((w,i)=>w.classList.toggle("lit",i<n))}
addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
addEventListener("resize",()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll)}});onScroll();

/* partículas subindo (só roda com o hero visível) */
const cv=$("#fx"),cx=cv.getContext("2d");let W=0,H=0,P=[],raf=0;
function size(){const d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
 P=Array.from({length:Math.round(W/14)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,v:Math.random()*.55+.15,a:Math.random()*.6+.2}))}
function draw(step){cx.clearRect(0,0,W,H);cx.fillStyle="#fff";
 for(const p of P){if(step){p.y-=p.v;if(p.y<-4){p.y=H+4;p.x=Math.random()*W}}
  cx.globalAlpha=p.a*Math.max(0,p.y/H);cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fill()}}
function loop(){draw(true);raf=requestAnimationFrame(loop)}
size();addEventListener("resize",()=>{size();if(!raf)draw(false)});
if(RM.matches)draw(false);
else new IntersectionObserver(es=>{if(es[0].isIntersecting){if(!raf)raf=requestAnimationFrame(loop)}else{cancelAnimationFrame(raf);raf=0}}).observe($(".hero"));

/* cursor "Abrir / Em breve" nos projetos (só com mouse; o loop roda apenas quando necessário) */
const cur=$("#cursor");
if(matchMedia("(hover:hover) and (pointer:fine)").matches){
 let x=0,y=0,cx2=0,cy2=0,on=false,r2=0;
 function loop2(){cx2+=(x-cx2)*.18;cy2+=(y-cy2)*.18;cur.style.translate=`${cx2}px ${cy2}px`;
  r2=(on||Math.abs(x-cx2)>.5||Math.abs(y-cy2)>.5)?requestAnimationFrame(loop2):0}
 const kick=()=>{if(!r2)r2=requestAnimationFrame(loop2)};
 addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;if(on)kick()},{passive:true});
 cards.forEach(c=>{
  c.addEventListener("mouseenter",e=>{x=cx2=e.clientX;y=cy2=e.clientY;on=true;cur.textContent=c.dataset.state==="live"?"Abrir":"Em breve";cur.style.translate=`${cx2}px ${cy2}px`;cur.classList.add("on");kick()});
  c.addEventListener("mouseleave",()=>{on=false;cur.classList.remove("on")})})}
