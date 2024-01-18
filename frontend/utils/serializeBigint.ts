export const serializeBigint = (value) => {
  const string = JSON.stringify(
    value,
    (key, val) => (typeof val === "bigint" ? Number(val) : val),
    2,
  )
  const obj = JSON.parse(string)
  return obj
}
