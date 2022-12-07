import scriptLoader from '../ohjs-script-loader/index.js';

const callback = 'ohjsOnRecaptchaApiReady';

const url = 
`https://www.google.com/recaptcha/api.js?onload=${callback}&render=explicit`

let ready = false;

window[callback] = function() {
    ready = true;
};

/**
 * Ensures the reCAPTCHA script is loaded before creating a reCAPTCHA element.
 *
 * See https://developers.google.com/recaptcha/docs/display#js_api for
 * description of parameters/functions.
 *
 * @return {Promise} - Resolves with a wrapper for remaining grecaptcha functions.
 */
export default function(container, parameters) {
    return scriptLoader(url, () => ready).then(() => {
        const widgetId = grecaptcha.render(container, parameters);

        return {
            reset() {
                return grecaptcha.reset(widgetId);
            },

            getResponse() {
                return grecaptcha.getResponse(widgetId);
            },
        };
    });
}
