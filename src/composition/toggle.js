import {ref} from '@vue/composition-api';
export function useToggle() {
    const visible = ref(true);
    /*ref - мы создаем реактивную ссылку; ref возвращает объект, у которого есть свойство value*/
    const toggle =  () => {
        visible.value = !visible.value
    }
    return {visible, toggle}

}