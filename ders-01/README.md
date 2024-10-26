# Web Programlama - Ders 1

### Giriş

- İnternet tanımı
- Tarayıcı tanımı
- HTML nedir?
- Bazı HTML Etiketleri

### Geliştirme ortamının kurulumu

- [Visual Studio Code](https://code.visualstudio.com/download) Kurulumu
- Tarayıcı Seçimi
- Eklentiler ekranından eklentilerin kurulumu

  - `Prettier` Kod biçimlendirme
  - `Auto Rename Tag` Eşleştirilmiş HTML/XML etiketini otomatik olarak yeniden adlandır

  ###### Opsiyonel eklentiler

  - `Live Preview` HTML çıktılarını vsc içerisinde hızlı bir şekilde görüntülemek için kullanılır
  - `Material Icon Theme` Dosya simgelerini özelleştirir
  - `Houston` Vsc için alternatif bir renk teması
  - `Error Lens` Hataların, uyarıların ve diğer dil tanılamalarının vurgulanmasını iyileştirin.

### HTML'e Giriş

- Bir HTML öğesi bir başlangıç ​​etiketi, bir içerik ve bir bitiş etiketi ile tanımlanır.

  - `<etiket-ismi> etiket içeriği </etiket-ismi>`.

- Bazı HTML öğelerinin içeriği yoktur (örneğin `<br>` öğesi). Bu öğelere boş öğeler denir. Boş öğelerin bir bitiş etiketi yoktur!

- HTML belgesinin kendisi `<html> ile başlar ve </html> ` ile biter.
- HTML belgesinin özellikleri ve bilgileri (örn `<title>sayfa başlığı</title>`) `<head>...</head> `etiketi içerisine gelir

- HTML belgesinin görünür kısmı `<body> ve </body> ` arasındadır.

- `h1, p` etiketlerinin kullanımı

- `a, img` etiketlerinin kullanımı
  - HTML Attributes (nitelikleri) tanımı ve kullanımı
  - `a` (link) elementinde `href` kullanımı
  - `img` (resim) elementinde `src, alt` kullanımı
    - src => dosyanın kaynağı, harici veya dahili yol
    - alt => resim yüklenmezse oynatılacak metin
- `ul, ol, li` liste etiketlerinin kullanımı
- `button` buton etiketlerinin kullanımı

### CSS'e Giriş

- Yapısı - `<tagname style="property:value;">`
  <img src="https://www.w3schools.com/css/img_selector.gif" />

  - Selector (Seçici), biçimlendirmek istediğiniz HTML öğesini işaret eder.
  - Declaration block (tanım bloğu), noktalı virgülle ayrılmış bir veya daha fazla bildirim içerir.
  - Her tanım bloğu, iki nokta üst üsteyle ayrılmış bir CSS özellik adı ve bir değer içerir.
  - Birden fazla CSS bildirimi noktalı virgülle ayrılır ve bildirim blokları süslü parantezlerle çevrelenir.
  - `p {
  color: red;
  text-align: center;
}`

- Inline CSS - elementin başlangıç kısmı içerisinde `style` attribute kullanılarak yazılan stil kurallarını tanımlar.
  - `<h1 style="color:red;"> Kırmızı bir başlık </h1>`
- Dahili CSS - HTML dosyası içerisinde `style` etiketi kullanarak yazılan stil kurallarını tanımlar.
- Harici CSS - `.css` uzantılı dosyalar kullanılır.
  - Harici css dosyasını `head` etiketi içerisinde `link` etiketi kullanarak dahil etme
- Bazı css özellikleri
  - `color` yazı rengini değiştirir
  - `background-color` arka plan rengini değiştirir
  - `display` Display özelliği, bir öğenin bir web sayfasında nasıl gösterileceğini belirtmek için kullanılır
  - `justify-content` içeriğin nasıl hizalanacağını belirler (sağdan sola)
  - align-items içeriğin nasıl hizalanacağını belirler (yukarıdan aşağıya)
  - `margin` CSS kenar boşluğu özellikleri, tanımlanmış sınırların dışında, öğelerin etrafında boşluk oluşturmak için kullanılır.
  - `padding` Dolgu, bir öğenin içeriğinin etrafında, tanımlanmış sınırların içinde boşluk oluşturmak için kullanılır.
  - `border, border-radius` Bir elementinin kenarlıklarını kontrol eder.
  - `font-size` Yazı boyutunu kontrol eder.
  - `transition` Animasyonların daha akıcı olmasını sağlar
  - `:hover` Mouse ile element üzerine gelindiğinde elementin davranışlarını kontrol eder

### Kapanış

- [Google](https://google.com) sitesine benzer bir yapı oluşturmak.
