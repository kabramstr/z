import React from 'react';
import { Users, Calendar, Target } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  goal: number;
  donors: number;
  daysLeft: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  current, 
  goal, 
  donors, 
  daysLeft 
}) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6 reveal">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <span className="text-primary-700 font-semibold">{formatCurrency(current)}</span>
            <span className="text-primary-700 mx-2">of</span>
            <span className="text-primary-900 font-semibold">{formatCurrency(goal)}</span>
            <span className="text-primary-900 ml-1">raised</span>
          </div>
          <div className="font-semibold text-primary-900">{percentage}%</div>
        </div>
        
        <div className="h-4 bg-primary-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-700 progress-bar rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-500 rounded-lg">
              <Users className="h-6 w-6 text-primary-900" />
            </div>
            <div>
              <p className="text-primary-900 font-semibold text-xl">{donors}</p>
              <p className="text-primary-700">Generous Donors</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-500 rounded-lg">
              <Calendar className="h-6 w-6 text-primary-900" />
            </div>
            <div>
              <p className="text-primary-900 font-semibold text-xl">{daysLeft}</p>
              <p className="text-primary-700">Days Remaining</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-500 rounded-lg">
              <Target className="h-6 w-6 text-primary-900" />
            </div>
            <div>
              <p className="text-primary-900 font-semibold text-xl">{formatCurrency(goal - current)}</p>
              <p className="text-primary-700">Still Needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;