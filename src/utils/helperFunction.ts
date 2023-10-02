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
      flex:
        key === "address" || key === "territoryIDs" || key === "shipAddress"
          ? 2
          : 1,
      valueGetter: (params: any) => {
        const result: string[] = [];
        if (
          key === "address" ||
          key === "territoryIDs" ||
          key === "shipAddress"
        ) {
          checkKeysUnderObject(params.row[key], result);
          return result.join(", ");
        }
        return params.row[key];
      },
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

export const checkKeysUnderObject = (
  obj: { [x: string]: string },
  result: string[]
) => {
  for (let key in obj) {
    if (key) {
      // push the value to the result array only if key exists
      result.push(key + ": " + obj[key]);
    }
  }
};
