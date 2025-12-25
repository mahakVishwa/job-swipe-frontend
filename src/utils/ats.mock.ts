export const calculateATS = (
  resumeText: string,
  keywords: string[]
) => {
  const resumeWords = resumeText.toLowerCase().split(" ");
  const matched = keywords.filter((k) =>
    resumeWords.includes(k.toLowerCase())
  );

  const score = Math.round(
    (matched.length / keywords.length) * 100
  );

  return {
    score,
    matchedKeywords: matched,
    missingKeywords: keywords.filter((k) => !matched.includes(k)),
  };
};
