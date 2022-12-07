A Javascript module that makes sure Google's reCAPTCHA API is loaded before
creating the v2 reCAPTCHA element on the page. The function provided returns a 
Promise that resolves to a wrapper object on the `grecaptcha` object.

Basic usage:

```js
import captcha from 'ohjs-grecaptcha';

// params here are the same as grecaptcha.render()
const myCaptcha = await captcha('my-captcha-container', {
   'sitekey': 'SITE_KEY',
});

// callables for grecaptcha.reset(widget_id) and grecaptcha.getResponse(widget_id)
//myCaptcha.reset();
//myCaptcha.getResponse();
```
