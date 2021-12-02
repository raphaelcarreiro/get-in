export function formatPhoneNumber(str: string): string {
  const cleaned = str.replace(/\D/g, '');

  const masks = {
    13: cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/),
    12: cleaned.match(/^(\d{2})(\d{2})(\d{4})(\d{4})$/),
    11: cleaned.match(/^(\d{2})(\d{5})(\d{4})$/),
    10: cleaned.match(/^(\d{2})(\d{4})(\d{4})$/),
  };

  const length = cleaned.length as keyof typeof masks;

  const formatters = {
    13: (match: RegExpMatchArray) => `+${match[1]} ${match[2]} ${match[3]}-${match[4]}`,
    12: (match: RegExpMatchArray) => `+${match[1]} ${match[2]} ${match[3]}-${match[4]}`,
    11: (match: RegExpMatchArray) => `${match[1]} ${match[2]}-${match[3]}`,
    10: (match: RegExpMatchArray) => `${match[1]} ${match[2]}-${match[3]}`,
  };

  const match = masks[length];

  if (match) return formatters[length](match);

  return str;
}
