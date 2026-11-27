/* =========================================================
   EDIT YOUR CONTENT HERE — everything on the page is built
   from these lists. Empty lists hide their section.
   ========================================================= */
const ME = "Jubaed Islam"; // bolded in author lists

const links = [
  {n:"Email",          i:"fa-solid fa-envelope",       u:"mailto:islamjubaed01@gmail.com"},
  {n:"ORCID",          i:"fa-brands fa-orcid",         u:"https://orcid.org/0009-0000-7950-2107"},
  {n:"LinkedIn",       i:"fa-brands fa-linkedin",      u:"https://www.linkedin.com/in/jubaed-islam-587213354"},
  {n:"GitHub",         i:"fa-brands fa-github",        u:"https://github.com/jubaed-islam"},
  {n:"Facebook",       i:"fa-brands fa-facebook",      u:"https://www.facebook.com/share/1Dy6wDCz6b/"},
  {n:"Google Scholar", i:"fa-solid fa-graduation-cap", u:""},   // add URL to show
  {n:"ResearchGate",   i:"fa-brands fa-researchgate",  u:""}    // add URL to show
];

const interests = ["Geographic Information Systems (GIS)","Remote Sensing","Disaster Risk Reduction","Flood Risk Assessment","Drought Vulnerability","Climate Change Adaptation","Urban Resilience","Urban Growth Modelling","Land Use / Land Cover Change","Environmental Planning","Renewable Energy & Biofuel","Sustainable Urban Development"];

