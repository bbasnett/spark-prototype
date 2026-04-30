import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, Building2, BarChart3, Zap, Globe, Heart, TrendingUp, Mountain, Users, Coins, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureCards, FeatureIcons } from "@/components/ui/feature-sections"
import StackFeatureSection from "@/components/ui/stack-feature-section"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

type DistrictKey = "mangan" | "gyalshing" | "soreng" | "namchi" | "gangtok" | "pakyong"

const DISTRICTS: Record<DistrictKey, { name: string; x: number; y: number; sub: string }> = {
  mangan: { name: "Mangan", x: 326, y: 358, sub: "Hydro-labs & clean energy" },
  gyalshing: { name: "Gyalshing", x: 195, y: 454, sub: "Eco-tourism & heritage" },
  soreng: { name: "Soreng", x: 187, y: 512, sub: "Organic agri co-ops" },
  namchi: { name: "Namchi", x: 253, y: 525, sub: "Food processing" },
  gangtok: { name: "Gangtok", x: 370, y: 413, sub: "Fintech & governance" },
  pakyong: { name: "Pakyong", x: 342, y: 493, sub: "Logistics & airport cluster" },
}

type Idea = {
  from: DistrictKey
  to: DistrictKey
  label: string
  type: "CAPITAL" | "TALENT" | "VENTURE"
  amt: string
  spark: number[]
}

const IDEAS: Idea[] = [
  { from: "mangan", to: "gangtok", label: "Hydro micro-grid", type: "CAPITAL", amt: "₹ 2.1 Cr", spark: [3, 5, 4, 7, 6, 9, 8, 11] },
  { from: "gangtok", to: "pakyong", label: "Cross-border logistics", type: "TALENT", amt: "12 hires", spark: [2, 3, 5, 4, 6, 8, 7, 10] },
  { from: "pakyong", to: "namchi", label: "Cold-chain for cardamom", type: "VENTURE", amt: "Seed", spark: [1, 2, 4, 3, 6, 5, 8, 7] },
  { from: "namchi", to: "soreng", label: "Organic cooperative", type: "CAPITAL", amt: "₹ 80 L", spark: [2, 4, 3, 5, 7, 6, 9, 8] },
  { from: "soreng", to: "gyalshing", label: "Homestay network", type: "TALENT", amt: "34 hosts", spark: [3, 4, 6, 5, 7, 8, 10, 9] },
  { from: "gyalshing", to: "mangan", label: "Glacier data platform", type: "VENTURE", amt: "Pre-seed", spark: [1, 3, 2, 5, 4, 7, 6, 9] },
]

