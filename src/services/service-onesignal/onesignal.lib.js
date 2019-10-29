
let config = null

export const init = ({ getConfig }) => {
    config = getConfig('onesignal')
}

export const send = async ({ url, text, devices }) => {
    const query = await fetch(config.url, {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + config.apiKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            app_id: config.appId,
            ...(text ? { contents: { en: text } } : {}),
            ...(devices ? { include_player_ids: devices } : {}),
            ...(url ? { app_url: url } : {}),
            // ios_badgeType: 'Increase',
            // ios_badgeCount: 1,
        }),
    })

    const json = await query.json()

    if (json.errors) {
        throw new Error(json.errors[0])
    }

    return json
}

