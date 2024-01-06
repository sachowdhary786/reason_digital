import { createStore } from 'vuex';
import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://reason-digital.cdn.prismic.io/api/v2';

export default createStore({
    state: {
        menuItems: [],
        navItems: []
    },
    mutations: {
        setMenuItems(state, items) {
            state.menuItems = items;
        },
        setNavItems(state, items) {
            state.navItems = items;
        }
    },
    actions: {

        async fetchMenuItems({ commit }) {
            try {
                const response = await Prismic.client(apiEndpoint)
                    .getByUID('menu_items', 'menu-links');
                let menuItems = response.data;
                commit('setMenuItems', menuItems);
            } catch (error) {
                console.error('Error fetching menu items from Prismic:', error);
            }
        },
        async fetchNavItems({ commit }) {
            try {
                const response = await Prismic.client(apiEndpoint)
                    .getByUID('nav_links', 'nav-links');
                let navItems = response.data;
                commit('setNavItems', navItems);
            } catch (error) {
                console.error('Error fetching menu items from Prismic', error);
            }
        }
    },
    getters: {
        getMenuItems: (state) => state.menuItems,
        getNavItems: (state) => state.navItems
    },
});
