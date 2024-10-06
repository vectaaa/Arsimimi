export const withOpacity = (color: string, opacity: number) => {
    if (opacity < 0 || opacity > 1) {return color;}
    const hex = (opacity * 255).toString(16).toUpperCase().split('.')[0];
    return `${color}${hex.length === 1 ? '0' : ''}${hex}`;
  };