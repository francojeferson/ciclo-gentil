import { useState, useEffect } from "react";
import { calculatePhase } from "../utils/calculatePhase";

const useCyclePhase = (lastPeriod, cycleLength) => {
  const [phase, setPhase] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    const { phase, daysRemaining } = calculatePhase(lastPeriod, cycleLength);

    setPhase(phase);
    setDaysRemaining(daysRemaining);
  }, [lastPeriod, cycleLength]);

  return { phase, daysRemaining };
};

export default useCyclePhase;
