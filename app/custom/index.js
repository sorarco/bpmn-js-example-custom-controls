import CustomContextPad from './CustomContextPad';
import CustomPalette from './CustomPalette';
import CustomContextPadProvider from './CustomContextPadProvider';
import CustomReplaceMenuProvider from "./CustomReplaceMenuProvider";

export default {
  __init__: ['customContextPad', 'customPalette', 'customMenuProvider'],
  customContextPad: ['type', CustomContextPad],
  customPalette: ['type', CustomPalette],
  contextPadProvider: ['type', CustomContextPadProvider],
  customMenuProvider: ['type', CustomReplaceMenuProvider]
};