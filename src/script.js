let Dates = new Date()
let hari = Dates.getDay()
let tanggal =  Dates.getDate()
let bulan = Dates.getMonth()
let tahun = Dates.getFullYear()
const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

console.log("Hari ini hari " + day[hari] + " tanggal" + tanggal)

document.getElementById("tanggal").innerHTML = day[hari] + " - " + tanggal + " - " + month[bulan] + " - " +  tahun 



const Senin = ["B. Inggris", "B. Indonesia", "BK", "SBK",]
const Selasa = ["MTK", "IPA", "IPS", "B. Indonesia",]
const Rabu = ["B. Jawa", "Prakarya", "B. Inggris", "IPA", "MTK",]
const Kamis = ["PJOK", "PPKN", "BK", "B. indo",]
const Jumat = ["JB (jamkos:v)", "IPS", "PAI",]
const Sabtu = ["LIBUR BANH"]
const Minggu = ["LIBUR BANH"]



// MAPEL JS
var mapeltabel = document.getElementById("pelajaran")
var harinya = document.getElementById("hari")


let isi = ""
const refreshbut = document.querySelector("#refresh");
var a = false
refreshbut.addEventListener('click', function(){
    if (a === false ) {
        a = true;
        mapelawal()
    } else {
        a = false;
        mapelchange()
    }
    console.log(a)
})


  
function mapelchange() {
    document.getElementById("mapel-kapan").innerHTML = "MAPEL HARI INI"
    isi = ""

    // MINGGU
    if (hari === 0) {
        harinya.innerHTML = day[hari]
        Minggu.forEach(blablafunction)
    } 

    // SENIN 
    if (hari === 1) {
        harinya.innerHTML = day[hari]
        Senin.forEach(blablafunction)
    }

    // SELASA 
    if (hari === 2) {
        harinya.innerHTML = day[hari]
        Selasa.forEach(blablafunction)
    }

    // RABU 
    if (hari === 3) {
        harinya.innerHTML = day[hari]
        Rabu.forEach(blablafunction)
    }

    // KAMIS 
    if (hari === 4) {
        harinya.innerHTML = day[hari]
        Kamis.forEach(blablafunction)
    }

    // JUMAT 
    if (hari === 5) {
        harinya.innerHTML = day[hari]
        Jumat.forEach(blablafunction)
    }

    // SABTU 
    if (hari === 6) {
        harinya.innerHTML = day[hari]
        Sabtu.forEach(blablafunction)
    }
    mapeltabel.innerHTML = isi
}

function mapelawal() {
    document.getElementById("mapel-kapan").innerHTML = "MAPEL BESOK"
    isi = ""
            // MINGGU
        if (hari === 0) {
            harinya.innerHTML = day[hari + 1]
            Senin.forEach(blablafunction)
        } 

        // SENIN 
        if (hari === 1) {
            harinya.innerHTML = day[hari + 1]
            Selasa.forEach(blablafunction)
        }

        // SELASA 
        if (hari === 2) {
            harinya.innerHTML = day[hari + 1]
            Rabu.forEach(blablafunction)
        }

        // RABU 
        if (hari === 3) {
            harinya.innerHTML = day[hari + 1]
            Kamis.forEach(blablafunction)
        }

        // KAMIS 
        if (hari === 4) {
            harinya.innerHTML = day[hari + 1]
            Jumat.forEach(blablafunction)
        }

        // JUMAT 
        if (hari === 5) {
            harinya.innerHTML = day[hari + 1]
            Sabtu.forEach(blablafunction)
        }

        // SABTU 
        if (hari === 6) {
            harinya.innerHTML = day[hari + 1]
            Minggu.forEach(blablafunction)
        }
    
    mapeltabel.innerHTML = isi;
}

// MINGGU
if (hari === 0) {
    harinya.innerHTML = day[hari + 1]
    Senin.forEach(blablafunction)
} 

// SENIN 
if (hari === 1) {
    harinya.innerHTML = day[hari + 1]
    Selasa.forEach(blablafunction)
}

// SELASA 
if (hari === 2) {
    harinya.innerHTML = day[hari + 1]
    Rabu.forEach(blablafunction)
}

// RABU 
if (hari === 3) {
    harinya.innerHTML = day[hari + 1]
    Kamis.forEach(blablafunction)
}

// KAMIS 
if (hari === 4) {
    harinya.innerHTML = day[hari + 1]
    Jumat.forEach(blablafunction)
}

// JUMAT 
if (hari === 5) {
    harinya.innerHTML = day[hari + 1]
    Sabtu.forEach(blablafunction)
}

// SABTU 
if (hari === 6) {
    harinya.innerHTML = day[hari + 1]
    Minggu.forEach(blablafunction)
}

mapeltabel.innerHTML = isi
function blablafunction(value, index, array) {
   isi += value + "<br>" + "<br>"
}

