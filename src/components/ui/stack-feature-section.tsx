import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook,
} from "react-icons/si";

const iconConfigs: { Icon: React.ElementType | null; color: string; img?: string }[] = [
  { Icon: FaReact,      color: "#61DAFB" },
  { Icon: FaAws,        color: "#FF9900" },
  { Icon: FaDocker,     color: "#2496ED" },
  { Icon: FaNodeJs,     color: "#339933" },
  { Icon: SiNextdotjs,  color: "#555555" },
  { Icon: SiVercel,     color: "#555555" },
  { Icon: SiRedux,      color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub,     color: "#444444" },
  { Icon: FaTwitter,    color: "#1DA1F2" },
  { Icon: FaLinkedin,   color: "#0077B5" },
  { Icon: FaInstagram,  color: "#E1306C" },
  { Icon: FaGoogle,     color: "#DB4437" },
  { Icon: FaApple,      color: "#555555" },
  { Icon: SiFacebook,   color: "#1877F2" },
];

export default function StackFeatureSection() {
  const navigate = useNavigate();
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div
          className="relative flex items-center justify-between h-[30rem] border border-border bg-card overflow-hidden rounded-3xl pl-10
                     shadow-[0px_32px_64px_rgba(24,15,44,0.08)]"
        >
          {/* Left side: Heading and Text */}
          <div className="w-1/2 z-10 pr-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5">
              <span className="text-xs font-semibold tracking-wide text-secondary uppercase">
                Built on Modern Tech
              </span>
            </div>

            <h2 className="font-plus-jakarta-sans text-4xl sm:text-5xl font-bold mb-4 text-primary leading-tight">
              Powered by a{" "}
              <span className="text-secondary">robust stack</span>
            </h2>

            <p className="font-manrope text-foreground/70 mb-6 max-w-md leading-relaxed">
              Spark is engineered on battle-tested, cloud-native technologies —
              so you can focus on building your startup while we handle the rest.
            </p>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary text-white"
              >
                Get Started
              </Button>
              <Button variant="outline" className="border-border hover:border-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side: Orbit animation */}
          <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
            <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">

              {/* Center glow */}
              <div
                className="absolute w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #994616, transparent)" }}
              />

              {/* Center circle */}
              <div className="w-20 h-20 rounded-full bg-card border border-border shadow-lg flex items-center justify-center z-10">
                <FaReact className="w-10 h-10 text-sky-400" />
              </div>

              {/* Orbits */}
              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
                const angleStep = (2 * Math.PI) / iconsPerOrbit;
                const duration = 14 + orbitIdx * 7;

                return (
                  <div
                    key={orbitIdx}
                    className="absolute rounded-full border border-dashed border-border/60"
                    style={{
                      width: size,
                      height: size,
                      animation: `orbit-spin ${duration}s linear infinite`,
                    }}
                  >
                    {iconConfigs
                      .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                      .map((cfg, iconIdx) => {
                        const angle = iconIdx * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);

                        return (
                          <div
                            key={iconIdx}
                            className="absolute bg-card border border-border/50 rounded-full p-1.5 shadow-md"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            {cfg.Icon && (
                              <cfg.Icon
                                className="w-7 h-7"
                                style={{ color: cfg.color }}
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
