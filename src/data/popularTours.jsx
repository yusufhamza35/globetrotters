const popularTours = [
  {
    title: "Coastal Escape & Sunset Views",
    url: "https://www.youtube.com/watch?v=FjU_x1106pg",
    embed: "https://www.youtube.com/embed/FjU_x1106pg",
    description:
      "Deniz kıyısında geçiş rotaları, plaj manzaraları ve gün batımının büyüsüyle dolu bir gezi. Suyun üzerinde yürüyormuş hissi veren sahil şeridi ve hafif meltem eşliğinde huzurlu anlar. Sahil boyunca yürüyüş yaparken, her adımda doğanın sunduğu eşsiz güzelliklerin keyfini çıkarabilirsiniz. Gün batımı ise yolculuğunuzu büyülü bir hale getirecek, renklerin ve gölgelerin oyunuyla deniz ufukta kaybolacak.",
  },
  {
    title: "Urban Wonders: Street Life & Architecture",
    url: "https://www.youtube.com/watch?v=jB2Z9PA7iKI",
    embed: "https://www.youtube.com/embed/jB2Z9PA7iKI",
    description:
      "Şehir merkezinin kalbinde bir keşif: sokakların enerjisi, mimari detaylar, insanların günlük yaşamları ve modern şehir dokusu bir arada. Bu turda, şehrin gizli köylerini, tarihi ve çağdaş yapıları birleştiren sokaklarını keşfedeceksiniz. Yerel kültürle iç içe geçecek, şehrin ritmini hissedecek ve her köşe başında farklı bir yaşam tarzını gözlemleyeceksiniz. Ayrıca şehri daha yakından tanıyacak, mimarinin farklı stillerini keşfedeceksiniz.",
  },
  {
    title: "Into the Wild: Forest Trails & Hidden Paths",
    url: "https://youtu.be/Xdya8eym9nM",
    embed: "https://www.youtube.com/embed/Xdya8eym9nM",
    description:
      "Yoğun ağaç örtüsüyle kaplı orman yolları, gölgeli patikalar ve doğanın sessizliğiyle buluştuğun bir rota. Keşfetmeyi özleyenler için ideal bir kaçış. Bu yolculuk, şehir gürültüsünden uzaklaşmak isteyenler için mükemmel bir fırsat. Doğanın sunduğu huzur, her adımda daha da derinleşiyor. Ormanda kaybolmak, gizli patikalarda ilerlemek ve sessizliğin içinde kendini kaybetmek eşsiz bir deneyim.",
  },
  {
    title: "Cultural Immersion & Local Traditions",
    url: "https://youtu.be/IuTDuvYr7f0",
    embed: "https://www.youtube.com/embed/IuTDuvYr7f0",
    description:
      "Yerel halkla etkileşim, geleneksel ritüeller, tarihi yapıların arasında dolaşırken kültürün derinliklerine dokunan bir tur. Bu turda sadece gezmekle kalmayacak, aynı zamanda bölge halkıyla etkileşime geçecek, onların yaşam tarzını ve kültürünü daha yakından tanıyacaksınız. Geleneksel festivallere katılabilir, yöresel el sanatlarını görebilir ve bölgenin mutfağından tadımlar yapabilirsiniz.",
  },
  {
    title: "Coastline Drive & Scenic Overlooks",
    url: "https://youtu.be/9lwBJFWkGik",
    embed: "https://www.youtube.com/embed/9lwBJFWkGik",
    description:
      "Araba ile sahil boyunca uzanan rota, tepeden bakışlar, çarpıcı manzaralar ve yavaş tempo ile geçirilen bir yolculuk. Sahil boyunca sürerken, denizin sonsuz maviliğine tanıklık edecek, kayalıkların ve tepelerin yarattığı görsel şöleni keşfedeceksiniz. Bu yolculuk, doğanın gücünü ve sakinliğini birleştiriyor. Her durakta bir fotoğraf fırsatı, her virajda yeni bir manzara sizi bekliyor.",
  },
  {
    title: "Adventure Offroad & Mountain Paths",
    url: "https://youtu.be/Ntz602DxHOk",
    embed: "https://www.youtube.com/embed/Ntz602DxHOk",
    description:
      "Sert patikalar, dağ geçitleri ve macera dolu rotalarla çevrilmiş bir gezi. Zorlu doğa koşullarında adrenalin dolu anlar. Dağların zirvelerine tırmanırken, doğanın sert yüzünü keşfedecek, zorlu patikalarda ilerleyeceksiniz. Bu gezi, doğa ile baş başa kalırken, heyecan dolu anlar yaşamanızı sağlayacak. Off-road macerası, doğanın zorlukları ve güzellikleri arasında mükemmel bir denge kuruyor.",
  },
  {
    title: "Night Lights & City Flicker",
    url: "https://www.youtube.com/watch?v=v4CA65JyaVA",
    embed: "https://www.youtube.com/embed/v4CA65JyaVA",
    description:
      "Şehrin ışıklarla donandığı gece zamanı, parlak caddeler, sokak lambaları, kalabalığın ritmi ve gece yaşamının enerjisiyle harmanlanan görüntüler. Gece hayatının renkli ve enerjik dünyasına adım atacağınız bu turda, şehrin ışıklarının altında bir başka yüzünü keşfedeceksiniz. Akşamın ilerleyen saatlerinde, şehrin canlı caddelerinde yürüyüş yapacak, geceyi uyandıran sokak kültürüne tanıklık edeceksiniz.",
  },
  {
    title: "Quiet Retreat: Nature’s Embrace",
    url: "https://youtu.be/_0ZkeFtkWNA",
    embed: "https://www.youtube.com/embed/_0ZkeFtkWNA",
    description:
      "Şehrin gürültüsünden uzak, sessiz nehir kenarları, orman açıklıkları, doğayla baş başa kalabileceğiniz huzur dolu bir rota. Bu tur, içsel huzuru bulmak isteyenler için mükemmel bir fırsat. Doğanın kucaklayıcı sessizliğinde, akarsu kenarında yürüyüş yapacak, ormanın derinliklerine adım atacaksınız. Yalnızca doğa ve siz, bir arada.",
  },
  {
    title: "Food Trails & Market Exploration",
    url: "https://www.youtube.com/watch?v=vW1ei0CyACk",
    embed: "https://www.youtube.com/embed/vW1ei0CyACk",
    description:
      "Yerel pazarlar, sokak lezzetleri, mutfak kültürü ve tatları deneyimlediğiniz bir gastronomi turu. Bu turda, yerel pazarları gezecek, bölgenin zengin mutfak kültürünü yakından tanıyacaksınız. Sokak satıcılarının hazırladığı taze yemekleri tatacak, bölgesel lezzetlerin nasıl hazırlandığını göreceksiniz. Yeme-içme meraklıları için unutulmaz bir deneyim!",
  },
  {
    title: "Cross‑Cultural Routes & Unexpected Turns",
    url: "https://www.youtube.com/watch?v=QVoSgRbd69c",
    embed: "https://www.youtube.com/embed/QVoSgRbd69c",
    description:
      "Farklı kültürlerin iç içe geçtiği yollar, beklenmedik manzaralar ve çok yönlü bir keşif rotası. Bu gezi, farklı kültürlerin bir araya geldiği ve birbirinden ilginç izler bıraktığı rotalarda yapılacak bir keşif. Yol boyunca, farklı gelenekler, diller ve yaşam biçimleriyle karşılaşacak, her bir dönemeçte şaşırtıcı manzaralarla karşılaşacaksınız. Beklenmedik sürprizlerle dolu bir yolculuk sizi bekliyor.",
  },
];

export default popularTours;
