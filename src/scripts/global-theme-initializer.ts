// todo: do this with Typescript?

// const themeKey = 'global-theme-mode';

// const getDeviceTheme = () => {
//   if (matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
//   else return 'light';
// };

// const getLSTheme = () => {
//   const lsTheme = localStorage.getItem(themeKey);
//   if (lsTheme && (lsTheme === 'dark' || lsTheme === 'light')) return lsTheme;
//   return null;
// };

// const getInitialTheme = () => {
//   const lsTheme = getLSTheme();
//   if (lsTheme === 'dark' || lsTheme === 'light') return lsTheme;
//   return 'device';
// };

// const getDarkTheme = () => {
//   document.documentElement.classList.add('dark');
// };

// const setLightTheme = () => {
//   document.documentElement.classList.remove('dark');
// };

// const setDeviceTheme = () => {
//   const deviceTheme = getDeviceTheme();
//   if (deviceTheme === 'dark') getDarkTheme();
//   else setLightTheme();
// };

// const setLSLightTheme = () => {
//   localStorage.setItem(themeKey, 'light');
//   setLightTheme();
// };

// const setLSDarkTheme = () => {
//   localStorage.setItem(themeKey, 'dark');
//   getDarkTheme();
// };

// const setLSDeviceTheme = () => {
//   localStorage.removeItem(themeKey);
//   setDeviceTheme();
// };

// const initialTheme = getInitialTheme();
// if (initialTheme === 'dark') getDarkTheme();
// else if (initialTheme === 'light') setLightTheme();
// else setDeviceTheme();

// export {};
