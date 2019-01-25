export default (props) => {
  const invalids = {};
  const onChange = ({ id }) => {
    if (props[id].color === 'red-all')
      props[id].color = 'red';
    if (props[id].valid) {
      delete invalids[id];
    } else {
      invalids[id] = 1;
    }
  }
  for (let [key, value] of Object.entries(props)) {
    props[key].onChange = onChange;
    if (!('id' in value))
      props[key].id = key;
  }
  return () => invalids;
}