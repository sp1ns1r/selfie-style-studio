
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
    <div className="py-8 mb-4">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Connector line */}
            {index > 0 && (
              <div 
                className={`absolute top-4 right-1/2 w-full h-1 -translate-y-1/2 
                  ${steps[index-1].status !== 'upcoming' ? 'bg-gradient-to-r from-studio-purple to-studio-blue' : 'bg-gray-200'}`}
                style={{ width: 'calc(200% - 2rem)', right: '50%', marginRight: '1rem' }}
              />
            )}
            
            {/* Circle */}
            <div 
              className={`z-10 step-indicator flex items-center justify-center w-8 h-8 rounded-full transition-all
                ${step.status === 'current' ? 'bg-gradient-to-r from-studio-purple to-studio-blue shadow-md' : ''}
                ${step.status === 'complete' ? 'bg-studio-purple/10 text-studio-purple border border-studio-purple' : ''}
                ${step.status === 'upcoming' ? 'bg-gray-100 text-gray-400 border border-gray-200' : ''}
              `}
            >
              {step.status === 'complete' ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className={`text-sm font-medium ${step.status === 'current' ? 'text-white' : ''}`}>
                  {step.id}
                </span>
              )}
            </div>
            
            {/* Label */}
            <span className={`text-xs font-medium mt-2 whitespace-nowrap
              ${step.status === 'current' ? 'text-studio-purple' : ''}
              ${step.status === 'upcoming' ? 'text-gray-400' : ''}
              ${step.status === 'complete' ? 'text-gray-700' : ''}
            `}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