/* status: "Published" | "Accepted" | "Under review"  — doi: "10.xxxx/..." (optional) */
const pubs = [
  {cat:"Conference Proceedings", year:2026, status:"Published", date:"5 Feb 2026",
   authors:"Jubaed Islam, Zahid Hasan, Hossain Md Abdullah, Sajib Sarker",
   title:"Integrated Flood Risk Modeling in Chalan Beel, Bangladesh: A Weighting-Based Geospatial Approach",
   venue:"8th International Conference on Civil Engineering for Sustainable Development (ICCESD 2026), KUET", doi:""},
  {cat:"Journal Articles", year:2026, status:"Accepted", authors:"",
   title:"Geospatial Multi-Indicator Assessment of Flood Risk in a Wetland Ecosystem, Using a PCA-Weighted Risk Framework",
   venue:"Peer-reviewed journal", doi:""},
  {cat:"Conference Proceedings", year:2026, status:"Accepted", authors:"",
   title:"Integrated Geospatial Assessment of Multi-Dimensional Drought Hazard in Naogaon District Using PCA and Shannon Entropy-Based Weighting",
   venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", doi:""},
  {cat:"Conference Proceedings", year:2026, status:"Accepted", authors:"",
   title:"Integrated Air Pollution Exposure Modeling in Chattogram, Bangladesh: A PCA-Weighted Geospatial Approach",
   venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", doi:""},
  {cat:"Conference Proceedings", year:2026, status:"Accepted", authors:"",
   title:"Spatial Assessment of Urban Waterlogging Vulnerability in Dhaka Metropolitan Area Using PCA Weighting",
   venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", doi:""},
  {cat:"Under Review", year:2026, status:"Under review", authors:"",
   title:"Geospatial Analysis of Directional Urban Growth and Future Land Use Dynamics Using Remote Sensing, GIS, and CA–Markov Modeling in Rajshahi District, Bangladesh",
   venue:"Peer-reviewed journal", doi:""}
];

/* img: optional map/figure, e.g. "assets/projects/chalan-beel.jpg" */
const projects = [
  {type:"Flood & Hazard", area:"Chalan Beel, Bangladesh", coord:"24.4°N 89.3°E", img:"",
   title:"Flood Risk Assessment of a Wetland Ecosystem",
   overview:"Multi-indicator flood risk mapping of the Chalan Beel wetland, using data-driven PCA weighting of hazard, exposure and vulnerability indicators.",
   method:"Indicator selection & normalisation → PCA-derived weights → weighted overlay",
   data:"Satellite imagery, DEM, rainfall and land cover",
   tools:["ArcGIS Pro","Google Earth Engine"],
   out:"Flood risk zonation map with ranked indicator contributions",
   status:"Journal article accepted · Conference paper published (ICCESD 2026)"},
  {type:"Flood & Hazard", area:"Naogaon District, Bangladesh", coord:"24.8°N 88.9°E", img:"",
   title:"Multi-Dimensional Drought Hazard Assessment",
   overview:"A composite drought index combining climatic, vegetation and socio-environmental indicators for a drought-prone district in north-west Bangladesh.",
   method:"PCA and Shannon entropy-based weighting → composite drought index",
   data:"Remote sensing and climate datasets",
   tools:["Google Earth Engine (JS)","ArcGIS Pro"],
   out:"Drought hazard zonation map",
   status:"Conference paper accepted (ICACE-2026)"},
  {type:"Flood & Hazard", area:"Dhaka Metropolitan Area", coord:"23.8°N 90.4°E", img:"",
   title:"Urban Waterlogging Vulnerability in Dhaka",
   overview:"Identifying waterlogging-prone neighbourhoods of the Dhaka metropolitan area with PCA-weighted physical and social indicators.",
   method:"Indicator standardisation → PCA weighting → vulnerability index mapping",
   data:"Terrain, drainage, land cover and population data",
   tools:["ArcGIS Pro","QGIS","SPSS"],
   out:"Waterlogging vulnerability map",
   status:"Conference paper accepted (ICACE-2026)"},
  {type:"Urban Growth", area:"Rajshahi District, Bangladesh", coord:"24.4°N 88.6°E", img:"",
   title:"Directional Urban Growth & Future Land Use",
   overview:"Quantifying land use / land cover change and directional urban expansion, then simulating future land use with a CA–Markov model.",
   method:"LULC classification → directional buffer analysis → CA–Markov simulation",
   data:"Multi-temporal Landsat imagery",
   tools:["Google Earth Engine","ArcGIS Pro","QGIS"],
   out:"LULC change maps and future land use projection",
   status:"Manuscript under review"}
];

const skills = [
  {g:"GIS & Remote Sensing", i:"fa-solid fa-satellite", s:["ArcGIS Pro","ArcGIS Online","Google Earth Engine","QGIS","ERDAS IMAGINE"]},
  {g:"Analytical Methods", i:"fa-solid fa-chart-line", s:["PCA","Shannon Entropy weighting","MCDA","CRITIC","AHP","Fuzzy AHP","CA–Markov"]},
  {g:"Statistics & Programming", i:"fa-solid fa-code", s:["Python","R","JavaScript (GEE)","SPSS"]},
  {g:"Cartography & Visualisation", i:"fa-solid fa-map-location-dot", s:["Scientific cartography","Map design","Adobe Illustrator","Data visualisation"]},
  {g:"Geospatial Competencies", i:"fa-solid fa-layer-group", s:["Satellite image processing","LULC classification","Spatial analysis","Geospatial modelling","Geodatabase development","Environmental assessment"]},
  {g:"Tools & Languages", i:"fa-solid fa-toolbox", s:["AutoCAD","KoBoToolbox","Microsoft Office","Bengali (native)","English"]}
];

const education = [
  {now:true, yr:"2023 — Present", t:"Bachelor of Urban and Regional Planning (BURP)", p:"Chittagong University of Engineering and Technology (CUET), Department of Urban and Regional Planning", score:"CGPA 3.30 / 4.00"},
  {yr:"2022", t:"Higher Secondary Certificate (HSC)", p:"Dr. Mahbubur Rahman Mollah College", score:"GPA 5.00 / 5.00"},
  {yr:"2020", t:"Secondary School Certificate (SSC)", p:"Unique Model School & College", score:"GPA 4.94 / 5.00"}
];

/* Example: {title:"Certificate", org:"Issuer", date:"Month YYYY", img:"assets/certificates/x.jpg", pdf:"assets/certificates/x.pdf", link:"https://..."} */
const certs = [];
/* Example: {title:"Award", org:"Organization", date:"2026"} */
const awards = [];
/* ===================== END EDIT AREA ===================== */


const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ext=u=>u.startsWith("mailto:")?"":` target="_blank" rel="noopener"`;
const live=links.filter(l=>l.u);
const io="IntersectionObserver" in window?new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.08}):null;
function observe(){$$(".reveal:not(.in)").forEach(e=>io?io.observe(e):e.classList.add("in"))}

/* hide empty optional sections, then build nav from visible sections */
if(certs.length) $("#certificates").hidden=false;
if(awards.length) $("#awards").hidden=false;
$("#menu").innerHTML=$$("main section[data-nav]").filter(s=>!s.hidden).map(s=>`<a href="#${s.id}">${s.dataset.nav}</a>`).join("");

/* hero */
$("#heroLinks").innerHTML=live.filter(l=>l.n!=="Email").map(l=>`<li><a href="${esc(l.u)}"${ext(l.u)}><i class="${l.i}"></i>${l.n}</a></li>`).join("");
const st=s=>pubs.filter(p=>p.status===s).length;
$("#stats").innerHTML=[
  [pubs.length,"Research outputs"],
  [st("Published")+st("Accepted"),"Published / accepted"],
  [projects.length,"Research projects"],
  [new Set(projects.map(p=>p.area)).size,"Study areas in Bangladesh"]
].map(([n,l])=>`<div><dt data-count="${n}">${n}</dt><dd>${l}</dd></div>`).join("");

/* interests */
$("#interests").innerHTML=interests.map(i=>`<li>${esc(i)}</li>`).join("");

/* filters helper */
function filters(el,cats,count,fn){
  el.innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}" data-c="${esc(c)}" aria-pressed="${!i}">${esc(c)}<span class="ct">${count(c)}</span></button>`).join("");
  el.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",el).forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-pressed",x===b)});fn(b.dataset.c)};
}

