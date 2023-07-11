import { atom } from 'nanostores';

const $dataTheme = atom('light' || 'dark');
const $hasClickedStartButton = atom('false' || 'true');

export { $dataTheme, $hasClickedStartButton };
