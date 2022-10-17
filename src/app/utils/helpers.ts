export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // read file
    reader.readAsDataURL(file);
    // retrieve the result
    reader.onload = () => resolve(reader.result);
    // manage error
    reader.onerror = (error) => reject(error);
  })
}

export function parseErrorsFromAPI(response: any): string[] {
  const result: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      result.push(response.error);
    } else {
      const mapErrors = response.error.errors;
      const entries = Object.entries(mapErrors);
      entries.forEach((array: any[]) => {
        const field = array[0];
        array[1].forEach(errorMessage => {
          result.push(`${field}: ${errorMessage}`);
        });
      })
    }
  }

  return result;
}

/**
 * Format Date
 */
export function toDateFormat(date: Date) {
  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [
    {value: month},,
    {value: day},,
    {value: year}
  ] = formatter.formatToParts(date);

  return `${year}-${month}-${day}`;
}

/**
 * Number format
 */
export function toNumberFormat(number: number) {
  const formatter = new Intl.NumberFormat('en', {
    maximumSignificantDigits: 3
  });

  return formatter.format(number);
}

