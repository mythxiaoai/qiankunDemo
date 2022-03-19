import { createApp } from 'vue'
import App from './App.vue'

function render() {
    createApp(App).mount('#app')
}





if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props) {
    render(props);
}

export async function unmount() {
    instance.unmount();
    if (instance._container) {
        instance._container.innerHTML = '';
    }
    history.destroy();
}