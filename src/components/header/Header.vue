<template>
    <header class="header">
        <div class="container">
            <ul class="header-nav">
                <li v-for="menuItem in menuItems" :key="menuItem.id" class="header-nav__menu-item">

                    <a :href="menuItem[0].link_url[0].text" :class="'header-nav__menu-link--' + menuItem[0].link_class[0].text"
                        class="header-nav__menu-link">
                        <span class="header-nav__label">{{ menuItem[0].link_text[0].text }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>
  
<script>
import './style.scss'
export default {
    name: 'HeaderBlock',
    computed: {
        menuItems() {
            console.log('Menu items:', this.$store.getters.getMenuItems);
            return this.$store.getters.getMenuItems;
        }
    },
    created() {
        this.$store.dispatch('fetchMenuItems');
    }
}
</script>