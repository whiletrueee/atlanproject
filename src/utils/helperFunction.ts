function convertCamelToSpaceCapital(input: string): string {
  // Add a space between a lowercase letter followed by an uppercase letter
  let spacedString = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize the first letter of the result
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}

export function getColumnArray(data: any) {
  const columnArray: any[] = [];
  for (const key in data) {
    const mock = {
      field: key,
      headerName: convertCamelToSpaceCapital(key),
      width: 90,
    };
    columnArray.push(mock);
  }
  return columnArray;
}
