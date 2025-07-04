

const mileStoneData = [
  { date: "Dec 2022", aum: 0 },
  { date: "May 2023", aum: 250 },
  { date: "Aug 2023", aum: 300 },
  { date: "Dec 2023", aum: 350 },
  { date: "Jun 2024", aum: 400 },
  { date: "Nov 2024", aum: 450 },
  { date: "Mar 2025", aum: 500 },
  { date: "Jun 2025", aum: 525 },
];

export const getMileStoneData=()=>{
    return mileStoneData;
}

export type MileStoneStructure = {
  date: string;
  aum: number;
};