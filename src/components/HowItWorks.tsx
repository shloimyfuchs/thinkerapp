import { Play, FileText, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Play,
    title: "Watch Content",
    description: "Consume your favorite online content as usual.",
  },
  {
    icon: Brain,
    title: "AI Processing",
    description: "Our AI automatically analyzes and extracts key insights.",
  },
  {
    icon: FileText,
    title: "Smart Summary",
    description: "Get concise summaries and actionable takeaways.",
  },
  {
    icon: CheckCircle,
    title: "Review & Retain",
    description: "Easily revisit and remember what you've learned.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Four simple steps to enhance your learning experience
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-background p-6 rounded-2xl animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="absolute top-12 right-4 text-4xl font-bold text-primary/10">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};