export const containsLao = (text?: string) => {
  if (!text) return false;
  const laoRegex = /[\u0E80-\u0EFF]/;
  return laoRegex.test(text);
};
export function generateRandomId(length?: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  for (let i = 0; i < (length || 8); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
}
export const getFileFromDataUrl = (url: string) => {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const fileName = pathname.substring(pathname.lastIndexOf('/') + 1);
  return fileName;
};
export const isFileImage = (url: string) => {
  const fileName = getFileFromDataUrl(url);
  return /\.(jpg|jpeg|png|webp)$/.test(fileName);
};
export const getEnvMode = () => {
  const mode = ((import.meta.env.MODE || '').split('.')[0] || '') as EnvMode;
  if (!mode) return 'development';
  switch (mode) {
    case 'staging':
      return 'staging';
    case 'production':
      return 'production';
    default:
      return 'development';
  }
};
export const checkEnvMode = (modeType: EnvMode): boolean => {
  const mode = getEnvMode();
  return mode === modeType;
};
