import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2/dist/sweetalert2.min.js'

export default {
    install(Vue) {
        /**
         * helper function to add a Vue component inside the SweetAlert content
         * the component must be created 
         * 
         * @param {Object} component a vue component definition
         * @param {Object} args arguments to pass to the component on creation (propsData, etc...)
         */
        Swal.addVueComponent = function(vue_component, args={}) {
            try {
                // make sure we have a Vue constructor
                if(typeof vue_component==='object') {
                    vue_component = Vue.extend(vue_component)
                }
                const content = this.getContent()
                const container = document.createElement('div')
                content.appendChild(container)
                this.component = new vue_component(args).$mount(container)
            } catch (error) {
                console.log('error inserting the vue component', error)
            }
        }

        /**
         * extend the fire method to accept a vue component
         * store a reference to the component instance in the component variable
         */
        Swal._fire = Swal.fire // keep a reference to the original method
        Swal.fire = function({component=null, component_args={}, ...settings}) {
            const modal = this._fire(settings)
            if(component) {
                if(typeof component != 'function') console.log('You must provide a VueComponent')
                this.component = this.addVueComponent(component, component_args)
            }
            return modal
        }
        /**
         * return the component embedded in the modal
         */
        Swal.getComponent = function() {
            return this.component || null
        }

        // set a global reference
        Vue.$swal = Swal
        // Vue instance property
        Vue.prototype.$swal = Swal
    },
}