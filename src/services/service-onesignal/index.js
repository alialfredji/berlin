
import * as hooks from './hooks'
import { init } from './onesignal.lib'
export { send } from './onesignal.lib'

// Applies default values to `onesignal` config object
const buildConfig = ({ getConfig, setConfig }) => {
    const config = {
        ...getConfig('onesignal', {}),
        url: getConfig('onesignal.url', 'https://onesignal.com/api/v1/notifications'),
        apiKey: getConfig('onesignal.apiKey'),
        appId: getConfig('onesignal.appId'),
    }

    setConfig('onesignal', config)
    return config
}

export default ({ registerHook, registerAction }) => {
    registerHook(hooks)

    const defaults = {
        trace: __dirname,
        name: hooks.SERVICE_NAME,
    }

    registerAction({
        ...defaults,
        hook: '$INIT_SERVICE',
        handler: async (args, ctx) => {
            await buildConfig(ctx)
            await init(ctx)
        },
    })

    // registerAction({
    //     ...defaults,
    //     hook: '$START_SERVICE',
    //     handler: async (args, ctx) => {
    //         await send({
    //             text: 'foo',
    //             devices: ['9320a301-8afe-407f-a2d1-5a0f37426eb3'],
    //         })
    //     },
    // })
}
