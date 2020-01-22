## Testing samesite cookie behaviour with redirects

how to test:

- A = this app 
- B = [Troy Hunt's demo app](http://originsite.azurewebsites.net/readcookies/)


1. visit http://originsite.azurewebsites.net/setcookies/ to set cookies
1. visit http://originsite.azurewebsites.net/readcookies/ to see that cookies have been set
1. run A locally:

    ```
    node index.js
    ```

2. visit http://localhost:3000/page

3. click "submit"
4. you'll `POST /redirect` and that will respond with a 302 redirect to `http://originsite.azurewebsites.net/readcookies/`
5. see what cookies have been set. In our test, we saw 

```
Cookie: StrictCookie=This cookie was set with SameSite "Strict"; NoneCookie=This cookie was set with SameSite "None"; DefaultCookie=This cookie was not set with a SameSite policy; LaxCookie=This cookie was set with SameSite "Lax"
```

  