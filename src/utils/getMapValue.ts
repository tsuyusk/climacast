export default function getMapValue(object: object, key: string | number) {
  return object[key as keyof typeof object];
}
