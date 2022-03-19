import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

function render(){
    createApp(App).mount('#app')
} 



if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}
renderWithQiankun({
    bootstrap() {
        console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
    },
    mount(props) {
        render(props);
    },
    unmount() {
        // instance.unmount();
        // instance._container.innerHTML = '';
        // instance = null;
    }
})
