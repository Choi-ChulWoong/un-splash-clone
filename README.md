## Intro
Docs version : 0.2.1<br>
This project is a non-profit initiative for personal learning purposes.<br>

---

### Scripts

---
<span style="color: grey;"># 개발 서버 실행</span><br>
```
$ npm install
$ npm run dev
```

### Dependencies

---
1. Next.js
2. Typescript
3. Emotion
4. React-query
5. Zustand

### Client-routes

---
1. [localhost:4500](http://localhost:4500) - 포토 페이지

### API End-points

---
1. [api/photos](http://localhost:4500/api/photos) - 포토 리스트
    1. [/infinite](http://localhost:4500/api/photos/infinite) - 포토 페이징 리스트

### Directory Structure

---
```
.
├── public
│   ├── data
│   ├── fonts
│   └── icons
├── src
│   ├── api
│   └── components
│   │   ├── home
│   │   ├── error
│   │   ├── common
│   │   └── ...
│   ├── containers
│   │   └── home
│   ├── pages
│   │   └── api
│   ├── store
│   ├── hooks
│   │   ├── home
│   │   ├── common
│   │   └── query
│   ├── types
│   └── styles
├── package.json
└── README.md

```