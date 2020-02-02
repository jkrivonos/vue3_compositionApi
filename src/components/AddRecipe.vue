<template>
  <form class="form" @submit.prevent="submit">
    <h1>Добавить рецепт</h1>
    <div v-if="show">
      <div class="input">
        <input type="text" placeholder="Название рецепта" v-model="form.title">
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта" v-model="form.description">
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Создать</button>
      <button class="btn secondary" type="button" @click="changeShow">
        {{ show ? 'Убрать' : 'Показать' }} форму</button>
    </div>
  </form>
</template>

<script>
  import { ref, reactive, computed } from '@vue/composition-api'
  import { useToggle } from '../composition/toggle'
  import { useForm } from '../composition/form'

  export default {
    props: {
        onAdd : {
            type: Function,
            required: true
        }

    },
    /*здесь настраиваем компонент и говорим как в нем все будет работать.
    Нет this. Этот метод вызывается до того как был проинициализировае компонент.
    В нем всегда возвращаем объект с ключами, которые будут доступны в шаблоне*/
    setup(props) {



        const {visible: show, toggle: changeShow} = useToggle()
        return {
            show, changeShow,
            ...useForm(props)
        }


    },
//    data(){
//        return {
//            title: '',
//            description: '',
//            visible: true
//        }
//    },
//    methods: {
//        toggle() {
//          this.visible = !this.visible;
//        },
//        submit(){
//            const recipe = {
//                title: this.title.trim(),
//                description: this.description.trim(),
//                id: Date.now().toString()
//            };
//            this.title = this.description='';
//
//            this.onAdd(recipe);
//
//        }
//    },
//    computed: {
//        valid() {
//            return this.title.trim() && this.description.trim()
//        }
//    }

}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
