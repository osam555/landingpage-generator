---
name: landing-page-generator
description: |
  한국어 상세페이지(랜딩페이지) 자동 생성 스킬. 제품/서비스 정보를 입력받아
  13개 섹션의 고전환 상세페이지를 생성합니다. Gemini API로 섹션별 이미지를
  생성하고 최종 PNG/PDF로 출력합니다.

  Use when: 상세페이지, 랜딩페이지, 제품 소개 페이지, 판매 페이지 생성 요청 시
model: sonnet
---

# 상세페이지 생성기 (Landing Page Generator)

## 개요
제품/서비스 정보를 기반으로 고전환 상세페이지를 자동 생성하는 스킬입니다.

## 실행 흐름

```
[Step 1] 입력 수집 - agents/01-intake.md
[Step 2] 타겟 리서치 - agents/02-research.md
[Step 3] 13섹션 카피 - agents/03-copy.md
[Step 4] 디자인 방향 - agents/04-design-direction.md
[Step 5] Gemini 프롬프트 생성 - agents/05-prompt-generator.md
[Step 6] Gemini API로 13개 이미지 생성
[Step 7] 이미지 스티칭 → 최종 PNG/PDF
```

## 13개 섹션 구조

| # | 섹션명 | 높이 | 핵심 요소 |
|---|--------|------|-----------|
| 01 | Hero | 800px | 헤드라인, CTA, 긴급성 배지 |
| 02 | Pain | 600px | 페인포인트 3-4개 |
| 03 | Problem | 500px | 진짜 원인, 구조적 문제 |
| 04 | Story | 700px | Before→After 변화 |
| 05 | Solution | 400px | 제품 한 줄 정의 |
| 06 | How It Works | 600px | 단계별 프로세스 |
| 07 | Social Proof | 800px | 후기, 수치 |
| 08 | Authority | 500px | 제작자 소개 |
| 09 | Benefits | 700px | 혜택, 보너스 |
| 10 | Risk Removal | 500px | 환불 정책, FAQ |
| 11 | Comparison | 400px | Before/After 대비 |
| 12 | Target Filter | 400px | 추천/비추천 대상 |
| 13 | Final CTA | 600px | 최종 CTA |
