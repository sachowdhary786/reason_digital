<template>
    <section class="section">
        <div class="container">
            <a class="logo">LOGO IMAGE</a>
            <button class="btn btn--primary nav-button">Menu</button>
            <nav class="section-nav">
                <ul class="section-nav__menu">
                    <li v-for="navItem in  navItems " :key="navItem.id" class="section-nav__menu-item">
                        <router-link :to="navItem[0].link_url[0].text" class="section-nav__menu-link">
                            <span>
                                {{ navItem[0].link_text[0].text }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>
  
<script>
import './style.scss'
export default {
    name: 'SectionBlock',
    computed: {
        navItems() {
            return this.$store.getters.getNavItems;
        }
    },
    created() {
        this.$store.dispatch('fetchNavItems');
    }
}
</script>
  