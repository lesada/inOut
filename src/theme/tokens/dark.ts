import base from './base';

const dark = {
  button: {
    primary: {
      enabled: base.secondary[800],
      hover: base.secondary[700],
      focused: base.secondary[900],
    },

    secondary: {
      enabled: base.neutral[100],
      hover: base.primary[100],
      focused: base.primary[300],
      stroke: base.secondary[700],
    },

    danger: {
      enabled: base.error[700],
      hover: base.error[400],
      focused: base.error[800],
    },

    disabled: base.neutral[200],
  },

  text: {
    dark: base.neutral[900],
    light: base.neutral[100],

    blue: base.neutral[0],
    gray: base.neutral[700],
    purple: base.neutral[100],
    filter: base.neutral[100],
    placeholder: base.neutral[500],
  },

  background: {
    header: base.neutral[900],
    default: base.neutral[1000],
  },

  input: {
    bg: {
      default: base.neutral[900],
      disabled: base.neutral[300],
    },
    stroke: {
      default: base.neutral[200],
      focus: base.secondary[500],
      disabled: base.neutral[400],
    },
  },

  timer: {
    bg: base.neutral[0],
    circle: {
      light: base.secondary[200],
      dark: base.secondary[800],
    },
  },

  calendar: {
    bg: base.neutral[0],
    header: base.secondary[500],

    input: {
      default: base.neutral[200],
      focused: base.secondary[800],
    },
  },

  icons: base.neutral[100],
};

export default dark;
