# 📅 2024/07/08/월

## 🚀 주간 목표

NextJS 유데미 강의 - 섹션 10까지 완강하기

pravel api 시도

frontend mentor 마크업

정처기 실기 공부 D-20

## 💪🏻 오늘 한 일

- [x] 정처기 23년 2회 공부

- [x] frontendMentor - coutries : main 마크업

- [x] nextjs 강의 듣기 - [catch-all 라우트](https://cottony-slope-8c1.notion.site/Next-js-ba5383b711774406976394f5955e871a?pvs=4)

## 🫵🏻 내일 할 일

- 정처기
  ㄴ 정처기 23년 2회 공부하기

- next 강의

- FrontendMentor - countries 마크업

- Pravel - api 연결

## 🔎 공부해볼 주제

- react : 원리, 훅, 상태관리

- nextjs

- 라우팅
  ㄴ next/router, next/navigation

- 렌더링
  ㄴ SPA에서 url이 바뀌면 CSR과 SSR에서는 어떤 식으로 렌더링?동작?하는걸까?

- SPA, MPA
  ㄴ 새로고침하면 어떻게 동작할까

- typescript
  ㄴ ! : null 또는 undefined를 타입으로 받는 경우에 현재 가지고 있는 값이 null 또는 undefined이 아니라는 것을 직접 알려주는것

- navigator.clipboard.writeText()

- throttle, debounce

- suspense

## 👀 오늘의 궁금증

- vite에서 tailwindcss 쓸때 vite.config.ts 파일에서 설정해줘야 함
  ㄴ 내용 :
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
css: {
postcss: {
plugins: [tailwindcss()],
},
},
});
