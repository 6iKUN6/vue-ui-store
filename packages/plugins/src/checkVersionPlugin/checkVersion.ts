import axios from 'axios';

const CURRENT_VERSION_KEY = 'current_verison';

const getConfig = () => {
  return new Promise<Record<string, string>>(resolve => {
    axios
      .get('/config.json', {
        params: {
          _t: Date.now()
        }
      })
      .then((res: any) => {
        resolve(res.data);
      });
  });
};

export async function checkVersion() {
  const config = await getConfig();
  const newVersion = config.version;
  const oldVersion = localStorage.getItem(CURRENT_VERSION_KEY);

  if (!oldVersion) {
    localStorage.setItem(CURRENT_VERSION_KEY, newVersion);

    return;
  }

  if (newVersion !== oldVersion) {
    console.log('有新版本，请刷新页面');
  }
}
