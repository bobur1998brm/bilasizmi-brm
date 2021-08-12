
let arr = [
    'Birinchi kompyuter virusi 1982 yilda sistemalarni buzish maqsadida Apple tomonidan ishlab chiqilgan.',
    'Internet orqali yuborilgan barcha elektron xabarlarning qariyb 70 foizi spamdir.',
    '2008 – Facebook portali o`zining egasi: 20 yoshli talabaga 6 milliard daromad kеltirdi.',
    'Linux operatsion tizimining kompaniya belgisi - pingvin. Chunki bu sistemani yaratuvchi shaxsni yoshligida zooparkda pingvin tishlab olgan.',
    'Faqat Rossiya va SSSRning sobiq davlatlarida @ bu belgi "kuchukcha" deb nomlanadi. Boshqa mamalakatlarda esa bu belgini "shilliq qurt" yoki "maymuncha" deb nomlashadi.',
    '1986 – Tеzligi 56 kbG`s bo`lgan birinchi intеrnеt magistrali ishga tushdi.',
    'Shveysariyada katta hajmli ma’lumotlar saqlanuvchi server markazlaridan chiqqan issiqlik sabab kichik ko‘ldagi suv iluq turadi.',
    '1984 – Intеrnеtda domеnlarni nomlash tizimi (Domain Name System) joriy qilindi.',
    '1981 yilda yaratilgan kompyuter 12 kilogramm tosh bosgan. Uning monitor ekrani esa atigi 5 dyum bo‘lgan (hozirgi mobil telefonlarniki kabi).',
    'Barcha eski domen zonalarida uch harfli bo‘sh domenlarni topish imkonsiz.',
    '1991– Tim Berners-Lee tomonidan World Wide Web (butun olam to`ri)ga asos solindi. Intеrnеt hozirgi ko`rinishga ega bo`ldi.',
    'Statistikaga ko‘ra, aksariyat kompyuterlar o‘z imkoniyatlarining yarmidan foydalanadi, xolos.'
]

let text = document.querySelector('#text');
let btn = document.querySelector('.btn');
let prev = document.querySelector('.prev');

let offset = -1;

btn.addEventListener('click', (e)=>{
    offset++;
    change()
    
})

prev.addEventListener('click', (e)=>{
    offset--
    change()
})

function change(){
    if( offset < arr.length  ){
        text.innerHTML = arr[offset];
        btn.disabled = false
        if( offset > -1){
            text.innerHTML = arr[offset];
            prev.disabled = false
        }else{
            text.innerHTML = 'Oldinga';
            prev.disabled = true
        }
    }else{
        text.innerHTML = 'Tugadi';
        btn.disabled = true
    };

   
}