import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  Clock, 
  CheckCircle2,
  FileText,
  UserCheck,
  Building2,
  Briefcase,
  Layout,
  MessageSquare
} from 'lucide-react';

const Header = () => (
  <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-white sticky top-0 z-50 border-b border-slate-100">
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-4">
        <span className="text-blue-600 font-bold text-2xl tracking-tight">BOON</span>
        <span className="h-8 w-px bg-slate-200 mx-2"></span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/CIBC_logo_2021.svg/1280px-CIBC_logo_2021.svg.png" 
          alt="CIBC Logo" 
          className="h-6 md:h-8 w-auto object-contain"
        />
      </div>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors duration-200 shadow-sm flex items-center gap-2">
      <span>Download Summary</span>
    </button>
  </header>
);

const Hero = () => (
  <section className="bg-[#4169E1] w-full py-24 md:py-32 px-6 md:px-12 text-center flex flex-col items-center justify-center">
    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
      <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">Prepared exclusively for CIBC Capital Markets</span>
    </div>
    
    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mb-8">
      Developing Leaders Who Can Drive CIBC’s 2030 Growth Mandate
    </h1>
    
    <div className="max-w-3xl mx-auto text-left md:text-center">
      <p className="text-blue-50 text-lg md:text-xl font-medium leading-relaxed mb-6">
        We know CIBC is targeting ambitious organic growth, and that ambition places immense pressure on your Directors and Executive Directors.
      </p>
      <p className="text-blue-100 text-lg leading-relaxed mb-10">
        You are making a critical cultural shift—moving from execution-focused silos to a model of horizontal collaboration and coaching. This proposal outlines a partnership built specifically to support that transition, respecting the pace and intensity of Capital Markets.
      </p>
    </div>
    
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg flex items-center gap-2 min-w-[240px] justify-center">
        Explore Pilot Framework <ArrowRight className="w-5 h-5" />
      </button>
      <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors min-w-[240px]">
        View Leadership Metrics
      </button>
    </div>
  </section>
);

