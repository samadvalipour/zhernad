const timeline = document.getElementById("path-timeline");
phases = path_data["phases"]

const maintitle = document.getElementById("main-title");
maintitle.textContent = path_data["title"]

const maindescription = document.getElementById("main-description");
maindescription.textContent = path_data["description"]

for (const key in phases) {
    const card = document.createElement("div");
    card.className = "card w-full border"
    const cardbody = document.createElement("div");
    cardbody.className = "card-body"
    
    const titlediv = document.createElement("div");
    titlediv.className = "flex gap-2 items-center"
    
    const cardtitle = document.createElement("h");
    cardtitle.className = "card-title"
    cardtitle.textContent = phases[key]["title"]
    const cardnum = document.createElement("span");
    if (key.includes("پروژه")){
        card.className = card.className  + " border-4 border-r-secondary border-l-yellow-400 border-b-accent border-t-primary"
        cardnum.textContent = `${key} :`
    }
    cardtitle.insertBefore(cardnum, cardtitle.firstChild)
    titlediv.appendChild(cardtitle)
    
    const cardtime = document.createElement("span");
    cardtime.className = "badge badge-primary p-3"
    cardtime.textContent = phases[key]["time"]
    titlediv.appendChild(cardtime)

    cardbody.appendChild(titlediv)
    
    const carddescription = document.createElement("p");
    carddescription.className = "text-gray-600"
    carddescription.textContent = phases[key]["description"]
    cardbody.appendChild(carddescription)
    
    const cardsteps = document.createElement("ul");
    cardsteps.className = "menu py-5 p-1 bg-base-100 text-base-content gap-1"
    for (const stepskey in phases[key]["steps"]){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "border"
        a.href = phases[key]["steps"][stepskey]["link"]
        const span = document.createElement("span");
        span.textContent = `قدم ${stepskey} :`
        a.appendChild(span)
        const p = document.createElement("p");
        p.textContent = phases[key]["steps"][stepskey]["text"]
        a.appendChild(p)
        const vpn = document.createElement("span");
        vpn.textContent = (phases[key]["steps"][stepskey]["vpn"] === true) ? 'فیلتر شکن را روشن کنید' : '';
        vpn.className = "text-error"
        a.appendChild(vpn)
        li.appendChild(a)   
        cardsteps.appendChild(li)
    }
    cardbody.appendChild(cardsteps)
    card.appendChild(cardbody)
    timeline.appendChild(card)
}

