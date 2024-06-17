import { useEffect } from "react";
function login(delay: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30, // optional, defaults to 60
            })
        })
            .then(res => res.json())
            .then(console.log);
    }, []);
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}
export default login;

