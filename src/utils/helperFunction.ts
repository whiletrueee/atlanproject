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
      flex: 1,
    };
    columnArray.push(mock);
  }
  return columnArray;
}

export function getRowId(data: any): string {
  if (data?.customerID) return "customerID";
  if (data?.employeeID) return "employeeID";
  if (data?.orderID) return "orderID";
  return "id";
}
