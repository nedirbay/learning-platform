# Server Setup Guide for Learning Platform (Türkmençe)

Ine, serwere deploy etmek üçin etmeli ädimleriňiz we zerur komandalar.

## 1. Serwere baglanmak

Ilki bilen terminal arkaly serwere giriň (bu komanda öz kompýuteriňizde ýazylýar):

```bash
ssh username@server_ip_address
```

---

## 2. Nginx Gurnamak (Eger serwerde ýok bolsa)

Serweriň içine gireniňizden soň:

```bash
sudo apt update
sudo apt install nginx -y
```

---

## 3. Papka döretmek we Rugsat bermek (Iň wajyp ýeri)

GitHub Action-yň faýllary ýükläp bilmegi üçin papka döredip, oňa dogry rugsatlary bermeli.

```bash
# 1. Papkany döretmek
sudo mkdir -p /var/www/learning-platform

# 2. Rugsatlary sazlamak
# $USER - bu siziň häzirki ulanyjyňyzy aňladýar.
# GitHub Action hem şol ulanyjy ady (SERVER_USER) bilen gireninde ýazyp biler ýaly.
sudo chown -R $USER:$USER /var/www/learning-platform

# 3. Okamak/Ýazmak rugsatlary
sudo chmod -R 755 /var/www/learning-platform
```

---

## 4. Nginx Konfigurasiýasy (Vue Router üçin)

Vue.js "Single Page Application" bolany üçin, ähli soraglary `index.html` faýlyna ugrukdyrmaly. Ýogsam sahypany täzeläniňizde 404 ýalňyşlygy çykar.

**Täze fail açyň:**

```bash
sudo nano /etc/nginx/sites-available/learning-platform
```

**Aşakdaky kody içine goýuň:**
_( `your_domain_or_ip` ýerine serweriň IP adresini ýa-da domeniňizi ýazyň)_

```nginx
server {
    listen 8000;
    server_name your_domain_or_ip;

    root /var/www/learning-platform;
    index index.html;

    # Wajyp: Ähli ýollary index.html-a gönükdirýär
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Faýly ýatda saklamak üçin: `Ctrl + X`, soňra `Y`, soňra `Enter` basyň.

---

## 5. Saýty Işjeňleşdirmek

```bash
# 1. Konfigurasiýany işjeňleşdirmek (symlink)
sudo ln -s /etc/nginx/sites-available/learning-platform /etc/nginx/sites-enabled/

# 2. Default konfigurasiýany öçürmek (islege görä, eger päsgel berse)
sudo rm /etc/nginx/sites-enabled/default

# 3. Nginx sazlamalaryny barlamak
sudo nginx -t

# 4. Eger "syntax is ok" diýse, Nginx-i täzeden işlediň
sudo systemctl restart nginx
```

---

## 6. GitHub Secrets (GitHub sahypasynda)

Indi GitHub repozitoriýaňyza giriň we `Settings` -> `Secrets and variables` -> `Actions` bölümine geçip, şu "New repository secret"-leri goşuň:

- **SERVER_HOST**: Serweriňiz IP adresi (meselem: `192.168.1.100`)
- **SERVER_USER**: Serwere girýän ulanyjy adyňyz (meselem: `root` ýa-da `ubuntu`)
- **SERVER_PASS**: Şol ulanyjynyň paroly

Şulary etseňiz, `git push` eden wagtyňyz awtomatiki usulda serwere deploy bolar.