/* generated topographic thumbnail for projects without an image */
function rng(seed){return()=>((seed=Math.imul(seed^seed>>>15,1|seed)+0x6D2B79F5|0)>>>0)/4294967296}
function blob(cx,cy,r,R,amp,ph){let d="";for(let a=0;a<=64;a++){const t=a/64*Math.PI*2,k=r+amp*(Math.sin(3*t+ph)*.6+Math.sin(5*t+ph*1.7)*.4);d+=(a?"L":"M")+(cx+Math.cos(t)*k*R).toFixed(1)+","+(cy+Math.sin(t)*k).toFixed(1)}return d+"Z"}
function topo(i,type){
  const r=rng(i*977+13),cx=180+r()*240,cy=60+r()*80,hue=type==="Urban Growth"?"#f2b84b":"#4fc1ad";let p="";
  for(let k=1;k<=11;k++)p+=`<path d="${blob(cx,cy,k*17,1.7,k*2.2,r()*6)}" stroke="${k%4?"rgba(255,255,255,.16)":hue}" stroke-opacity="${k%4?1:.55}" fill="none" stroke-width="${k%4?1:1.6}"/>`;
  return `<svg viewBox="0 0 600 262" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${p}<circle cx="${cx}" cy="${cy}" r="6" fill="${hue}"/><circle cx="${cx}" cy="${cy}" r="16" fill="none" stroke="${hue}" stroke-opacity=".5"/></svg>`;
}

/* projects */
function renderProj(c="All"){
  $("#projList").innerHTML=projects.map((p,i)=>({p,i})).filter(({p})=>c==="All"||p.type===c).map(({p,i})=>`
  <article class="proj reveal">
    <div class="proj-fig">${p.img?`<img src="${esc(p.img)}" alt="Map: ${esc(p.title)}" loading="lazy" data-zoom>`:topo(i+1,p.type)}
      <span class="tag">${esc(p.type)}</span><span class="loc"><i class="fa-solid fa-location-dot"></i>${esc(p.area)}${p.coord?" · "+esc(p.coord):""}</span></div>
    <div class="proj-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.overview)}</p>
      <dl>
        <dt>Method</dt><dd>${esc(p.method)}</dd>
        <dt>Data</dt><dd>${esc(p.data)}</dd>
        <dt>Output</dt><dd>${esc(p.out)}</dd>
        <dt>Tools</dt><dd class="tools">${p.tools.map(t=>`<span>${esc(t)}</span>`).join("")}</dd>
      </dl>
      <p class="proj-status"><i class="fa-solid fa-circle-check"></i>${esc(p.status)}</p>
    </div>
  </article>`).join("");
  observe();
}
const pcats=["All",...new Set(projects.map(p=>p.type))];
filters($("#projFilters"),pcats,c=>c==="All"?projects.length:projects.filter(p=>p.type===c).length,renderProj);renderProj();

