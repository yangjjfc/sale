import Router from 'vue-router';
const myRouter = new Router({
    mode: 'history',
    routes: [
        ...(window.EventBus.addRoute || [])
    ]
});
if (!window.EventBus.addRoute) {
    window.EventBus.$on('getRouter', target => {
        myRouter.addRoutes(target);
    });  
}
export default myRouter;
