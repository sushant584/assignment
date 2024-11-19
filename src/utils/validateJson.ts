

export const validateJSONSchema = (json: string): string | null => {
  try {
    const parsed = JSON.parse(json);
    if (!parsed.fields || !Array.isArray(parsed.fields)) {
      return "JSON must include a 'fields' array.";
    }
    return null;
  } catch (err) {
    return "Invalid JSON format.";
  }
};
