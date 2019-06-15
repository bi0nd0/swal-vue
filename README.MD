# swal-vue

Vue.js wrapper for SweetAlert2.


---

## Get started


```bash
yarn add swal-vue
```


```js
// main.js
import Vue from 'vue';
import SwalVue from 'swal-vue';

Vue.use(SwalVue);
```

Now in the global object, you can access all the methods of [sweetalert2](https://github.com/limonte/sweetalert2).

If you want to add global options like button colors, do something like this:
```js
// main.js
import Vue from 'vue';
import SwalVue from 'swal-vue';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Vue.use(SwalVue, options)
```


```html
// vue-component.vue
<template>
    <button @click="showAlert">Hello world</button>
</template>

<script>
import anotherVueComponent from 'another-vue-component.vue'

export default {
    methods: {
        showAlert(){
            // Use sweetalert2
            this.$swal.fire({
                type: 'success',
                title: 'Hello world',
                text: 'hi from swal-vue',
            })
        },
        showAlertWithComponnet(){
            // Use sweetalert2
            this.$swal.fire({
                type: 'success',
                title: 'Hello world',
                text: 'hi from swal-vue',
                component: anotherVueComponent,
                componentArgs: {propsData: {msg: 'hello world'}}
            })
            // if you need access to the componnet
            const componnet = this.$swal.getComponent()
        },
        showAlertWithComponnet2(){
            // Use sweetalert2
            this.$swal.fire({
                type: 'success',
                title: 'Hello world',
                text: 'hi from swal-vue',
            })
            this.$swal.addVueComponent(anotherVueComponent, {propsData: {msg: 'hello world'}})
            // if you need access to the componnet
            const componnet = this.$swal.getComponent()
        }
    }
}
</script>
```

// Or
```js
Vue.$swal('Hello world!');
```

## The documentation for `sweetalert2`, you can find [here](https://sweetalert2.github.io/).