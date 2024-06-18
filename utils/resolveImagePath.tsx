export default function resolveImagePath(relativePath: string): string {
  if (relativePath.startsWith('./')) {
    return relativePath.replace('./', '/'); 
  }
  return relativePath;
}
