'use client'

import { ArrowRight, Sparkles, Award, Users, Database, Zap, Shield } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">
              HAETAE SYSTEM | AI 예측모델링 전문
            </span>
          </div>

          {/* Problem Statement - 문제 제기 */}
          <div className="mb-8 max-w-3xl mx-auto animate-slide-up">
            <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              매출이 떨어질 때마다 원인을 찾느라 <span className="text-red-600 font-bold">몇 주씩 허비</span>하시나요?<br />
              불량률이 갑자기 치솟는데 <span className="text-red-600 font-bold">예측할 방법이 없어</span> 불안하신가요?<br />
              설비가 멈춘 후에야 문제를 발견해서 <span className="text-red-600 font-bold">손실이 커지고</span> 있나요?
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up animation-delay-200">
            <span className="block text-gray-900 mb-2">데이터로 미래를 예측하고,</span>
            <span className="block gradient-text">불확실성을 수치로 바꿉니다</span>
          </h1>

          {/* Empathy & Solution - 공감 + 해결방식 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto animate-slide-up animation-delay-400">
            Python·R 기반 <span className="font-bold text-purple-600">AI 예측모델링 및 이상치 탐지</span> 전문 서비스
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-500">
            공공기관 및 기업 대상 다수 프로젝트 수행 · 세금계산서 발행 가능
          </p>

          {/* Value Proposition */}
          <div className="mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-600">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 shadow-lg">
              <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
                <span className="text-purple-600 text-xl block mb-2">✓ 결과에 책임집니다</span>
                분석 성과가 기대 수준에 미치지 못할 경우,<br />
                <span className="text-purple-600">재작업 또는 무상 보완을 약속드립니다</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-600">
            {/* Primary Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                문의하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:070-8027-4653"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 상담
              </a>
            </div>

            {/* Services Link */}
            <a
              href="#features"
              className="px-8 py-3 bg-white/80 text-gray-800 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-300"
            >
              사업분야 보기
            </a>
          </div>

          {/* Stats - 변화 */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-800">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">ARIMA</div>
              <div className="text-sm text-gray-600">시계열 예측</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">XGBoost</div>
              <div className="text-sm text-gray-600">머신러닝</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">LSTM</div>
              <div className="text-sm text-gray-600">딥러닝 예측</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">LOF</div>
              <div className="text-sm text-gray-600">이상치 탐지</div>
            </div>
          </div>

          {/* Expected Benefits */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-md">
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-700 block mb-2">💡 기대 효과</span>
                  공정 불량률 감소 및 품질 안정성 향상<br />
                  설비 이상 조기 감지로 유지보수 비용 절감<br />
                  매출·수요·재고 예측을 통한 경영 효율 개선
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">✓ 모든 패키지 세금계산서 발행 가능</span>
                    <br />
                    기업·공공기관 계약 지원 / NDA(비밀유지계약) 체결 가능
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">상담 가능 시간</span>
                    <br />
                    평일 10:30~18:00 (점심 13:00~14:00) · 평균 응답 시간 1시간 이내
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
    </>
  )
}
