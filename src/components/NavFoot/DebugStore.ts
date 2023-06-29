import { atom } from "nanostores";

var $dataTheme = atom("light" || "dark");
var $hasClickedStartButton = atom("false" || "true");

export { $dataTheme, $hasClickedStartButton };
