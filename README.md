# Learning Platform

Bu taslama Vue 3, TypeScript we Vite ulanyp döredilen onlaýn okuw platformasydyr. Ulanyjylar dürli kurslary görüp, öwrenip we öz bilimlerini artdyryp bilerler.

## Aýratynlyklar

- ⚡ **Vite** - Çalt işläp düzmek we gyzgyn täzelenme (HMR).
- 💚 **Vue 3** - Composition API we `<script setup>` esasynda.
- 🟦 **TypeScript** - Güýçli tipizasiýa we kod howpsuzlygy.
- 🎨 **Tailwind CSS** - Çeýe we döwrebap dizaýn.
- 🧩 **Element Plus** - UI komponent kitaphanasy.
- 🍍 **Pinia** - State dolandyryşy.
- 🌐 **i18n** - Köp dillilik goldawy (Türkmen we Iňlis).
- 💉 **tsyringe** - Garaşlylyklaryňyzy (Dependency Injection) dolandyrmak üçin.

## Taslamany Gurnamak

Taslamany işe girizmezden ozal zerur paketleri ýüklemeli:

```sh
npm install
```

### Ösüş (Development) Režiminde Işletmek

Taslamany işläp düzmek we brauzerde görmek üçin:

```sh
npm run dev
```

### Önümçilik (Production) Üçin Gurmak

Taslamany önümçilige taýýarlamak (build etmek) we tipleri barlamak üçin:

```sh
npm run type-check
npm run build
```

### Lintwe Formatirlemek

```sh
npm run lint
```

## Arhitektura

Taslama "Feature-based" gurluşy we "Clean Architecture" ýörelgelerini ulanýar:

- **src/features**: Her bir aýratynlyk (mysal üçin MainPage) öz içine `domain`, `presentation`, we `data` gatlaklaryny alýar.
- **src/core**: Umumy ulanylýan `di` (Dependency Injection) we `mvvm` (Model-View-ViewModel) kömekçi funksiýalary.
- **src/shared**: Taslamada gaýtalanýan umumy komponentler we funksiýalar.

## Maslahat Berilýän IDE Gurnamalary

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (we @vue/typescript-plugin öçürilen).
