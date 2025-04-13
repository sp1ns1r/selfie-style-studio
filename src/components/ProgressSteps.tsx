
import { Check } from "lucide-react";

export interface Step {
  id: number;
  name: string;
  status: "upcoming" | "current" | "complete";
}

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center gap-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div 
              className={`step-indicator ${step.status === 'current' ? 'active' : ''} ${step.status === 'complete' ? 'completed' : ''}`}
            >
              {step.status === 'complete' ? (
                <Check className="h-5 w-5" />
              ) : (
                step.id
              )}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-700 mt-2">
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`step-line ${steps[index + 1].status !== 'upcoming' ? 'active' : ''} mx-2 w-24`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
