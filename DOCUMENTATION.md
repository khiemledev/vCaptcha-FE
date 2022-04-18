# vCaptcha Usage Documentation

## 1. Load script to webpage

``` html
<script src="https://aiclub.uit.edu.vn/captcha/bundle.js" async defer></script>
````

## 2. Render vCaptcha element to webpage

### 2.1. Implicit way of rendering

By default, vCaptcha will render onto element with `id` of `"vcaptcha-body"`. So you can just put an empty div with that `id` in your webpage and vCaptcha should be rendered fine:
``` html
<div id="vcaptcha-body"></div>
```

### 2.2. Explicit way of rendering

You can also explicictly tell vCaptcha to render element onto specific element by passing its `id` to `vCaptcha.render` like this:

``` html
<script type="text/javascript">
    vCaptcha.render("vcaptcha-content");
</script>
````
***Caveat: calling vCaptcha.render in async script may not work.***