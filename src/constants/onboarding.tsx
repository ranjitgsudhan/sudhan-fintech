const OnboardData: { step: number; journey: string }[] = [
  {
    step: 1,
    journey: "Credit Co Operative Soc approaches Sudhan"
  },
  {
    step: 2,
    journey: "After Due Diligence of society, Sudhan onboards society"
  },
  {
    step: 3,
    journey: "Sudhan deploys product, process and tech at society"
  },
  {
    step: 4,
    journey: "Society specific Multi level Marketing & Advertisement Campaign"
  },
  {
    step: 5,
    journey: "Deployment of Operation and Marketing Team on ground"
  },
  {
    step: 6,
    journey: "Sourcing of Customer through Marketing and Sales Personnel"
  },
  {
    step: 7,
    journey: "Customer on boarding at societies branches with help of operation team support"
  },
  {
    step: 8,
    journey: "After KYC Completion, Gold is verified"
  },
  {
    step: 9,
    journey: "Credit Co Operative Soc approaches Sudhan"
  }
];

export const getOnboardData = () => {
  return OnboardData;
};


 export type OnboardingStep = {
  step: number;
  journey: string;
    };