/* publications */
function renderPubs(c="All"){
  const l=pubs.filter(p=>c==="All"||p.cat===c);
  $("#pubList").innerHTML=l.length?l.map(p=>`
  <li class="pub reveal">
    <div>
      <h3>${esc(p.title)}</h3>
      ${p.authors?`<p class="au">${esc(p.authors).replace(esc(ME),`<b>${esc(ME)}</b>`)}</p>`:""}
      <p class="ve">${esc(p.venue)}${p.date?" · "+esc(p.date):p.year?" · "+p.year:""}</p>
      ${p.doi?`<p class="meta"><a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> doi:${esc(p.doi)}</a></p>`:""}
    </div>
    <span class="badge ${esc(p.status.split(" ")[0])}">${esc(p.status)}</span>
  </li>`).join(""):`<li class="empty">No entries in this category yet.</li>`;
  observe();
}
const cats=["All",...new Set(pubs.map(p=>p.cat))];
filters($("#pubFilters"),cats,c=>c==="All"?pubs.length:pubs.filter(p=>p.cat===c).length,renderPubs);renderPubs();

/* skills */
$("#skillGrid").innerHTML=skills.map(k=>`<div class="skill reveal"><h3><i class="${k.i}"></i>${esc(k.g)}</h3><ul class="chips">${k.s.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");

/* education */
$("#eduList").innerHTML=education.map(e=>`<li class="${e.now?"now":""}"><span class="yr">${esc(e.yr)}</span><h3>${esc(e.t)}</h3><p>${esc(e.p)}</p>${e.score?`<span class="score">${esc(e.score)}</span>`:""}</li>`).join("");

/* certs & awards */
$("#certGrid").innerHTML=certs.map(c=>`<article class="cert reveal">${c.img?`<img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy" data-zoom>`:""}<div><h3>${esc(c.title)}</h3><p>${esc(c.org)} · ${esc(c.date)}</p><p class="links">${c.pdf?`<a href="${esc(c.pdf)}" target="_blank" rel="noopener">PDF</a>`:""}${c.link?`<a href="${esc(c.link)}" target="_blank" rel="noopener">Verify credential</a>`:""}</p></div></article>`).join("");
$("#awardList").innerHTML=awards.map(a=>`<li><i class="fa-solid fa-award"></i><div><h3>${esc(a.title)}</h3><p>${esc(a.org)} · ${esc(a.date)}</p></div></li>`).join("");

/* contact */
$("#social").innerHTML=live.map(l=>`<li><a href="${esc(l.u)}"${ext(l.u)}><i class="${l.i}"></i>${l.n}<span>↗</span></a></li>`).join("");
$("#yr").textContent=new Date().getFullYear();

/* hero contour lines */
(function(){const svg=$("#contours");let p="";const r=rng(7);
  [[930,180,1.5],[260,620,1.2]].forEach(([cx,cy,R],j)=>{for(let k=1;k<=16;k++)p+=`<path class="${k%5?"":"idx"}" d="${blob(cx,cy,k*26,R,k*3.4,j*2+k*.15+r())}"/>`});
  svg.innerHTML=p})();

/* lightbox */
const lb=$("#lb");
document.addEventListener("click",e=>{const i=e.target.closest("img[data-zoom]");if(i){$("#lbImg").src=i.src;$("#lbImg").alt=i.alt;lb.hidden=false}});
lb.onclick=e=>{if(e.target!==$("#lbImg"))lb.hidden=true};
addEventListener("keydown",e=>{if(e.key==="Escape")lb.hidden=true});

/* theme */
const root=document.documentElement,tb=$("#theme");
function setTheme(t){root.dataset.theme=t;tb.innerHTML=`<i class="fa-solid fa-${t==="dark"?"sun":"moon"}"></i>`;try{localStorage.setItem("theme",t)}catch(e){}}
setTheme(root.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
tb.onclick=()=>setTheme(root.dataset.theme==="dark"?"light":"dark");

/* mobile menu */
const menu=$("#menu"),bg=$("#burger");
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.innerHTML=`<i class="fa-solid fa-${o?"xmark":"bars"}"></i>`};
menu.onclick=e=>{if(e.target.tagName==="A"){menu.classList.remove("open");bg.setAttribute("aria-expanded","false");bg.innerHTML='<i class="fa-solid fa-bars"></i>'}};

/* nav shadow, active link, reveal, counters */
addEventListener("scroll",()=>$("#nav").classList.toggle("scrolled",scrollY>8),{passive:true});
const navA=$$("#menu a"),so=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting)navA.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section[data-nav]").forEach(s=>so.observe(s));
observe();
const co=new IntersectionObserver(en=>en.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,n=+el.dataset.count;let k=0;el.textContent=0;const t=setInterval(()=>{el.textContent=++k;if(k>=n)clearInterval(t)},700/Math.max(n,1));co.unobserve(el)}),{threshold:.6});
$$("[data-count]").forEach(e=>{if(+e.dataset.count>0)co.observe(e)});
