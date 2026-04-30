import { BarChart3, Shield, FileText } from "lucide-react";

/**
 * FeatureCards – image-based showcase of three platform capabilities.
 */
export function FeatureCards() {
  return (
    <section className="w-full py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap');
      `}</style>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
          Platform Highlights
        </h2>
        <p className="text-sm text-slate-500 mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          Everything you need to discover, book, and manage facilities — all in one place.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-10">
        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl w-full object-cover h-52"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80"
            alt="Analytics dashboard"
          />
          <h3
            className="text-base font-semibold text-slate-700 mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Usage Analytics
          </h3>
          <p className="text-sm text-slate-600 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            Track facility usage trends and make data-driven decisions for your startup.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl w-full object-cover h-52"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&q=80"
            alt="Team collaboration"
          />
          <h3
            className="text-base font-semibold text-slate-700 mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Partner Network
          </h3>
          <p className="text-sm text-slate-600 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            Connect with a curated network of facility providers and co-working spaces.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl w-full object-cover h-52"
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=640&q=80"
            alt="Smart booking"
          />
          <h3
            className="text-base font-semibold text-slate-700 mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Smart Booking
          </h3>
          <p className="text-sm text-slate-600 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            Flexible reservation workflows with instant confirmation and invoice generation.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * FeatureIcons – icon-grid showcasing three core platform guarantees.
 */
export function FeatureIcons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
      <div
        className="size-[520px] top-0 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"
        aria-hidden
      />

      {/* Card 1 */}
      <div
        className="flex flex-col items-center justify-center max-w-80 mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="p-6 aspect-square bg-violet-100 rounded-full">
          <BarChart3 className="w-7 h-7 text-violet-700" />
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">Real-Time Analytics</h3>
          <p className="text-sm text-slate-600">
            Get instant insights into your facility usage with live dashboards.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-col items-center justify-center max-w-80 mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="p-6 aspect-square bg-green-100 rounded-full">
          <Shield className="w-7 h-7 text-green-700" />
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">Bank-Grade Security</h3>
          <p className="text-sm text-slate-600">
            End-to-end encryption, 2FA, and full compliance with GDPR standards.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="flex flex-col items-center justify-center max-w-80 mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="p-6 aspect-square bg-orange-100 rounded-full">
          <FileText className="w-7 h-7 text-orange-600" />
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">Customizable Reports</h3>
          <p className="text-sm text-slate-600">
            Export professional, audit-ready reports for tax or internal review.
          </p>
        </div>
      </div>
    </div>
  );
}
