
import { createHookApp } from '@forrestjs/hooks'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default createHookApp({
    services: [
        require('@forrestjs/service-env'),
        require('@forrestjs/service-logger'),
        require('@forrestjs/service-jwt'),
        require('@forrestjs/service-express'),
        require('@forrestjs/service-express-cookies'),
        require('@forrestjs/service-express-graphql'),
        require('@forrestjs/service-express-graphql-test'),
        require('@forrestjs/service-express-session'),
    ],
    features: [],
    trace: true,
    settings: async ({ setConfig }) => {
        setConfig('jwt', {
            secret: 'secret',
            duration: '10y',
        })
    },
})
