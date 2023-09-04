// todo: do this with Typescript?

const themeKey = 'global-theme-mode';

window.globalGetDeviceTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  else return 'light';
};

window.globalGetLSTheme = () => {
  const lsTheme = localStorage.getItem(themeKey);
  if (lsTheme && (lsTheme === 'dark' || lsTheme === 'light')) return lsTheme;
  return null;
};

window.globalGetInitialTheme = () => {
  const lsTheme = globalGetLSTheme();
  if (lsTheme === 'dark' || lsTheme === 'light') return lsTheme;
  return 'device';
};

window.globalSetDarkTheme = () => {
  document.documentElement.classList.add('dark');
};

window.globalSetLightTheme = () => {
  document.documentElement.classList.remove('dark');
};

window.globalSetDeviceTheme = () => {
  const deviceTheme = globalGetDeviceTheme();
  if (deviceTheme === 'dark') globalSetDarkTheme();
  else globalSetLightTheme();
};

window.globalSetLSLightTheme = () => {
  window.localStorage.setItem(themeKey, 'light');
  window.globalSetLightTheme();
};

window.globalSetLSDarkTheme = () => {
  window.localStorage.setItem(themeKey, 'dark');
  window.globalSetDarkTheme();
};

window.globalSetLSDeviceTheme = () => {
  window.localStorage.removeItem(themeKey);
  globalSetDeviceTheme();
};

const initialTheme = globalGetInitialTheme();
if (initialTheme === 'dark') globalSetDarkTheme();
else if (initialTheme === 'light') globalSetLightTheme();
else globalSetDeviceTheme();
