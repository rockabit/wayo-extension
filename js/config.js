var config =  {

    debug: false,
    basePath:   '/',
    //server: 'http://wayo.local:8888/app_dev.php/',
    server: 'http://wayo.rockabit.com/',
    endpoints: {
        login:    'json/login',
        sendLink: 'json/link/send',
        getLinkMeta: 'json/link/meta',
        getNumUnread: 'json/user/{id}/unread',
        receivedLinks: 'json/user/{id}/links/received',
        sentLinks: 'json/user/{id}/links/sent',
        linksReceivedAfter: 'json/user/{id}/links/after/{link_id}',
        setLinkSeen: 'json/link/{id}/seen',
        favLink: 'json/link/{id}/fav',
        unfavLink: 'json/link/{id}/unfav',
        hideLink: 'json/link/hide'
    },
    linkPollTimout: 5 * 1000
};
