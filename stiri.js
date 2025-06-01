// Array cu știrile
const stiri = [
    {
        id: 1,
        titlu: "Primăria anunță un nou proiect de infrastructură",
        rezumat: "Reabilitarea a 10 km de drumuri și modernizarea iluminatului public...",
        continut: "Proiectul include reabilitarea a 10 kilometri de drumuri și modernizarea iluminatului public în cartierele noi. Lucrările vor începe în luna iulie și vor dura 6 luni. Se estimează un buget de 12 milioane de lei.",
        imagine: "https://igfgrup.ro/wp-content/uploads/2023/03/Iluminat-public-si-festiv-1.jpg"
      },
      {
        id: 2,
        titlu: "Festivalul de vară revine în centrul orașului",
        rezumat: "Concerte, târguri tradiționale și activități pentru copii...",
        continut: "Festivalul va avea loc între 15 și 20 iulie, cu scene în Piața Centrală, spectacole de dans, ateliere pentru copii și peste 20 de comercianți tradiționali. Invitați speciali: Subcarpați, Andra, Voltaj."
      },
      {
        id: 3,
        titlu: "Un nou centru medical s-a deschis în zona industrială",
        rezumat: "Oferă medicină generală, stomatologie și analize gratuite pentru pensionari...",
        continut: "Centrul funcționează de luni până vineri între orele 8-18 și este dotat cu aparatură modernă. Este primul centru care oferă analize gratuite pentru toți pensionarii din județ, pe baza programării."
      },
      {
        id: 4,
        titlu: "Școala de vară pentru elevi talentați",
        rezumat: "Peste 100 de elevi participă la ateliere educaționale și creative în luna august...",
        continut: "Programul include sesiuni de robotică, arte vizuale, jurnalism, scriere creativă și dezvoltare personală. Școala se desfășoară între 1 și 14 august, în parteneriat cu Inspectoratul Școlar.",
        imagine: "https://reptiland.ro/wp-content/uploads/2024/07/scoala-de-vara-reptiland.png"
      },
      {
        id: 5,
        titlu: "Cod galben de ploi în Bistrița-Năsăud",
        rezumat: "Meteorologii anunță ploi torențiale și descărcări electrice în următoarele 24 de ore...",
        continut: `
        <p>În Carpații Orientali, estul Carpaților Meridionali și local în Munții Apuseni, Maramureș, estul Transilvaniei,</p> 
        <p>nord-vestul Moldovei și nordul Munteniei instabilitatea atmosferică se va accentua și se va manifesta prin averse torențiale</p>
        <p>descărcări electrice, intensificări de scurtă durată ale vântului (rafale în general de 50…70 km/h) și pe alocuri vijelii și căderi de grindină.</p>
        <p>Cantitățile de apă vor fi de 15…25 l/mp și izolat de 30…40 l/mp. Prognoza pentru Transilvania în săptămâna 2-8 iunie: Începând din 2 iunie,</p>
        <img src="https://timponline.ro/wp-content/uploads/2025/05/cer-nori-vreme-meteo-p-2-990x654.jpg" alt="Iluminat modern" style="width:100%; border-radius:10px; margin:10px 0;"> 
        <p>valorile termice vor intra pe o pantă ascendentă, astfel încât până la finalul săptămânii se vor înregistra temperaturi mai apropiate de mediile climatologice.</p>
        <p>Maximele vor ajunge, în medie, la 22…27 de grade, iar minimele vor fi de 10…13 grade. Pot fi intervale cu averse.</p>
        `
      }
    ];
  const main = document.getElementById("main-content");

  function afiseazaListaStiri() {
    main.innerHTML = `
      <h1>Ultimele Știri</h1>
      <div class="news-grid">
        ${stiri.map(stire => `
          <div class="news-card" onclick="afiseazaStire(${stire.id})">
            ${stire.imagine ? `<img src="${stire.imagine}" alt="Imagine stire" class="card-image">` : ''}
            <h2>${stire.titlu}</h2>
            <p>${stire.rezumat}</p>
          </div>
        `).join("")}
      </div>
    `;
  }
  
  // Afișează o știre completă
  function afiseazaStire(id) {
    const stire = stiri.find(s => s.id === id);
    if (!stire) return;
  
    const continutCuParagrafe = stire.continut
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  
      main.innerHTML = `
      <button onclick="afiseazaListaStiri()">⬅ Înapoi</button>
      <div class="news-full">
        <h1>${stire.titlu}</h1>
        ${stire.imagine ? `<img src="${stire.imagine}" alt="Imagine stire" class="full-image">` : ''}
        ${stire.continut} <!-- Afișează HTML direct -->
      </div>
    `;
  }
  
  // Afișăm lista la început
  document.addEventListener("DOMContentLoaded", function () {
    afiseazaListaStiri();
  });