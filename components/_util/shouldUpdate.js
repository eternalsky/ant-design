function shouldUpdate(alterable, props, nextProps) {
  for (let i = 0; i < alterable.length; i++) {
    if (props[alterable[i]] !== nextProps[alterable[i]]) {
      return true;
    }
  }
  return false;
}

export default shouldUpdate;
