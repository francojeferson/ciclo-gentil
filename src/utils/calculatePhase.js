export const calculatePhase = (lastPeriod, cycleLength) => {
  if (!lastPeriod || !cycleLength) {
    return { phase: "", daysRemaining: null };
  }

  const periodDate = new Date(lastPeriod);
  const today = new Date();

  // normalize dates to avoid time discrepancies
  periodDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - periodDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const cycleDay = ((diffDays % cycleLength) + cycleLength) % cycleLength; // handles negative values

  let phase = "";
  let daysRemaining = 0;

  if (cycleDay < 5) {
    phase = "menstrual";
    daysRemaining = 5 - cycleDay;
  } else if (cycleDay < 13) {
    phase = "follicular";
    daysRemaining = 13 - cycleDay;
  } else if (cycleDay < 16) {
    phase = "ovulatory";
    daysRemaining = 16 - cycleDay;
  } else {
    phase = "luteal";
    daysRemaining = cycleLength - cycleDay;
  }

  return { phase, daysRemaining };
};
