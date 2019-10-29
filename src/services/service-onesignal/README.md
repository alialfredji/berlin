# service-onesignal

Provides functionality to communicate with onesignal REST api
Reference: https://documentation.onesignal.com/reference


## Required eniroment variables

```js
registerAction({
    hook: SETTINGS,
    name: '♦ boot',
    handler: async ({ setConfig, getEnv }) => {
        setConfig('onesignal', {
            url: 'https://onesignal.com/api/v1/notifications',
            appId: getEnv('ONESIGNAL_APP_ID'),
            apiKey: getEnv('ONESIGNAL_API_KEY'),
        })
    },
})
```