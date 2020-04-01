const STORAGE_NAME = "videoHistory";

export const getHistory = () => {
  const items = JSON.parse(localStorage.getItem(STORAGE_NAME));
  const filterCondition = item => (item !== null && item.source != null && item.time != null);

  return Array.isArray(items) ? items.filter(filterCondition) : [];
};

export const pushToHistory = (source, time) => {
  const history = getHistory();
  const indexOfLastObject = getIndexBySource(history, source);

  if (indexOfLastObject !== -1) {
    delete history[indexOfLastObject];
  }

  history.unshift({
    source,
    time: Math.floor(time),
    date: (new Date()).toLocaleString()
  });

  save(history);
  return history;
};

function getIndexBySource(items, source) {
  const condition = (item) => item.source === source;

  return items.findIndex(condition);
};

function save(items) {
  items = items.filter(item => item !== null).slice(0, 15);
  localStorage.setItem(STORAGE_NAME, JSON.stringify(items));
};
