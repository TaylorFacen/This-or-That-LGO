export default {
    parseCookie: async () => {
        const cookieQuery = document.cookie.split(';').filter(c => c.trim().substr(0, 6) === 'totlgo');

        if ( cookieQuery.length === 1) {
            const cookie = cookieQuery[0].split('=')[1];
            const cookieData = JSON.parse(decodeURI(cookie));

            return cookieData
        } else {
            return null
        }
    },

    removeCookie: async () => {
        document.cookie = "totlgo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    },

    setCookie: async email => {
        const expirationDate = new Date(Date.now() + 86400e3).toUTCString();
        const cookieData = JSON.stringify({email});
        const uriEncodedCookieData = encodeURI(cookieData);
        document.cookie = `totlgo=${uriEncodedCookieData}; expires=${expirationDate}; path=/;`;

        return uriEncodedCookieData
    }
}