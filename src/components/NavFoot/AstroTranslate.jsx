/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { NavFootContent } from '@store/translations/en';

export function LicenseTranslate() {
   const tf = useStore(NavFootContent);
   return <span>&nbsp;{tf().license}&nbsp;</span>;
}
