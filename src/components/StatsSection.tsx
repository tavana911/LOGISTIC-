import { useState, useRef, useEffect } from "react";

const stats = [
  { value: 15000, suffix: "+", label: "Shipments Delivered" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 99, suffix: "%", label: "On-Time Rate" },
  { value: 24, suffix: "/7", label: "Support" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const dur = 1500;
    const steps = 40;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(id);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

const StatsSection = () => (
  <section className="bg-primary py-16">
    <div className="container-main">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-primary-foreground/70 mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