const InsightCard = ({ title, description }: { title: string, description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
    <div>
      <h4 className="text-slate-900 font-bold mb-1 text-lg">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const InsightsSection = () => (
  <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-100">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="md:w-1/3">
        <h2 className="text-slate-900 text-3xl font-extrabold mb-4">What We Heard from Your Team</h2>
        <p className="text-slate-500 text-lg">
          Our understanding of the current landscape within Capital Markets.
        </p>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
        <InsightCard 
          title="Rapid Promotion Velocity" 
          description="Directors and EDs are being promoted into bigger roles faster than ever to meet growth demands." 
        />
        <InsightCard 
          title="The 'Middle' Void" 
          description="You are investing in foundational coaching, but there is a clear gap in support after that for leaders who need deeper readiness." 
        />
        <InsightCard 
          title="Missing People Skills" 
          description="Many leaders haven't been equipped with the specific habits required to lead people and influence peers." 
        />
        <InsightCard 
          title="Siloed Execution" 
          description="Capital Markets needs cross-functional thinkers who break silos, but leaders often default to their own lanes." 
        />
        <InsightCard 
          title="Reactive vs. Proactive" 
          description="Leaders are relying on reactive problem-solving instead of the proactive coaching mindset needed for 2030." 
        />
        <InsightCard 
          title="Time Scarcity" 
          description="MDs are extremely busy. Solutions must be efficient, high-impact, and respectful of their time." 
        />
      </div>
    </div>
  </section>
);

const GapCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
    <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl text-blue-900 leading-none select-none group-hover:scale-110 transition-transform duration-500">
      {number}
    </div>
    <div className="relative z-10">
      <h3 className="text-slate-900 text-xl font-bold mb-4 pr-12">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const GapsSection = () => (
  <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4">Three Gaps Holding Back the Next Generation</h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto">
        Turning high-performing individual contributors into the leaders CIBC needs requires bridging these specific divides.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <GapCard 
        number="1"
        title="Turning High-Talent ICs into Cross-Functional Leaders"
        description="They have the technical skills but not the systems thinking or horizontal collaboration habits required for the 2030 growth mandate."
      />
      <GapCard 
        number="2"
        title="Equipping New EDs & Directors to Manage People"
        description="Leaders are inheriting big teams and revenue targets before they’ve developed foundational behaviors for driving performance through others."
      />
      <GapCard 
        number="3"
        title="Creating Space for Reflection & Learning"
        description="CIBC’s talent is strong, but the intense culture and workload leave almost no room for deeper dialogue, perspective-sharing, or vulnerability."
      />
    </div>
  </section>
);

const AlignmentSection = () => (
  <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">How Boon Aligns With CIBC’s Vision</h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          We don't offer a menu of generic workshops. We offer targeted interventions designed to close the gaps identified above.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Boon Grow - Main Card */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-10 border border-blue-500 shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Boon Grow</h3>
          </div>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            A 6-month cohort-based leadership development engine for Directors, EDs, and high-potential ICs.
          </p>
          <ul className="space-y-4 mt-auto">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-200" />
              <span className="font-medium">12 one-on-one coaching sessions</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-200" />
              <span className="font-medium">4 group coaching sessions for peer learning</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-200" />
              <span className="font-medium">Pre/post measurement of leadership competencies</span>
            </li>
          </ul>
        </div>

        {/* Boon Together - Main Card */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 p-2 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Boon Together</h3>
          </div>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Facilitated sessions led by experienced operator-coaches to break down silos.
          </p>
          <ul className="space-y-4 mt-auto">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-500" />
              <span className="font-medium text-slate-200">Creates safe, high-trust environments</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-500" />
              <span className="font-medium text-slate-200">Focused on reflection and connection</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-500" />
              <span className="font-medium text-slate-200">Connects leaders across functions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Secondary Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex items-center gap-4">
          <Target className="w-5 h-5 text-slate-400" />
          <div>
            <span className="font-bold text-white block">Boon Exec</span>
            <span className="text-slate-400 text-sm">Targeted support for senior leaders (available if needed).</span>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex items-center gap-4">
          <BarChart3 className="w-5 h-5 text-slate-400" />
          <div>
            <span className="font-bold text-white block">Boon Scale</span>
            <span className="text-slate-400 text-sm">Broader access for employees requiring specific support.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RelevanceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyMattersSection = () => (
  <section className="py-24 px-6 md:px-12 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-slate-900 text-3xl font-extrabold mb-4">Why This Matters for Capital Markets</h2>
        <p className="text-slate-600 text-lg">
          We’ve built this specifically for the realities of your environment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelevanceCard 
          icon={Briefcase}
          title="Operators, Not Theorists"
          description="Our coaches have real operating backgrounds. They understand P&L, client pressure, and execution."
        />
        <RelevanceCard 
          icon={Target}
          title="Meeting Leaders Where They Are"
          description="Designed specifically for Directors, EDs, and Senior Associates—the engine room of your growth."
        />
        <RelevanceCard 
          icon={Globe}
          title="Virtual-First & Global"
          description="Seamless delivery across Toronto, NYC, London, and APAC time zones."
        />
        <RelevanceCard 
          icon={Clock}
          title="Designed for Busy People"
          description="High-impact, time-efficient sessions that fit into the calendars of deal-makers."
        />
        <RelevanceCard 
          icon={BarChart3}
          title="Data You Will Respect"
          description="Measurement that HR and MDs will value, tracking actual behavior change."
        />
      </div>
    </div>
  </section>
);

const NextStepsSection = () => (
  <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-slate-900 text-3xl font-extrabold mb-6">What a Smart First Step Could Look Like</h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        We propose a low-risk, momentum-building pilot to demonstrate impact before 2026 planning.
      </p>
    </div>

    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
      
      <div className="space-y-12">
        {[
          {
            title: "Experience the Product",
            desc: "Complimentary matching and two coaching sessions for Cindy and Janine to validate quality.",
            icon: UserCheck
          },
          {
            title: "Coach Introductions",
            desc: "Optional intro sessions with 1–2 of our top coaches to ensure cultural fit.",
            icon: MessageSquare
          },
          {
            title: "Launch Small Pilot",
            desc: "A single 8–12 person Boon Grow cohort OR one facilitated group session for a key team.",
            icon: Zap
          },
          {
            title: "Light-Touch Measurement",
            desc: "Simple baseline → 6-week → endline tracking to prove efficacy.",
            icon: BarChart3
          }
        ].map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 relative">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-bold text-xl z-10 shrink-0 shadow-sm">
              {i + 1}
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 mb-2 md:hidden">
                <span className="text-blue-600 font-bold text-lg">Step {i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ResourcesSection = () => (
  <section className="py-16 px-6 md:px-12 bg-blue-50/50 border-t border-slate-100">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-slate-900 text-2xl font-bold mb-8">Resources We Can Provide for Internal Alignment</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
        {[
          "Coach bios (incl. Canadian-based)",
          "Client reference (Financial Services)",
          "Pricing ranges & Pilot costs",
          "Business-case template",
          "Vendor onboarding readiness checklist"
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-3 shadow-sm">
            <FileText className="w-5 h-5 text-blue-500" />
            <span className="text-slate-700 font-medium text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-24 px-6 md:px-12 bg-white max-w-4xl mx-auto">
    <div className="text-center">
      <div className="inline-block p-3 rounded-full bg-slate-100 mb-6">
        <Building2 className="w-8 h-8 text-slate-700" />
      </div>
      <h2 className="text-slate-900 text-3xl font-extrabold mb-6">About Boon</h2>
      <p className="text-slate-600 text-lg leading-relaxed mb-8">
        We are a founder-led organization supporting 100+ global companies, with deep experience in financial services. Our bench of 500+ coaches combines former operators with accredited professionals, all focused on one thing: measurable behavior change. We don't just coach executives; we build the next generation of leaders.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-8">
        <div>
          <div className="text-3xl font-black text-blue-600 mb-1">100+</div>
          <div className="text-slate-500 text-sm font-medium">Organizations</div>
        </div>
        <div>
          <div className="text-3xl font-black text-blue-600 mb-1">500+</div>
          <div className="text-slate-500 text-sm font-medium">Global Coaches</div>
        </div>
        <div>
          <div className="text-3xl font-black text-blue-600 mb-1">4.9/5</div>
          <div className="text-slate-500 text-sm font-medium">Avg Rating</div>
        </div>
        <div>
          <div className="text-3xl font-black text-blue-600 mb-1">98%</div>
          <div className="text-slate-500 text-sm font-medium">Retention</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 bg-slate-50 border-t border-slate-200 text-center">
    <h2 className="text-slate-900 text-2xl md:text-3xl font-extrabold mb-8">Ready to Explore the Pilot?</h2>
    <div className="flex justify-center">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
        Start Internal Alignment
      </button>
    </div>
    <div className="mt-12 text-slate-400 text-sm">
      © 2024 Boon. Prepared for CIBC Capital Markets.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <Hero />
      <InsightsSection />
      <GapsSection />
      <AlignmentSection />
      <WhyMattersSection />
      <NextStepsSection />
      <ResourcesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}