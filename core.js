const D=window.DATA,root=document.getElementById('app'),kind=document.body.dataset.kind;
const C={find:['FIND IT','القيها في 30 ثانية','02','#5AA2FF','#00E5FF'],route:['ROUTE IT','صممي قاعدة التوجيه','03','#00D6C6','#00E5FF'],reply:['FIX THE REPLY','حسّني الرد','04','#38D9FF','#805BFF'],inbox:['INBOX RUSH','إشعارات لا تتوقف','05','#3EF0B0','#00D6C6'],drill:['DRILL DOWN','افتحي الرقم','06','#B8D4E3','#00E5FF']}[kind];
document.documentElement.style.setProperty('--a',C[3]);document.documentElement.style.setProperty('--b',C[4]);
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const B=(label,act,cls='')=>`<button class="btn ${cls}" data-act="${act}">${E(label)}</button>`;
const P=s=>`<section class="panel">${s}</section>`;
const rand=a=>[...a].sort(()=>Math.random()-.5);
const norm=s=>String(s).normalize('NFKC').replace(/[\u064B-\u065F\u0640_\-\s]/g,'').toLowerCase();
root.innerHTML=`<div class="wrap"><header class="top"><div class="logos"><img src="deanship.png" alt="شعار العمادة"><img src="club.png" alt="شعار النادي"></div><div class="mini">OFFICE TECH 2030 · ZONE ${C[2]} / 06</div></header><nav class="nav"><a href="index.html">جميع الأنشطة</a><a href="find-it.html">FIND IT</a><a href="route-it.html">ROUTE IT</a><a href="fix-the-reply.html">FIX THE REPLY</a><a href="inbox-rush.html">INBOX RUSH</a><a href="drill-down.html">DRILL DOWN</a></nav><div class="hero"><div class="eyebrow">OFFICE TECH 2030 · INTERACTIVE CHALLENGE</div><h1>${C[1]}</h1><p>${C[0]}</p></div><main id="game"></main><footer class="footer">نموذج تدريبي ببيانات وهمية · OFFICE TECH 2030</footer></div>`;
const g=document.getElementById('game');let clock=null,seconds=0;
function stop(){if(clock)clearInterval(clock);clock=null}function tick(n,onend){stop();seconds=n;let t=document.getElementById('time');if(t)t.textContent=n;clock=setInterval(()=>{seconds--;t=document.getElementById('time');if(t){t.textContent=seconds;t.className='timer '+(seconds<=5?'bad':seconds<=10?'warn':'')}if(seconds<=0){stop();onend()}},1000)}
function events(fn){g.onclick=e=>{let b=e.target.closest('[data-act]');if(b)fn(b.dataset.act,b)}}
function intro(desc,start){g.innerHTML=P(`<h3>${E(C[0])}</h3><p>${desc}</p>${B('ابدئي','start','primary')}`);events(a=>{if(a==='start')start()})}
