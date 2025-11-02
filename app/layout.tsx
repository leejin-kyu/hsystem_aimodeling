import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 예측모델링 | 해태시스템 - 데이터로 미래를 예측하고 불확실성을 수치로',
  description: 'Python·R 기반 AI 예측모델링 및 이상치 탐지 전문 서비스. ARIMA, XGBoost, LSTM 활용. 공정 불량률 감소, 설비 예지보전, 매출·수요 예측.',
  keywords: 'AI 예측모델링, 이상치 탐지, 시계열 예측, 머신러닝, ARIMA, XGBoost, LSTM, 불량률 예측, 수요 예측, 스마트팩토리, Python 데이터분석',
  authors: [{ name: '해태시스템(HAETAE SYSTEM)' }],
  creator: '해태시스템',
  publisher: '해태시스템',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://[YOUR-DOMAIN]',
    siteName: '해태시스템 - AI 예측모델링',
    title: 'AI 예측모델링 전문 | 해태시스템',
    description: '데이터로 미래를 예측하고, 불확실성을 수치로 바꿉니다. Python·R 기반 AI 예측모델링 및 이상치 탐지 전문.',
    images: [
      {
        url: '/og-image-prediction.jpg',
        width: 1200,
        height: 630,
        alt: 'AI 예측모델링 - 해태시스템',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 예측모델링 전문 | 해태시스템',
    description: 'Python·R 기반 AI 예측모델링 및 이상치 탐지 서비스',
    images: ['/og-image-prediction.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      naver: 'naver-site-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