const CARDS = [
  { idea: IDEAS[0], left: "48%", top: "110px" },
  { idea: IDEAS[2], left: "43%", top: "340px" },
  { idea: IDEAS[4], left: "78%", top: "255px" },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const stageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const chipRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let raf = 0
    const start = performance.now()

    const svgToStage = (sx: number, sy: number) => {
      const svg = svgRef.current
      const stage = stageRef.current
      if (!svg || !stage) return { x: 0, y: 0 }
      const pt = svg.createSVGPoint()
      pt.x = sx
      pt.y = sy
      const ctm = svg.getScreenCTM()
      if (!ctm) return { x: 0, y: 0 }
      const p = pt.matrixTransform(ctm)
      const r = stage.getBoundingClientRect()
      return { x: p.x - r.left, y: p.y - r.top }
    }

    const tick = (now: number) => {
      const t = now - start
      const cycle = 6000
      IDEAS.forEach((idea, i) => {
        const el = chipRefs.current[i]
        if (!el) return
        const from = DISTRICTS[idea.from]
        const to = DISTRICTS[idea.to]
        const phase = i / IDEAS.length
        const tt = ((t + phase * cycle) % cycle) / cycle
        const travel = Math.min(1, tt * 1.3)
        const mx = (from.x + to.x) / 2 + (from.y - to.y) * 0.15
        const my = (from.y + to.y) / 2 + (to.x - from.x) * 0.15
        const u = travel
        const x = (1 - u) * (1 - u) * from.x + 2 * (1 - u) * u * mx + u * u * to.x
        const y = (1 - u) * (1 - u) * from.y + 2 * (1 - u) * u * my + u * u * to.y
        const p = svgToStage(x, y)
        el.style.left = `${p.x}px`
        el.style.top = `${p.y}px`
        const alpha = Math.sin(tt * Math.PI)
        el.style.opacity = `${Math.max(0, Math.min(1, alpha * 1.2))}`
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onResize = () => {}
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <style>{`
        .sikkim-stage{
          --sk-bg:#f6f2ea; --sk-bg2:#efe8dc;
          --sk-ink:#1a1f1b; --sk-ink2:#4a5248; --sk-muted:#8a8f85;
          --sk-card:#ffffff;
          --sk-accent:oklch(0.68 0.15 155);
          --sk-accent-2:oklch(0.72 0.15 55);
          --sk-accent-3:oklch(0.65 0.15 255);
          --sk-glow:oklch(0.75 0.18 145);
          position:relative; width:100vw; height:100vh; overflow:hidden;
          background:
            radial-gradient(1200px 600px at 70% 30%, oklch(0.97 0.02 90) 0%, transparent 60%),
            radial-gradient(900px 500px at 20% 80%, oklch(0.96 0.025 150) 0%, transparent 55%),
            var(--sk-bg);
          color:var(--sk-ink);
          font-family:'Inter',system-ui,sans-serif;
        }
        .sikkim-stage *{box-sizing:border-box}
        .sikkim-stage .grid-bg{
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0, 0 0;
          mask-image:
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px);
          -webkit-mask-image:
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px);
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
        }
        .sikkim-stage .nav{
          position:absolute; top:0; left:0; right:0; z-index:20;
          display:flex; align-items:center; justify-content:space-between;
          padding:22px 40px;
        }
        .sikkim-stage .brand{
          display:flex; align-items:center; gap:12px;
          font-family:'Fraunces',serif; color:var(--sk-ink);
        }
        .sikkim-stage .brand-logo{
          height:64px; width:auto; display:block;
        }
        .sikkim-stage .brand-text .brand-name{
          font-weight:600; font-size:20px; letter-spacing:-.01em; line-height:1.1;
        }
        .sikkim-stage .brand-text .brand-tag{
          font-family:'JetBrains Mono',monospace;
          font-size:10px; letter-spacing:.08em; text-transform:uppercase;
          color:var(--sk-ink2); margin-top:2px;
        }
        .sikkim-stage .nav-menu{ flex:0 0 auto; color:var(--sk-ink2); }
        .sikkim-stage .nav-cta{
          padding:9px 16px; border-radius:999px;
          background:var(--sk-ink); color:var(--sk-bg);
          font-size:13px; font-weight:500; border:none; cursor:pointer;
        }

        .sikkim-stage .hero-copy{
          position:absolute; left:56px; top:140px; z-index:10; max-width:430px;
        }
        .sikkim-stage .eyebrow{
          display:inline-flex; align-items:center; gap:8px;
          font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase;
          color:var(--sk-ink2);
          padding:6px 12px; border:1px solid rgba(26,31,27,.15); border-radius:999px;
          background:rgba(255,255,255,.5); backdrop-filter:blur(4px);
        }
        .sikkim-stage .eyebrow .dot{
          width:6px; height:6px; border-radius:50%; background:var(--sk-accent);
          box-shadow:0 0 0 3px color-mix(in oklch, var(--sk-accent) 25%, transparent);
          animation: skPulse 2s infinite;
        }
        @keyframes skPulse { 0%,100%{opacity:1} 50%{opacity:.5} }

        .sikkim-stage h1.sk-h1{
          font-family:'Fraunces',serif; font-weight:500;
          font-size:64px; line-height:1.02; letter-spacing:-.025em;
          margin:18px 0 18px; color:var(--sk-ink); text-wrap:balance;
        }
        .sikkim-stage h1.sk-h1 em{ font-style:italic; color:var(--sk-accent); font-weight:500 }
        .sikkim-stage .sub{
          font-size:16px; line-height:1.55; color:var(--sk-ink2); max-width:400px;
          text-wrap:pretty; margin:0 0 28px;
        }

        .sikkim-stage .cta-row{ display:flex; gap:12px; align-items:center; }
        .sikkim-stage .btn{
          padding:12px 20px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer;
          border:1px solid transparent; transition: transform .15s ease, box-shadow .2s ease;
          font-family:inherit;
        }
        .sikkim-stage .btn-primary{
          background:var(--sk-ink); color:var(--sk-bg);
          box-shadow:0 8px 24px -8px rgba(26,31,27,.4);
        }
        .sikkim-stage .btn-primary:hover{
          transform: translateY(-1px);
          box-shadow:0 12px 30px -8px rgba(26,31,27,.5);
        }
        .sikkim-stage .btn-ghost{
          background:transparent; color:var(--sk-ink); border-color:rgba(26,31,27,.2);
        }
        .sikkim-stage .btn-ghost:hover{ background:rgba(26,31,27,.04); }

        .sikkim-stage .stats{
          position:absolute; left:56px; bottom:44px; z-index:10;
          display:flex; gap:28px;
        }
        .sikkim-stage .stat{ display:flex; flex-direction:column; gap:2px; }
        .sikkim-stage .stat-num{
          font-family:'Fraunces',serif; font-size:28px; font-weight:500; letter-spacing:-.02em;
          color:var(--sk-ink);
        }
        .sikkim-stage .stat-lbl{
          font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.1em; text-transform:uppercase;
          color:var(--sk-muted);
        }

        .sikkim-stage .map-wrap{
          position:absolute; right:0; top:0; bottom:0; width:62%;
          padding-top:80px;
          display:flex; align-items:center; justify-content:center; overflow:hidden;
        }
        .sikkim-stage .map-inner{
          position:relative; width:100%; height:100%;
          display:flex; align-items:center; justify-content:center;
        }
        .sikkim-stage svg.map{
          width:100%; height:100%; max-width:900px; max-height:820px; display:block;
        }

        .sikkim-stage .compass{
          position:absolute; top:110px; right:40px; z-index:10;
          width:64px; height:64px; border-radius:50%;
          border:1px solid rgba(26,31,27,.15);
          background:rgba(255,255,255,.6); backdrop-filter:blur(6px);
          display:flex; align-items:center; justify-content:center;
          font-family:'Fraunces',serif; font-size:11px; color:var(--sk-ink);
        }
        .sikkim-stage .compass::before{
          content:""; position:absolute; left:50%; top:8px; width:2px; height:22px;
          background:linear-gradient(to bottom, var(--sk-accent) 0%, var(--sk-accent) 50%, var(--sk-ink2) 50%, var(--sk-ink2) 100%);
          transform: translateX(-50%); border-radius:2px;
        }
        .sikkim-stage .compass .n{ position:absolute; top:38px; font-weight:600; }

        .sikkim-stage .legend{
          position:absolute; bottom:44px; right:40px; z-index:10;
          background:rgba(255,255,255,.7); backdrop-filter:blur(8px);
          border:1px solid rgba(26,31,27,.08);
          border-radius:14px; padding:14px 16px;
          font-family:'JetBrains Mono',monospace; font-size:10.5px;
          color:var(--sk-ink2); letter-spacing:.04em; min-width:210px;
        }
        .sikkim-stage .legend-title{
          font-family:'Inter'; font-weight:600; font-size:11px; text-transform:uppercase;
          letter-spacing:.1em; color:var(--sk-ink); margin-bottom:10px;
          display:flex; justify-content:space-between;
        }
        .sikkim-stage .legend-row{ display:flex; align-items:center; gap:10px; padding:3px 0; }
        .sikkim-stage .legend-dot{ width:10px; height:10px; border-radius:50%; }

        .sikkim-stage .card{
          position:absolute; z-index:15;
          background:var(--sk-card); border:1px solid rgba(26,31,27,.08);
          border-radius:14px; padding:12px 14px;
          box-shadow:0 12px 40px -12px rgba(26,31,27,.25), 0 2px 6px -2px rgba(26,31,27,.08);
          min-width:200px; max-width:240px;
          transition: transform .25s ease, opacity .25s ease;
        }
        .sikkim-stage .card-head{ display:flex; align-items:center; gap:8px; margin-bottom:6px; }
        .sikkim-stage .card-head .tag{
          font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.1em;
          text-transform:uppercase; color:var(--sk-muted);
        }
        .sikkim-stage .card-head .venture-type{
          margin-left:auto; font-family:'JetBrains Mono',monospace; font-size:9px;
          padding:3px 6px; border-radius:4px; background:var(--sk-bg2); color:var(--sk-ink2);
        }
        .sikkim-stage .card-title{
          font-family:'Fraunces',serif; font-size:15px; font-weight:500;
          line-height:1.25; margin-bottom:4px; color:var(--sk-ink);
        }
        .sikkim-stage .card-meta{
          font-size:11px; color:var(--sk-ink2); display:flex; gap:10px; align-items:center;
        }
        .sikkim-stage .card-meta .sep{ width:3px; height:3px; border-radius:50%; background:var(--sk-muted); }
        .sikkim-stage .spark{ margin-top:8px; height:22px; display:flex; align-items:flex-end; gap:2px; }
        .sikkim-stage .spark i{ display:block; width:4px; background:var(--sk-accent); border-radius:1px; opacity:.8; }

        .sikkim-stage .idea-chip{
          position:absolute; z-index:14; pointer-events:none;
          padding:6px 10px; border-radius:999px;
          background:rgba(255,255,255,.92); backdrop-filter:blur(4px);
          border:1px solid rgba(26,31,27,.08);
          font-size:11px; font-weight:500; color:var(--sk-ink);
          display:flex; align-items:center; gap:6px;
          box-shadow:0 6px 18px -4px rgba(26,31,27,.2);
          white-space:nowrap;
          transform: translate(-50%, -50%);
        }
        .sikkim-stage .idea-chip .chip-dot{
          width:6px; height:6px; border-radius:50%; background:var(--sk-accent);
        }

        .sikkim-stage .district-label{
          font-family:'Inter',sans-serif; font-weight:600; font-size:12px;
          fill:var(--sk-ink); letter-spacing:-.01em; pointer-events:none;
        }
        .sikkim-stage .district-sub{
          font-family:'JetBrains Mono',monospace; font-size:9px;
          fill:var(--sk-muted); letter-spacing:.08em; pointer-events:none;
        }

        @media (max-width: 900px) {
          .sikkim-stage .hero-copy{ left:24px; top:96px; max-width:80vw; }
          .sikkim-stage h1.sk-h1{ font-size:42px; }
          .sikkim-stage .map-wrap{ width:100%; opacity:.55; }
          .sikkim-stage .stats{ left:24px; }
          .sikkim-stage .compass{ display:none; }
          .sikkim-stage .legend{ display:none; }
          .sikkim-stage .nav{ padding:18px 22px; }
          .sikkim-stage .nav-links{ display:none; }
        }
      `}</style>

      <div className="sikkim-stage" ref={stageRef}>
        <div className="grid-bg" />

        <div className="nav">
          <div className="brand">
            <img
              src="/Sikkim Rise Logo Only.png"
              alt="Sikkim RISE"
              className="brand-logo"
            />
            <div className="brand-text">
              <div className="brand-name">Sikkim RISE</div>
              <div className="brand-tag">Realising Ideas · Shaping Entrepreneurship</div>
            </div>
          </div>
          <NavigationMenu viewport={false} className="nav-menu">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ecosystem</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-1 md:w-[420px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#districts" className="flex-row items-start gap-3">
                          <Mountain className="size-4 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Six Districts</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Mangan, Gyalshing, Soreng, Namchi, Gangtok, Pakyong.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#sectors" className="flex-row items-start gap-3">
                          <Globe className="size-4 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Sectors & Themes</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Clean energy, agri, tourism, fintech, logistics.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="md:col-span-2">
                      <NavigationMenuLink asChild>
                        <Link to="/#partners" className="flex-row items-start gap-3">
                          <Building2 className="size-4 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Partners</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Government, incubators, and university partners.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Founders</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/register" className="flex-row items-center gap-3">
                          <Zap className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Apply / Register</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Join the founder network.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#programs" className="flex-row items-center gap-3">
                          <Users className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Programs</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Cohorts, mentorship, and residencies.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#stories" className="flex-row items-center gap-3">
                          <Heart className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Founder Stories</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              How ventures take root in the hills.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Capital</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#funds" className="flex-row items-center gap-3">
                          <Coins className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Funds & Grants</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              State-backed and private capital pools.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#investors" className="flex-row items-center gap-3">
                          <TrendingUp className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Investor Network</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Angels and funds active in Sikkim.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#metrics" className="flex-row items-center gap-3">
                          <BarChart3 className="size-4 shrink-0" />
                          <div>
                            <div className="text-sm font-medium leading-none">Capital Flows</div>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                              Live snapshot of deals across districts.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/#about" className="flex-row items-center gap-2">
                    <Info className="size-4" />
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button className="nav-cta" onClick={() => navigate("/register")}>
            Apply &nbsp;→
          </button>
        </div>

        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />Sikkim · Founder Network · 2026
          </span>
          <h1 className="sk-h1">
            Where ideas flow between <em>mountain towns</em>.
          </h1>
          <p className="sub">
            Follow startup capital, talent, and ventures as they move between Sikkim's six
            districts — from Mangan's hydro-labs to Namchi's agri co-operatives.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => navigate("/register")}>
              Explore the map →
            </button>
            <button className="btn btn-ghost">Watch founder stories</button>
          </div>
        </div>

        {/* <div className="stats">
          <div className="stat">
            <div className="stat-num">142</div>
            <div className="stat-lbl">Active ventures</div>
          </div>
          <div className="stat">
            <div className="stat-num">6</div>
            <div className="stat-lbl">Districts linked</div>
          </div>
          <div className="stat">
            <div className="stat-num">₹ 38 Cr</div>
            <div className="stat-lbl">Seed deployed</div>
          </div>
        </div> */}

        {/* <div className="legend">
          <div className="legend-title">
            <span>Flow legend</span>
          </div>
          <div className="legend-row">
            <span className="legend-dot" style={{ background: "var(--sk-accent)" }} />
            Capital movement
          </div>
          <div className="legend-row">
            <span className="legend-dot" style={{ background: "var(--sk-accent-2)" }} />
            Talent pipeline
          </div>
          <div className="legend-row">
            <span className="legend-dot" style={{ background: "var(--sk-accent-3)" }} />
            Venture spin-outs
          </div>
        </div> */}

        <div className="map-wrap">
          <div className="map-inner">
            <svg
              ref={svgRef}
              className="map"
              viewBox="80 35 445 650"
              preserveAspectRatio="xMidYMid meet"
              overflow="hidden"
            >
              <defs>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="bigGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="flow1" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.75 0.18 145)" stopOpacity="0" />
                  <stop offset="50%" stopColor="oklch(0.75 0.18 145)" stopOpacity="1" />
                  <stop offset="100%" stopColor="oklch(0.75 0.18 145)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flow2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.78 0.15 55)" stopOpacity="0" />
                  <stop offset="50%" stopColor="oklch(0.78 0.15 55)" stopOpacity="1" />
                  <stop offset="100%" stopColor="oklch(0.78 0.15 55)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flow3" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.72 0.16 255)" stopOpacity="0" />
                  <stop offset="50%" stopColor="oklch(0.72 0.16 255)" stopOpacity="1" />
                  <stop offset="100%" stopColor="oklch(0.72 0.16 255)" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g
                opacity=".55"
                fontFamily="JetBrains Mono"
                fontSize="10"
                fill="#8a8f85"
                letterSpacing="2"
              >
                <text x="36" y="420" textAnchor="start" transform="rotate(-90 36 420)">
                  NEPAL
                </text>
                <text x="568" y="360" textAnchor="end" transform="rotate(90 568 360)">
                  BHUTAN
                </text>
                <text x="300" y="705" textAnchor="middle">
                  WEST BENGAL · INDIA
                </text>
              </g>

              <image
                href="/sikkim-map.jpg"
                x="90"
                y="45"
                width="430"
                height="640"
                preserveAspectRatio="xMidYMid meet"
                style={{ mixBlendMode: "multiply", opacity: 0.55 }}
              />

              <g id="flowPaths" strokeLinecap="round" fill="none" filter="url(#softGlow)">
                <path id="pMG" d="M 326 358 Q 348 385, 370 413" stroke="url(#flow1)" strokeWidth="2.5" />
                <path id="pGP" d="M 370 413 Q 356 453, 342 493" stroke="url(#flow2)" strokeWidth="2.2" />
                <path id="pPN" d="M 342 493 Q 296 510, 253 525" stroke="url(#flow3)" strokeWidth="2.2" />
                <path id="pNS" d="M 253 525 Q 220 520, 187 512" stroke="url(#flow1)" strokeWidth="2" />
                <path id="pSG" d="M 187 512 Q 190 483, 195 454" stroke="url(#flow2)" strokeWidth="2" />
                <path id="pGyM" d="M 195 454 Q 250 406, 326 358" stroke="url(#flow3)" strokeWidth="2" />
                <path
                  id="pGyG"
                  d="M 195 454 Q 282 433, 370 413"
                  stroke="url(#flow1)"
                  strokeWidth="1.6"
                  strokeDasharray="2 4"
                  opacity=".7"
                />
                <path
                  id="pNG"
                  d="M 253 525 Q 312 470, 370 413"
                  stroke="url(#flow2)"
                  strokeWidth="1.6"
                  strokeDasharray="2 4"
                  opacity=".7"
                />
              </g>

              <g id="particles" filter="url(#bigGlow)">
                <circle r="3.5" fill="oklch(0.85 0.2 145)">
                  <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pMG" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="oklch(0.85 0.2 145)">
                  <animateMotion dur="4.2s" repeatCount="indefinite" begin="1.5s" rotate="auto">
                    <mpath href="#pMG" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="oklch(0.82 0.17 55)">
                  <animateMotion dur="3.6s" repeatCount="indefinite">
                    <mpath href="#pGP" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="oklch(0.82 0.17 55)">
                  <animateMotion dur="3.6s" repeatCount="indefinite" begin="1.8s">
                    <mpath href="#pGP" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="oklch(0.78 0.17 255)">
                  <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#pPN" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="oklch(0.78 0.17 255)">
                  <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#pPN" />
                  </animateMotion>
                </circle>
                <circle r="2.8" fill="oklch(0.85 0.2 145)">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#pNS" />
                  </animateMotion>
                </circle>
                <circle r="2.8" fill="oklch(0.82 0.17 55)">
                  <animateMotion dur="4.2s" repeatCount="indefinite" begin="1s">
                    <mpath href="#pSG" />
                  </animateMotion>
                </circle>
                <circle r="2.8" fill="oklch(0.78 0.17 255)">
                  <animateMotion dur="5.2s" repeatCount="indefinite">
                    <mpath href="#pGyM" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="oklch(0.85 0.2 145)" opacity=".8">
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#pGyG" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="oklch(0.82 0.17 55)" opacity=".8">
                  <animateMotion dur="6.5s" repeatCount="indefinite" begin="2s">
                    <mpath href="#pNG" />
                  </animateMotion>
                </circle>
              </g>

              <g transform="translate(370,413)">
                <circle r="14" fill="none" stroke="oklch(0.72 0.15 55)" strokeWidth="1" opacity=".4">
                  <animate attributeName="r" values="10;22;10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".5;0;.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="6" fill="oklch(0.72 0.15 55)" />
                <circle r="2.5" fill="#fff" />
              </g>

              <g id="hubs" fontFamily="Inter" fontSize="11">
                {(Object.entries(DISTRICTS) as [DistrictKey, typeof DISTRICTS[DistrictKey]][])
                  .filter(([k]) => k !== "gangtok")
                  .map(([key, d]) => (
                    <g key={key} data-hub={key} transform={`translate(${d.x},${d.y})`}>
                      <circle r="6" fill="#fff" stroke="#1a1f1b" strokeWidth="1.5" />
                      <circle r="2.5" fill="oklch(0.68 0.15 155)" />
                    </g>
                  ))}
              </g>

              <g>
                <text className="district-label" x="242" y="354" textAnchor="end">Mangan</text>
                <text className="district-sub" x="242" y="368" textAnchor="end">NORTH · HYDRO</text>

                <text className="district-label" x="142" y="450" textAnchor="start">Gyalshing</text>
                <text className="district-sub" x="142" y="464" textAnchor="start">WEST · TOURISM</text>

                <text className="district-label" x="142" y="508" textAnchor="start">Soreng</text>
                <text className="district-sub" x="142" y="522" textAnchor="start">SW · AGRI</text>

                <text className="district-label" x="263" y="540">Namchi</text>
                <text className="district-sub" x="263" y="554">SOUTH · FOOD</text>

                <text className="district-label" x="380" y="409">Gangtok</text>
                <text className="district-sub" x="380" y="423">CAPITAL · FINTECH</text>

                <text className="district-label" x="352" y="480">Pakyong</text>
                <text className="district-sub" x="352" y="494">EAST · LOGISTICS</text>
              </g>
            </svg>
          </div>
        </div>

        {CARDS.map((c, i) => (
          <div
            key={i}
            className="card"
            style={{ left: c.left, top: c.top }}
          >
            <div className="card-head">
              <span className="tag">
                {DISTRICTS[c.idea.from].name.toUpperCase()} → {DISTRICTS[c.idea.to].name.toUpperCase()}
              </span>
              <span className="venture-type">{c.idea.type}</span>
            </div>
            <div className="card-title">{c.idea.label}</div>
            <div className="card-meta">
              <span>{c.idea.amt}</span>
              <span className="sep" />
              <span>Active · Wk 14</span>
            </div>
            <div className="spark">
              {c.idea.spark.map((v, j) => (
                <i key={j} style={{ height: `${v * 1.6}px` }} />
              ))}
            </div>
          </div>
        ))}

        {IDEAS.map((idea, i) => (
          <div
            key={i}
            className="idea-chip"
            ref={(el) => {
              chipRefs.current[i] = el
            }}
          >
            <span className="chip-dot" />
            {idea.label}
          </div>
        ))}
      </div>

      {/* ─────────── Below-the-fold sections ─────────── */}
      <div className="bg-background text-foreground">
        {/* Platform Highlights (image cards) */}
        <section className="border-t border-border/30 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <FeatureCards />
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <FeatureIcons />
            </div>

            <div className="mb-16 text-center">
              <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary sm:text-5xl">
                Everything You Need
              </h2>
              <p className="font-manrope text-lg text-foreground/70">
                Spark simplifies every aspect of finding and managing facilities for your startup
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Discovery Platform
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Browse verified facilities tailored to your startup's specific needs and location.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Smart Booking
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Seamless reservation system with flexible terms and instant confirmation.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Partner Network
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Connect with institutional partners and growing portfolio of facilities.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Growth Analytics
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Track your facility usage and optimize your startup's resource allocation.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Community Support
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Access mentorship, networking events, and peer support from the community.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  Instant Integration
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  Quick onboarding with intuitive dashboards for startups and facility partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary sm:text-5xl">
                How It Works
              </h2>
              <p className="font-manrope text-lg text-foreground/70">
                Get started in just three simple steps
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Create Your Profile",
                  description: "Sign up and tell us about your startup's needs and goals.",
                },
                {
                  number: "02",
                  title: "Explore Facilities",
                  description: "Browse our curated selection of facilities matching your requirements.",
                },
                {
                  number: "03",
                  title: "Book & Grow",
                  description: "Reserve your space and start scaling your startup with confidence.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70">
                    <span className="font-plus-jakarta-sans text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                  {index < 2 && (
                    <div className="absolute -right-4 top-8 hidden text-2xl text-secondary/30 sm:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Orbit */}
        <StackFeatureSection />

        {/* CTA */}
        <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 text-center sm:p-16">
              <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
                Ready to Scale?
              </h2>
              <p className="font-manrope mb-8 text-lg text-primary-foreground/90">
                Join hundreds of startups already using Spark to grow their business
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Button
                  size="lg"
                  onClick={() => navigate("/register")}
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 bg-foreground/5 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                    <span className="text-sm font-bold text-primary-foreground">S</span>
                  </div>
                  <span className="font-semibold text-primary">Spark</span>
                </div>
                <p className="font-manrope text-sm text-foreground/70">
                  Empowering startups with the facilities they need to grow.
                </p>
              </div>
              <div>
                <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Product</h4>
                <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                  <li><button className="transition-colors hover:text-foreground">Features</button></li>
                  <li><button className="transition-colors hover:text-foreground">Pricing</button></li>
                  <li><button className="transition-colors hover:text-foreground">Security</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Company</h4>
                <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                  <li><button className="transition-colors hover:text-foreground">About</button></li>
                  <li><button className="transition-colors hover:text-foreground">Blog</button></li>
                  <li><button className="transition-colors hover:text-foreground">Contact</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Legal</h4>
                <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                  <li><button className="transition-colors hover:text-foreground">Privacy</button></li>
                  <li><button className="transition-colors hover:text-foreground">Terms</button></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-border/30 pt-8">
              <p className="font-manrope text-center text-sm text-foreground/60">
                © 2026 Spark. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
