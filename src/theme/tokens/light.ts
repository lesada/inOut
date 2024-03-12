import base from './base';

const light = {
  button: {
    primary: {
      enabled: base.primary[800],
      hover: base.primary[700],
      focused: base.primary[900],
    },

    secondary: {
      enabled: base.neutral[100],
      hover: base.primary[100],
      focused: base.primary[300],
      stroke: base.primary[700],
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

    blue: base.primary[600],
    gray: base.neutral[700],
    purple: base.secondary[800],
    filter: base.primary[700],
    placeholder: base.neutral[500],
  },

  background: {
    header: base.neutral[0],
    default: base.neutral[100],
  },

  input: {
    bg: {
      default: base.neutral[0],
      disabled: base.neutral[300],
    },
    stroke: {
      default: base.neutral[200],
      focus: base.primary[500],
      disabled: base.neutral[400],
    },
  },

  timer: {
    bg: base.neutral[0],
    circle: {
      light: base.primary[200],
      dark: base.primary[600],
    },
  },

  calendar: {
    bg: base.neutral[0],
    header: base.primary[500],

    input: {
      default: base.neutral[200],
      focused: base.primary[800],
    },
  },

  icons: base.primary[800],
};

export default light;
