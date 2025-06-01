// Array cu știrile
const stiri = [
    {
      id: 1,
      titlu: "Primăria anunță un nou proiect de infrastructură",
      rezumat: "Reabilitarea a 10 km de drumuri și modernizarea iluminatului public...",
      continut: "Proiectul include reabilitarea a 10 kilometri de drumuri și modernizarea iluminatului public în cartierele noi. Lucrările vor începe în luna iulie și vor dura 6 luni. Se estimează un buget de 12 milioane de lei."
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
      titlu: "Cod Galben in Bistrita-Nasaud",
      rezumat: "Administrația Națională de Meteorologie a emis o avertizare cod galben de vreme rea, valabil și pentru județul Bistrița-Năsăud duminică 1 iunie.",
      continut: "În Carpații Orientali, estul Carpaților Meridionali și local în Munții Apuseni, Maramureș, estul Transilvaniei, nord-vestul Moldovei și nordul Munteniei instabilitatea atmosferică se va accentua și se va manifesta prin averse torențiale, descărcări electrice, intensificări de scurtă durată ale vântului (rafale în general de 50…70 km/h) și pe alocuri vijelii și căderi de grindină. Cantitățile de apă vor fi de 15…25 l/mp și izolat de 30…40 l/mp. Prognoza pentru Transilvania în săptămâna 2-8 iunie: Începând din 2 iunie, valorile termice vor intra pe o pantă ascendentă, astfel încât până la finalul săptămânii se vor înregistra temperaturi mai apropiate de mediile climatologice. Maximele vor ajunge, în medie, la 22…27 de grade, iar minimele vor fi de 10…13 grade. Pot fi intervale cu averse."
    },
  ];
  const main = document.getElementById("main-content");
  
  // Afișează toate cardurile
  function afiseazaListaStiri() {
    main.innerHTML = `
      <h1>Ultimele Știri</h1>
      <div class="news-grid">
        ${stiri.map(stire => `
          <div class="news-card" onclick="afiseazaStire(${stire.id})">
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
  
    main.innerHTML = `
      <h1>${stire.titlu}</h1>
      <p>${stire.continut}</p>
      <a href="#" onclick="afiseazaListaStiri()" class="read-more">⟵ Înapoi la știri</a>
    `;
  }
  
  // Afișăm lista la început
  afiseazaListaStiri();