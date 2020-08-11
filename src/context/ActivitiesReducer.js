export const initialState = [
    {id: 1, title: "Türkiye'nin lavanta cenneti: Kuyucak Köyü'ne Gezi", 
    content: "Gece yolculuğu sonrası, güller ve lavantalar diyarı Isparta’nın Kuyucak köyüne sabahın erken saatlerinde ulaşıyoruz. İlk ziyaret nokramız lavanta bahçeleri ile Fransa’nın Provans bölgesine rakip olan Kuyucak köyü. Köy içerisinde yapacağımız güzel bir yürüyüşle lavanta bahçelerinde geçireceğimiz zamanda bol bol fotoğraf çekiyoruz. Köy içerisinde geçireceğimiz serbest zamanda çiftçi köylülerin üretmiş olduğu lavanta ürünlerini tanıma şansına sahip oluyoruz. Lavanta bahçeleri ziyareti sonrasında, Batı Toroslara kurulmuş Sagalassos Antik Kenti’ne ulaşıyoruz.  Antoninler Çeşmesi, Agora, Hamam Kalıntıları, kişiye özel Kütüphanesi, Odeonu ve Dünya’nın en yüksekteki Antik Tiyatrosu olan, 9000 kişilik tiyatrosu gezeceğimiz yerler arasında. Antik kent gezimizin ardından, Yeşilova’ya 5 km uzaklıkta bulunan ülkemizin en derin ve en temiz gölü “Türkiye’nin Maldivleri” olarak bilinen Salda Gölü’ne ulaşıyoruz", 
    image: "https://images3.alphacoders.com/593/thumb-1920-593732.jpg"},

    {id: 2, title: "Kapadokya Turu", 
    content: "Kapadokya’da ilk durağımız Melendiz Irmağının oluşturduğu, içerisinde güvercinlikler ve kaya kiliselerininde bulunduğu 14 km uzunluğundaki Ihlara Vadisi olacak. Ihlara Vadisi içinde yapacağımız yürüyüş esnasında Ağaçaltı Kilisesi ve Yılanlı Kiliseyi de görüyoruz. İkinci durağımız; düşman baskınlarından kaçan binlerce kişinin, aylarca yaşayabileceği bir mühendislik harikası olan Derinkuyu Yeraltı Şehri olacak. (Kaymaklı Yeraltı Şehri veya Özkonak Yeraltı Şehri). İnsanların yerin altında yaptıkları bu ilginç şehri gezerken hayranlığınızı gizleyemeyeceksiniz. Yeraltı kentinin hemen ardından Uçhisar istikametine doğru yol alıyoruz. Güvercinlik Vadisini ve Uçhisar Kalesi’nin fotoğrafını çekip öğle yemeğimiz için kaya oyma bir mekâna varıyoruz. Burada Kapadokya’nın meşhur pastırmalı kuru fasulyesini ve testi kebabını tatma imkânı buluyoruz. Otantik mekânda alacağımız yemeğin ardından çanak-çömleği ile meşhur Avanos’a gidiyoruz. Avanos’ta Kızılırmak’ı görüp, Kızılırmak’ın çamurundan yapılan çanak-çömleklere dair bilgi alıyoruz. Sonrasında çok başlı peribacalarının en güzel örneklerini göreceğiniz Paşabağ’da (Keşişler Vadisi) fotoğraf molası veriyoruz. Paşabağ’da peribacaları arasında dolaşıp fotoğraflar çektikten sonra ilginç peribacası oluşumlarını içerisinde barındıran, adını da deve şeklindeki peribacasından alan Develi Vadi (Dervent Vadisi) gezisini yapıyoruz. Ürgüp içinde yapacağımız panoramik tur sonrası Asmalı Konağı da dışardan görüp Şarap Mahzenlerini ve Kapadokya’nın lezzetli şaraplarını tatma imkânı buluyoruz. Günün sonunda ise Şapkalı Peribacalarının ve Kapadokya’nın simgesi olan Üç Güzeller Peribacalarını görüyoruz.",
    image: "https://www.timeturk.com/resim/fotogaleri/100/1007360/75585.jpg"}
]

export const reducer = (state, {type, option}) => {
    switch(type){
        case "ADD":
            return [...state, {
                id: Math.random(), 
                title:option.title, 
                content:option.content,
                image:option.image,
            }]
        case "REMOVE":
            return [...state.filter((activitie) => option !== activitie.id)]
        case "UPDATE":
            return state.map(record => {
                if(option.id === record.id)
                    return option
                else
                    return record
            })
        default:
            return state 
    }
    
}