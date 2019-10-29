
import { createHookApp } from '@forrestjs/hooks'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default createHookApp({
    trace: true,
    services: [
        require('@forrestjs/service-env'),
        require('@forrestjs/service-logger'),
        require('./services/service-onesignal'),
        // require('@forrestjs/service-jwt'),
        // require('@forrestjs/service-express'),
        // require('@forrestjs/service-express-cookies'),
        // require('@forrestjs/service-express-graphql'),
        // require('@forrestjs/service-express-graphql-test'),
        // require('@forrestjs/service-express-session'),
        // require('@forrestjs/service-postgres'),
        // require('@forrestjs/service-postgres-pubsub'),
    ],
    features: [
        // require('./features/feature-pg-auth'),
        // require('./features/feature-pg-session'),
    ],
    settings: async ({ setConfig, getEnv, getConfig }) => {
        setConfig('onesignal', {
            url: 'https://onesignal.com/api/v1/notifications',
            appId: getEnv('ONESIGNAL_APP_ID'),
            apiKey: getEnv('ONESIGNAL_API_KEY'),
        })
        // setConfig('express.session.duration', '100y')

        // setConfig('jwt', {
        //     secret: getEnv('JWT_SECRET'),
        //     duration: getEnv('JWT_DURATION'),
        // })

        // setConfig('postgres.connections', [{
        //     connectionName: 'default',
        //     host: getEnv('PG_HOST'),
        //     port: getEnv('PG_PORT'),
        //     database: getEnv('PG_DATABASE'),
        //     username: getEnv('PG_USERNAME'),
        //     password: getEnv('PG_PASSWORD'),
        //     maxAttempts: Number(getEnv('PG_MAX_CONN_ATTEMPTS', 25)),
        //     attemptDelay: Number(getEnv('PG_CONN_ATTEMPTS_DELAY', 5000)),
        //     models: [],
        // }])

        // setConfig('postgresPubSub', [{
        //     connectionName: 'default',
        //     host: getEnv('PG_HOST'),
        //     port: getEnv('PG_PORT'),
        //     database: getEnv('PG_DATABASE'),
        //     username: getEnv('PG_USERNAME'),
        //     password: getEnv('PG_PASSWORD'),
        // }])
    },
})
