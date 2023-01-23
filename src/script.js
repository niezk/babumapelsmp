let Dates = new Date()
let hari = Dates.getDay()
let tanggal =  Dates.getDate()
let bulan = Dates.getMonth()
let tahun = Dates.getFullYear()
const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

console.log("Hari ini hari " + day[hari] + " tanggal" + tanggal)

document.getElementById("tanggal").innerHTML = day[hari] + " - " + tanggal + " - " + month[bulan] + " - " +  tahun 



const Senin = ["MTK", "MTK", "MTK", "MTK", "MTK",]
const Selasa = ["MTK", "MTK", "MTK", "MTK", "MTK",]
const Rabu = ["MTK", "MTK", "MTK", "MTK", "MTK",]
const Kamis = ["MTK", "MTK", "MTK", "MTK", "MTK",]
const Jumat = ["MTK", "MTK", "MTK", "MTK", "MTK",]
const Sabtu = ["LIBUR BANH"]
const Minggu = ["LIBUR BANH"]



// MAPEL JS
var mapeltabel = document.getElementById("pelajaran")
var harinya = document.getElementById("hari")

var besok = Dates.setDate(Dates.getDate() + 1);
console.log(besok)
let isi = ""

if (hari === 0) {
    harinya.innerHTML = day[hari]
    Minggu.forEach(blablafunction)
}
mapeltabel.innerHTML = isi
function blablafunction(value, index, array) {
   isi += value + "<br>"
}
