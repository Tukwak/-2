/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BarChart3, Briefcase, Plane, X } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  desc: string;
  fullDesc: string;
  image: string;
}

const projects: Project[] = [
  { title: "에어부산 자금 집행 최적화", role: "재무팀 인턴", desc: "오지급률 0% 기록 (월 1,500건)", fullDesc: "데일리 체크리스트를 도입하여 자금 집행 검증 단계를 구체화했습니다. 5개월간 월평균 1,500건 이상의 자금 집행 건수 중 오지급률 0%를 기록했습니다.", image: "https://picsum.photos/seed/airbusan1/800/600" },
  { title: "에어부산 신규 노선 검토", role: "전략경영팀", desc: "시장 데이터 시각화 및 분석 체계 마련", fullDesc: "방대한 시장 데이터를 경영진이 빠르게 판단할 수 있도록 직관적 지표로 시각화했습니다. 노선별 마진 및 시장 공급 추이 데이터 정제를 통해 전략 수립의 근거를 제공했습니다.", image: "https://picsum.photos/seed/airbusan2/800/600" },
  { title: "현대중공업 프로세스 개선", role: "인사총무팀 인턴", desc: "공용 양식 도입으로 협업 효율 증대", fullDesc: "부서별 상이했던 회의 자료 양식을 통일하기 위해 '공용 양식 초안'을 제안하고 배포했습니다. 자료 취합 시 발생하는 시간 지연 문제를 해결하여 유관 부서 만족도를 증대시켰습니다.", image: "https://picsum.photos/seed/hhi/800/600" },
  { title: "H-점프스쿨 콘텐츠 혁신", role: "멘토", desc: "수업 참여 희망 인원 75% 증가", fullDesc: "일방향 수업에서 프로젝트형 수업('나만의 캐릭터 이야기 만들기')으로 전환하여 참여도를 극대화했습니다. 수업 참여 희망 인원이 기존 4명에서 7명으로 75% 증가했습니다.", image: "https://picsum.photos/seed/jumpschool/800/600" }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">진 소 윤</div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#competencies" className="hover:text-gray-900 transition">역량</a>
          <a href="#projects" className="hover:text-gray-900 transition">프로젝트</a>
          <a href="mailto:shortstop8820@gmail.com" className="hover:text-gray-900 transition">이메일</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center relative">
        <h1 className="text-6xl font-extrabold tracking-tighter mb-6 text-gray-900">진 소 윤</h1>
        <p className="text-2xl text-gray-500 max-w-2xl mx-auto mb-10">
          "재무적 통찰력과 주체적인 실행력으로 조직의 전략적 의사결정을 지원하는 경영지원 전문가입니다."
        </p>
      </header>

      {/* Competencies */}
      <section id="competencies" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-gray-900">핵심 역량</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: BarChart3, title: "전략적 데이터 분석", desc: "데이터 정제 및 경영진 의사결정 지표 산출" },
            { icon: Briefcase, title: "정교한 재무 관리", desc: "대규모 자금 집행 및 리스크 통제" },
            { icon: Plane, title: "주체적 문제 해결", desc: "비효율 개선 및 부서 간 협업 시너지" }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-100 bg-white rounded-2xl hover:border-gray-200 transition shadow-sm">
              <item.icon className="w-10 h-10 mb-6 text-gray-900" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-3xl border border-gray-100">
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-gray-900">대표 프로젝트</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition" onClick={() => setSelectedProject(p)}>
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{p.role}</p>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white p-8 rounded-3xl max-w-2xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full" onClick={() => setSelectedProject(null)}><X /></button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{selectedProject.role}</p>
            <p className="text-gray-800 leading-relaxed">{selectedProject.fullDesc}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20 text-center text-gray-500 text-sm">
        <p>© 2026 진 소 윤. All rights reserved.</p>
      </footer>
    </div>
  );
}
